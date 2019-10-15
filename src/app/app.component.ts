import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerService]
})
export class AppComponent {
  // Title of the application.
  title: string = 'ifsz-erp application';
  count: number = 0;
  date: Date = new Date();
  dateFormatter: string = 'yyyy-MM-dd hh:mm:ss';

  phrase: string = "";
  
  columns: {key: string, title: string}[] = [
    {key: "id", title: "#"},
    {key: "price", title: "Price"},
    // {key: "itemCode", title: "Code"},
    {key: "description", title: "Desc."},
    {key: "name", title: "Name"},
  ];
  filterKey: string = this.columns[0].key;
  
  list: Product[] = [
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
  ];

  constructor(
    private logger: LoggerService
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
