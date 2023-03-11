import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StocksService} from "./services/stocks.service";
import { SummaryComponent } from './components/summary/summary.component';
import { ManageComponent } from './components/manage/manage.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ManageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
