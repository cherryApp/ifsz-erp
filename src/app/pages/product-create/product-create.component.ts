import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productGroup: FormGroup;
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.productGroup = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('The name of new product'),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
      manufacturer: new FormControl(this.product.manufacturer),
      itemCode: new FormControl(this.product.itemCode),
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.productGroup.value);
    this.productService
      .create(this.productGroup.value)
      .toPromise()
      .then(
        response => {
          console.log('newProduct', response);
          this.router.navigateByUrl("/products");
        },
        err => {
          console.error(err);
          alert("An network error occured.");
        }
      )
  }

  onReset() {
    this.productGroup.reset();
  }

}
