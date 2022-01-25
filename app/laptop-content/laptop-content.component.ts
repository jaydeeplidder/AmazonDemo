import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { laptops } from './laptop';

@Component({
  selector: 'app-laptop-content',
  templateUrl: './laptop-content.component.html',
  styleUrls: ['./laptop-content.component.css']
})
export class LaptopContentComponent {

  constructor(private http:HttpClient) { 
    console.log(this.getLaptop());
    console.log(this.getToday());
    console.log(this.getProducts());
  }


  lap:any;
  today:any;
  products:any
  getLaptop(){
    this.http.get<laptops[]>("https://my-json-server.typicode.com/jaydeeplidder/JsonDemo/laptop").subscribe(response=>{
      this.lap=response.map(e=>({image:e.image}))
    
  })
  }
  getToday(){
    this.http.get<laptops[]>("https://my-json-server.typicode.com/jaydeeplidder/JsonDemo/today").subscribe(response=>{
      this.today=response.map(e=>({image:e.image}))
    
  })
  }
  getProducts(){
    this.http.get<laptops[]>("https://my-json-server.typicode.com/jaydeeplidder/JsonDemo/products").subscribe(response=>{
      this.products=response.map(e=>({image:e.image}))
    
  })
  }

}
