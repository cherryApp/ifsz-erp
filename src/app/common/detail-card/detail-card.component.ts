import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit, OnDestroy {

  @Input() item: Product;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
