import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
 @Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,"I'm not a follower. I'm a leader. And anyone who speaks their mind is always criticised.","Tyler the Creator","Denis",0,0,new Date(2018,9,22)),
    new Quote(2,"All y'all so worried about being likable but only a few are concerned about being great!!!","Kanye West","Kitur",0,0,new Date(2018,9,22)),
    new Quote(2,"I am a god.","Kanye West","Sammy",0,0,new Date(2018,9,22)),
        ];
  toggleDetails(index){
    this.quotes[index].showAuthor=!this.quotes[index].showAuthor;
    this.quotes[index].showFan=!this.quotes[index].showFan;
  }
  upvote(index){
    this.quotes[index].upvotes++;
  }
  downvote(index){
    this.quotes[index].downvotes++;
  }
  deleteQuote(isComplete,index){
         if (isComplete){
             let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
              if(toDelete){
                 this.quotes.splice(index,1)
             }
         }
     }
     addNewQuote(quote){
     
      this.quotes.push(quote)
   }
  constructor() { }
   ngOnInit() {
  }
 }