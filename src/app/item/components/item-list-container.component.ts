import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectItems, selectStarredItemIds } from '../../reducers/selectors/item.selectors';
import { ItemModel } from '../';
import * as fromStarredItem from '../../actions/starred-item.actions';

@Component({
  selector: 'app-item-list',
  template: `
    <app-item-list-view
      [items]="items$ | async"
      [starredItemIds]="starredItemIds$ | async"
      (starItem)="starItem($event)"
      (unstarItem)="unstarItem($event)"></app-item-list-view>
  `
})

export class ItemListContainerComponent implements OnInit {
  items$: Observable<ItemModel[]>;
  starredItemIds$: Observable<string[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.items$ = this.store.pipe(select(selectItems));
    this.starredItemIds$ = this.store.pipe(select(selectStarredItemIds));
  }

  starItem(item: ItemModel) {
    this.store.dispatch(new fromStarredItem.AddStarredItem(item.id));
  }

  unstarItem(item: ItemModel) {
    this.store.dispatch(new fromStarredItem.DeleteStarredItem(item.id));
  }
}
