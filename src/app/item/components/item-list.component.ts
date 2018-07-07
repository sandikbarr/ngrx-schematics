import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from '../';

@Component({
  selector: 'app-item-list-view',
  template: `
    <div *ngFor="let item of items">
      <input type="checkbox" [id]="item.id" [checked]="isStarred(item)" (click)="toggleStar(item)">
      <label [for]="item.id">{{item.name}}</label>
      <ul>
        <li *ngFor="let tag of item.tags">
          {{tag.name}}
        </li>
      </ul>
    </div>
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
