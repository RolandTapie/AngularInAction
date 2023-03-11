import {Component, Input, OnInit} from '@angular/core';
import {StockModel} from "../../Model/Entities/app.model";
import {StocksService} from "../../services/stocks.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {

  @Input() stocksummary!: StockModel;

  private service: StocksService;
  stock: string ='test'
  constructor( service : StocksService) {
    this.service=service;
    console.log('Initialisation du composant Summary')
  }

  // isNegative() {
  //   if (!this.stock || this.stock.change >= 0) {
  //     return false;
  //   }
  //
  //   return true;
  // }
  //
  // isPositive() {
  //   if (!this.stock || this.stock.change <= 0) {
  //     return false;
  //   }
  //
  //   return true;
  // }


  isPositive() {
    return this.stocksummary.changeInPercent > 0 ;
  }

  isNegative() {
    return this.stocksummary.changeInPercent < 0 ;
  }

  remove(stoc:StockModel) {
    this.service.remove(stoc);
  }
}
