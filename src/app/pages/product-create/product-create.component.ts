import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    this.productGroup = new FormGroup({}, { updateOn: 'blur' });
    for (let k in this.product) {
      let nc: FormControl = new FormControl(this.product[k]);
      nc["name"] = k;
      nc["self"] = this;
      nc.setAsyncValidators([this.validator]);
      this.productGroup.addControl(k, nc);
    }    
  }  

  validator(control): Observable<any> | null {
    if (control["name"] === "name" && control["self"].productGroup.dirty) {
      return control["self"].productService.validate(
        control['name'], 
        control["self"].productGroup.value
      ).pipe(
        tap( data => {
          console.log(data);
          control["self"].productGroup.controls.price.setValue(data["value"].price);
        })
      );
    }
    return of(null);
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

const getControlName = (control: FormControl) => {
  let parent = control["_parent"];
  console.log(parent, control);
  for (let k in Object.keys(parent.controls)) {
    if (parent.controls[k] === control) {
      return k;
    }
  }
}
