import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
                         { path: '', component: ViewAllProductComponent },
                         {path:'add-product',component:AddProductComponent},
                         {path:'edit-product/:id',component:EditProductComponent},
                         {path:'delete-product/:id',component:DeleteProductComponent},
                         {path:'view-product/:id',component:ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
