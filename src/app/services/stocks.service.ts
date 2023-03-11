import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StockModel} from "../Model/Entities/app.model";

let stocks: string[] = ['AAPL', 'GOOG','FB','AMZN','TWTR'];
let service: string='https://angular2-in-action-api.herokuapp.com';

export  interface Stockinterface{
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;

}
@Injectable({
  providedIn: 'root'
})
export class StocksService {

  stock1 : StockModel = new StockModel('AAPL',1000,1,-1);
  stock2 : StockModel = new StockModel('GOOG',900,4,3);
  stock3: StockModel = new StockModel('FB',760,5,-1);
  stock4: StockModel = new StockModel('AMZN',999,0,1);
  stock5: StockModel = new StockModel('TWTR',1300,1,-5);
  stock6: StockModel = new StockModel('BELFIUS',450,1,-0);

  stockmodel: Array<StockModel>=[];

  constructor(private http: HttpClient) {
    this.stockmodel.push((this.stock1));
    this.stockmodel.push((this.stock2));
    this.stockmodel.push((this.stock3));
    this.stockmodel.push((this.stock4));
    this.stockmodel.push((this.stock5));
    this.stockmodel.push((this.stock6));
    console.log('Constructeur du service');
  }

  getStock(){
    return this.stockmodel;
  }
  get(){
    return this.stockmodel.slice();
  }

  add(stock: StockModel){
    this.stockmodel.push(stock);
  }

  remove(stock: StockModel){
    this.stockmodel.splice(this.stockmodel.indexOf(stock),1);
    return stock.symbol;
  }


  load(symbols: string){
    //if  (symbols){
      return this.http.get<Stockinterface[]>(service +'/stocks/snapshot?symbols=' + symbols);
    //}

  }
}
