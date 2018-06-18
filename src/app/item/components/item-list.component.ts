import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from '../';

@Component({
  selector: 'app-item-list-view',
  template: `
    <ul>
      <li *ngFor="let item of items" [class.starred]="isStarred(item)" (click)="toggleStar(item)">{{item.name}}</li>
    </ul>
  `,
  styleUrls: ['item-list.component.css']
})

export class ItemListComponent {
  @Input() items: ItemModel[];
  @Input() starredItemIds: string[];
  @Output() starItem = new EventEmitter<ItemModel>();
  @Output() unstarItem = new EventEmitter<ItemModel>();

  isStarred(item: ItemModel) {
    return this.starredItemIds && this.starredItemIds.indexOf(item.id) > -1;
  }

  toggleStar(item: ItemModel) {
    if (this.isStarred(item)) {
      this.unstarItem.emit(item);
    } else {
      this.starItem.emit(item);
    }
  }
}
