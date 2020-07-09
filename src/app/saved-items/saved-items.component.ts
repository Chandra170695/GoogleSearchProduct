import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.component.html',
  styleUrls: ['./saved-items.component.css']
})
export class SavedItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //loading the savedlist
    this.savedItems = JSON.parse(sessionStorage.getItem("savedList"));
  }

  keyword:string;
  p:number=1;
  savedItems:any[]=[];
  msg:string;
 delete(){
   // to delete all checked links from the savedlist
  for(let i=0; i<this.savedItems.length; i++){
   
    if(this.savedItems[i].delChecked){
      this.savedItems.shift();
      this.msg ="Items are deleted successfully !"
    }
    
  }
  //updating the sessions with modified list
  sessionStorage.setItem("savedList", JSON.stringify(this.savedItems));
 }
}
