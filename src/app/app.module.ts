import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ RouterModule,Routes} from '@angular/router';

import { FormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';


const page : Routes =[
                        {path:"header", component :HeaderComponent },
                        {path:"mainPage", component :MainPageComponent},
                        {path:"savedItems", component :SavedItemsComponent},
                        {path:"",redirectTo:"/mainPage", pathMatch:"full"}
                      ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SavedItemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(page ,{useHash:true}),
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
