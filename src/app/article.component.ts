import { Component,Input,OnChanges } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'my-article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.css' ]
})
export class ArticleComponent   {
 @Input() article: Article; 

}
