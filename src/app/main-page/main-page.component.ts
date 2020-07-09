import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor(private httpobj:HttpClient) { }

  ngOnInit(): void {
    // to load the data for mainpage
    this.getPages(); 
    //to get the previously savedlist on the mainpage.this if will not load if you are coming for the first time
    if(sessionStorage.getItem("savedList")){
      this.savedList=JSON.parse(sessionStorage.getItem("savedList"));
    }
    
  }

  pagesList:any[]=[];
  savedList:any[]=[];
  keyword:string;
  p:number=1;
  getPages(){
    this.httpobj.get('./assets/pages.json').subscribe(response=>{ this.pagesList = response as string[] } );
  }

  msg:string;
  //onclick of save button we are storing the checkedlist in sessionstorage
  save(){
      for(let i=0; i<this.pagesList.length; i++){
        // we are saving only checkedlist
        if(this.pagesList[i].checked){
          // if the link is already saved we are not letting it to save again
          if(! this.containsObject(this.pagesList[i],this.savedList) ){
            this.savedList.push(this.pagesList[i]);
          }
          this.pagesList[i].checked = false;
          //showing success message
          this.msg = "The Links are saved !";
         }
      }
      sessionStorage.setItem("savedList",JSON.stringify(this.savedList));
      
  }
 //checking if the link is already existing in previous savedlist
   containsObject(obj, list) {
     for(let i=0;i<list.length;i++)
     {
       if(list[i].name == obj.name)
       {
         return true;
       }
     }
     return false;
}
}
