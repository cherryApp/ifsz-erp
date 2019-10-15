import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

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

  columns: {key: string, title: string}[] = [
    {key: "id", title: "#"},
    {key: "price", title: "Price"},
    // {key: "itemCode", title: "Code"},
    {key: "description", title: "Desc."},
    {key: "name", title: "Name"},
  ];

  list: any[] = [
    {
      id: 1,
      name: "Vasaló",
      price: 9900,
      description: "Jó vasaló",
      itemCode: "sdjflsdjf42342lfj"
    },
    {
      id: 2,
      name: "Vasaló",
      price: 9900,
      description: "Jó vasaló",
      itemCode: "sdjflsdjf42342lfj"
    },
    {
      id: 3,
      name: "Vasaló",
      price: 9900,
      description: "Jó vasaló",
      itemCode: "sdjflsdjf42342lfj"
    },
    {
      id: 4,
      name: "Vasaló",
      price: 9900,
      description: "Jó vasaló",
      itemCode: "sdjflsdjf42342lfj"
    },
    {
      id: 5,
      name: "Vasaló",
      price: 9900,
      description: "Jó vasaló",
      itemCode: "sdjflsdjf42342lfj"
    },
  ];

  constructor(
    private logger: LoggerService
  ) {
    setInterval(() => {
      this.count++;
      this.date = new Date();
      this.logger.critical("Isn't critical");
    }, 1000);
  }

  /**
   * Give a title.
   * @param show {boolean} if true get the title, otherwise get a string.
   */
  getTitle(show: boolean): string {
    return show ? `${this.title} - ${this.count}` : '';
  }
}
