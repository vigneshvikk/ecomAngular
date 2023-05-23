import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

pdata:any
pid:any
constructor(private ar:ActivatedRoute,private ps:ProductService){}


ngOnInit(): void {
  this.ar.params.subscribe((data:any)=>{
   this.pid= data["id"]
 })
 this.ps.viewProduct(this.pid).subscribe((item)=>{
  this.pdata=item
  
 })
}
}
