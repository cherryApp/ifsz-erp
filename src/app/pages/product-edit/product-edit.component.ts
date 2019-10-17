import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute,
    private router: Router
  ) {
    this.ar.params.forEach(
      params => {
        this.productService.get(params.id).forEach(
          products => {
            this.product = products[0];
          }
        );
      }
    );

    /* this.ar.params.pipe(
      switchMap( params => this.productService.get(params.id) )
    ).forEach(
      products => this.product = products[0]
    ); */

  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.productService.update(this.product).toPromise().then(
      response => {
        console.log(response);
        this.router.navigateByUrl("/products");
      }, 
      err => {
        console.error(err);
        alert("Hiba a kommunikációban.");
      }
    )
  }

}
