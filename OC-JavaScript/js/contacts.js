/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

class Contact {
    constructor(nom, prenom) {
      this.nom = nom;
      this.prenom = prenom;
    }
};

let contacts = [
    {
        nom: "Lévisse",
        prenom: "Carole"
    },
    {
        nom: "Nelsonne", 
        prenom: "Mélodie"
    }
];

function checkAction(action) {

    switch (action) {

        case '1':
        listContacts(contacts);
        checkAction(prompt("Quelle action voulez vous réaliser ?"));
        break;
    
        case '2':
        const contact = prompt("Saisissez le nom de votre contact comme suit : Nom Prenom");
        const newContact = contact.split(" ");
        addContact(newContact[0], newContact[1]);
        checkAction(prompt("Quelle action voulez vous réaliser ?"));
        break;
    
        case '0':
        console.log("A bientôt");
        break;
    
        default:
        console.log("Je n'ai pas compris votre demande");
        checkAction(prompt("Quelle action voulez vous réaliser ?"));

    }
}

function listContacts(contacts) {
    console.log("Voici votre liste de contacts : ");

    contacts.forEach(contact => {
        console.log(contact.prenom + " " + contact.nom);
    });
}

function addContact(nomContact, prenomContact) {
    let newContact = new Contact(nomContact, prenomContact);
    contacts.push(newContact);
    console.log("Votre contact a été ajouté");
}

console.log("Bienvenue dans votre carnet d'adresses.");
console.log("1 : Lister vos contacts");
console.log("2 : Ajouter un nouveau contact");
console.log("0 : Quitter");

checkAction(prompt("Quelle action voulez vous réaliser ?"));






