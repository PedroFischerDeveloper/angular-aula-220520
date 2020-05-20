import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

interface Response {
  disclaimer: String,
  chartName: String, 
  bpi: any
}
interface Update {
  data: Object
}


@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})

export class CoinComponent implements OnInit {
  
  currentData: Response;
  topName: String;
  DateNow: Date;

  updateList: Array<Update> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCoin("");
  }


  getCoin(coin) {
    
    if(coin==="BRL") {
      this.topName = "BRL";
    }

    if(coin==="USD") {
      this.topName = "USD";
    }

    this.http.get<Response>(`https://api.coindesk.com/v1/bpi/currentprice/${coin}.json`)
    .subscribe(data => {
      console.log(data)
      this.DateNow = new Date();
      this.currentData = data;
      this.updateList.push({
        data: this.currentData = data,
      });        
    });
  }

}
