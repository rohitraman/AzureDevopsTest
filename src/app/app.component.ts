import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  response:any;
  constructor(private http:HttpClient){

  }
  ngAfterViewInit(): void {

    this.http.get("https://testangularbackend.azurewebsites.net/api/test")
              .subscribe((obj)=>{
                  this.response=obj;
              })
    }


}
