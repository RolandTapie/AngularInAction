import { Component, OnInit } from '@angular/core';
import {StocksService} from "../../services/stocks.service";
import {StockModel} from "../../Model/Entities/app.model";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent{

  symbols: Array<string>;
  stock!: string;

  constructor(private service: StocksService) {
    this.symbols = service.get().map(s => s.symbol);
  }

  add() {
    this.symbols.push(this.stock.toUpperCase());
  }

  remove(symbol: string) {
    this.symbols.splice(this.symbols.indexOf(symbol),1);
  }

}
