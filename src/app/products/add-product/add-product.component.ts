import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
constructor(private fb:FormBuilder,private ps:ProductService,private router:Router){

}

addProductForm=this.fb.group({
  id: [''],
  product: [''],
  categoryId: [''],
  description:[''],
  price: [''],
  is_available:[''],
  productImg: [''],
  rating: [''],
  review: [''],
  vendor_name:[''],
  warrenty: ['']

})

addproduct(){
  let pdata={
  id:this.addProductForm.value.id,
  product:this.addProductForm.value.product,
  categoryId: this.addProductForm.value.categoryId,
  description:this.addProductForm.value.description,
  price:this.addProductForm.value.price ,
  is_available:this.addProductForm.value.is_available,
  productImg:this.addProductForm.value.productImg ,
  rating:this.addProductForm.value.rating ,
  review:this.addProductForm.value.review,
  vendor_name:this.addProductForm.value.vendor_name,
  warrenty:this.addProductForm.value.warrenty
  }

  

this.ps.addNewProduct(pdata).subscribe((item:any)=>{
  
  
  alert('new product added')
this.router.navigateByUrl("products")
})
}
}
