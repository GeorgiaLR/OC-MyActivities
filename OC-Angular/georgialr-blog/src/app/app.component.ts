import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'georgialr-blog';

  public posts : Array<POSTS> = [
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
    }
  ];



}

export class POSTS {
  public title: string;
  public content: string;
  public loveIts: number;
  public created_at: Date;
}
