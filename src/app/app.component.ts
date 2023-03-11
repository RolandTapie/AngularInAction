import { Component } from '@angular/core';
import {Stockinterface, StocksService} from "./services/stocks.service";
import {StockModel} from "./Model/Entities/app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularInAction';

}
