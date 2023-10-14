import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css'],
})
export class CardPricingComponent implements OnInit {
  @Input()
  gameOrder: string = '';
  @Input()
  gameName: string = '';
  @Input()
  gamePrice: string = '';

  constructor() {}

  ngOnInit(): void {}
}
