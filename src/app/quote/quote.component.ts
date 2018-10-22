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
    new Quote(4," If you cannot do great things, do small things in a great way.","Napoleon Hill","Tugi",0,0,new Date(2014,9,20)),
    new Quote(5,"Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.","Marcel","dre",0,0,new Date(2015,9,21)),
    new Quote(6,"The supreme art of war is to subdue the enemy without fighting.","Sun","Tzu",0,0,new Date(2016,9,21)),
    new Quote(7,"Always remember that you are absolutely unique. Just like everyone else.","Clinton","Okerio",0,0,new Date(2018,9,21)),
    new Quote(8,"You are closer to death now than then"," Cynthia","Muriithi",0,0,new Date(2018,9,21)),
    new Quote(9,"Shave,like face,like head.","Principal","FJ",0,0,new Date(2018,9,21)),
    new Quote(10,"The supreme art of war is to subdue the enemy without fighting.","Sun","Tzu",0,0,new Date(2018,9,21)),
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