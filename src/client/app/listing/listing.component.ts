import { Component } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'listing.component.html',
  styleUrls: ['listing.component.css'],
})
export class ListingComponent {

  newName = 'tburdeinei';
  errorMessage: string;
  followers: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  search(): boolean {
    this.nameListService.get(this.newName)
      .subscribe(
        login => this.followers = login,
        error => this.errorMessage = <any>error
      );
    return false;
  }

}
