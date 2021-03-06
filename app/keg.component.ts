import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { AlcoholComponent } from './alcohol.component';


@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [AlcoholComponent],
  template: `
    <div class="kegItem">
      <h3
      [class.high]="keg.price >= 8"
      [class.medium]="keg.price > 3 && keg.price <8"
      [class.cheap]="keg.price <= 3">{{keg.beerName}} - $\{{keg.price.toFixed(2)}}</h3>
      <h4> ABV= {{keg.abv}}%, Brewery: {{keg.beerBrand}}, Pints Remaining: {{keg.pintCount}} </h4>
      <input placeholder="Number of Pints" type="number" #newPints>
      <button class="btn-sm btn-info" (click)="beerSale(newPints)">Sell Pints</button>
      <alcohol *ngIf="keg.abv > 3"></alcohol>
      <alcohol *ngIf="keg.abv > 4.5"></alcohol>
      <alcohol *ngIf="keg.abv > 6"></alcohol>
      <alcohol *ngIf="keg.abv > 8"></alcohol>
      <alcohol *ngIf="keg.abv > 10"></alcohol>
    </div>
  `
})

export class KegComponent {
  public keg: Keg;
  beerSale(userPints: HTMLInputElement): void {
    var pints : number;
    pints = parseInt(userPints.value);
    userPints.value= "";
    if (this.keg.pintCount > pints){
      this.keg.pintCount = this.keg.pintCount - pints ;

    }
    else {
      alert("Not enough beer left restock keg");
    }

  }
}
