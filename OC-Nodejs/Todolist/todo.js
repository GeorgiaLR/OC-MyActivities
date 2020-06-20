const fs = require("fs");
const jsonFile = "tasks-data.json";
const GLOBAL_ID_FILE ="GLOBAL_ID.txt";

var getglobalId =  fs.readFileSync(GLOBAL_ID_FILE, "utf8", function(err, globalId) {
            if (err) throw err;
            console.log(globalId);
            return parseInt(globalId);
});
   
var setGlobalId = (GLOBAL_ID) => {
    try {
        fs.writeFileSync(GLOBAL_ID_FILE, GLOBAL_ID);
    }
    catch (e) {
    console.log(e);
    }
};

var fetchTasks = () => {
  try {
    console.log("fetchTasks");
    var tasksString = fs.readFileSync(jsonFile)
    return JSON.parse(tasksString);
  } catch (e) {
    console.log(e);
    return [];
  }
};

var saveTasks = (tasks) => {
  fs.writeFileSync(jsonFile, JSON.stringify(tasks));
};

var addTask = (task) => {
    console.log("addTask");
  var tasks = fetchTasks();
  var globalId = parseInt(getglobalId);
  console.log(globalId);
  task.id = globalId + 1;
  setGlobalId(parseInt(task.id));
  console.log("Task : " + JSON.stringify(task) );

  tasks.push(task);
    saveTasks(tasks);
    return task;
};

var editTask = (task) => {
    var tasks = fetchTasks();
    var taskToEdit = tasks.find((item) => item.id === parseInt(task.id));
    taskToEdit.name = task.name;
    taskToEdit.who = task.who;
    taskToEdit.status = task.status;
    saveTasks(tasks);
    return task;
}

var getAllTasks = () => {
  return fetchTasks();
};

var getTask = (id) => {
  // fetch tasks
  var tasks = fetchTasks();
  // filter tasks, removing the one with name of argument
  var filteredTasks = tasks.filter((task) => task.id === id);
  return filteredTasks[0];
};

var removeTask = (id) => {
  // fetch tasks
  var tasks = fetchTasks();
  // filter tasks, removing the one with name of argument
  var filteredTasks = tasks.filter((task) => task.id !== parseInt(id));
  // save new tasks in the array
  saveTasks(filteredTasks);
  return tasks.length !== filteredTasks.length;
};

var logTask = (task) => {
  console.log("--");
  console.log(`name: ${task.id}`);
  console.log(`name: ${task.name}`);
  console.log(`name: ${task.who}`);
  console.log(`status: ${task.status}`);
};

module.exports = {
  addTask,
  getAllTasks,
  getTask,
  removeTask,
  editTask,
  logTask
};
