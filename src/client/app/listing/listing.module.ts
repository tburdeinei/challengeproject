import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { HomeRoutingModule } from './listing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [ListingComponent],
  exports: [ListingComponent],
  providers: [NameListService]
})
export class ListingModule { }
