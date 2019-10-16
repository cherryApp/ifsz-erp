import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { Observable, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [LoggerService]
})
export class ProductComponent {
  // Title of the application.
  title: string = 'ifsz-erp application';
  count: number = 0;
  date: Date = new Date();
  dateFormatter: string = 'yyyy-MM-dd hh:mm:ss';

  phrase: string = "";

  currentWidth: number = window.innerWidth;
  watcher: Subscription = fromEvent(window, 'resize').subscribe(
    ev => this.currentWidth = window.innerWidth
  );
  
  columns: {key: string, title: string}[] = [
    {key: "id", title: "#"},
    {key: "name", title: "Name"},
    {key: "price", title: "Price"},
    {key: "manufacturer", title: "Man."},
    // {key: "itemCode", title: "Code"},
    {key: "description", title: "Desc."},
  ];
  filterKey: string = this.columns[0].key;

  list$: Observable<Product[]> = this.productService.getAll();
  one$: Observable<Product[]> = this.productService.get(22);
  
  /* list: Product[] = [
    {
      id: 1,
      name: "Vasaló",
      price: 9900,
      description: "Jó vasaló",
      itemCode: "it-54333"
    },
    {
      id: 2,
      name: "Fűnyíró",
      price: 25000,
      description: "Jó",
      itemCode: "sdfsdfsd"
    },
    {
      id: 3,
      name: "Lombszívó",
      price: 45000,
      description: "",
      itemCode: "20121222"
    },
    {
      id: 4,
      name: "Mikrohullámú sütő",
      price: 29000,
      description: "Moulinex",
      itemCode: "sdfsfsfsdf"
    },
    {
      id: 5,
      name: "Proszívó",
      price: 78000,
      description: "Bosch",
      itemCode: "it-444222"
    },
  ]; */

  constructor(
    private logger: LoggerService,
    private productService: ProductService,
  ) {
    /* setInterval(() => {
      this.count++;
      this.date = new Date();
      this.logger.critical("Isn't critical");
    }, 1000); */
  }

  /**
   * Give a title.
   * @param show {boolean} if true get the title, otherwise get a string.
   */
  getTitle(show: boolean): string {
    return show ? `${this.title} - ${this.count}` : '';
  }
}
