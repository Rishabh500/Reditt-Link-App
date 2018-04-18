import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
articles: Article[];
article:Article;

  addArticle(title:HTMLInputElement,link:HTMLInputElement){
       this.articles.push(new Article(title.value, link.value, 0));
  }

  constructor() {
 this.articles = [
new Article('Angular 2', 'http://angular.io', 3),
 new Article('Fullstack', 'http://fullstack.io', 2),
new Article('Angular Homepage', 'http://angular.io', 1), ];
 }

}
