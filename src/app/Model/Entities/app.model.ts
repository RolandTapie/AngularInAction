export class StockModel{

  symbol: string
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;

  constructor(symbol: string, lastTradePriceOnly: number, change: number, changeInPercent: number) {
    this.symbol = symbol;
    this.lastTradePriceOnly = lastTradePriceOnly;
    this.change = change;
    this.changeInPercent = changeInPercent;
  }
}
