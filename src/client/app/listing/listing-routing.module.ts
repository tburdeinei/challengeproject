import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingComponent } from './listing.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ListingComponent }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
