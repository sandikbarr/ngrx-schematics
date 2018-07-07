import { Tag } from '../models/tag.model';

export interface ItemModel {
  id: string;
  name: string;
  created: Date;
  tags: Tag[];
}
