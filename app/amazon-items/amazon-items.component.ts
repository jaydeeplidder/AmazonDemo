import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { items } from './items';
import { title } from 'process';

@Component({
  selector: 'app-amazon-items',
  templateUrl: './amazon-items.component.html',
  styleUrls: ['./amazon-items.component.css']
})
export class AmazonItemsComponent  {

  constructor(private http:HttpClient) {

    console.log(this.getApi())
   }

   datails:any;

  getApi(){
    this.http.get<items[]>("https://my-json-server.typicode.com/jaydeeplidder/JsonDemo/posts").subscribe(response=>{
    // this.datails=response;
    this.datails=response.map(e=>({title:e.title,image:e.image,comment:e.comment})
    )
    console.log(this.datails);
    })
  }  

}
