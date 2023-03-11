import { Component, OnInit } from '@angular/core';
import {StockModel} from "../../Model/Entities/app.model";
import {StocksService} from "../../services/stocks.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  stocks: StockModel[];

  constructor( service : StocksService) {

    this.stocks= service.getStock();

    console.log('reprise du stockmodel');
  }
}
