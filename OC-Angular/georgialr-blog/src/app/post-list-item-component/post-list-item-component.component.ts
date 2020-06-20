import { Component, OnInit, Input, Output } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onLike() : void {
    console.log("Actual " + this.postLikes);
    this.postLikes++;
    console.log("Actual " + this.postLikes);
  }

  onDisLike() : void {
    console.log("Actual " + this.postLikes);
    this.postLikes--;
    console.log("Actual " + this.postLikes);
  }

  getColor() {

    if(this.postLikes > 0){
      return "green";
    }
    else if(this.postLikes < 0) {
      return "red";
    }

  }
  

}
