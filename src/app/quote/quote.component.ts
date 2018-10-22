import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
 @Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,"Jifanye mtundu nikupe mkundu.","Wahenga wa Dandora","Elias",0,0,new Date(2010,8,19)),
    new Quote(2,"Ndefu ndiyo tamu, fupi zinatekenya","wahenga wa Dar","Hessy",0,0,new Date(2012,11,19)),
    new Quote(3,"Panua paja mkwaju waja","leso ya bibi","binti shoka",0,0,new Date(2013,6,22)),
    new Quote(3,"Panua paja mkwaju waja","leso ya bibi","binti shoka",0,0,new Date(2018,9,22)),
    new Quote(3,"Panua paja mkwaju waja","leso ya bibi","binti shoka",0,0,new Date(2018,9,22)),
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