import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent {
  eur!: number;
  usd!: number;
  conversionRate: number = 1.09;

  onSubmit() {
    this.usd = this.eur * 1.09;
  }
}
