export class PostService {
  
    public posts : any = [
        {
          title: "Installer Angular",
          content: "npm install -g @angular/cli",
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: "Créer son projet Angular",
          content: "ng new mon-projet-angular --style=scss --skip-tests=true",
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: "Créer un composant",
          content: "ng generate component mon-premier",
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: "Lancer son application",
          content: "ng serve",
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: "Binding",
          content: "Event binding : (click)='function()' Two-way binding : [(ngModel)]='objet'",
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: "Directives",
          content: "*ngIf='condition' *ngFor='let obj of myArray' [ngStyle]='{color: getColor()}' [ngClass]",
          loveIts: 0,
          created_at: new Date()
        },
        {
          title: "Pipes",
          content: "{{ lastUpdate | date }} {{ lastUpdate | date: 'short' }} {{ lastUpdate | date: 'yMMMMEEEEd' }} {{ lastUpdate | date: 'yMMMMEEEEd' | uppercase }}",
          loveIts: 0,
          created_at: new Date()
        }
      ];
    
    
    
}

export class POSTS {
    public title: string;
    public content: string;
    public loveIts: number;
    public created_at: Date;
  }
  