import { Injectable } from '@angular/core';
import { listItem } from '../models/list-item.model'

@Injectable()
export class DragAndDropListService {
  listItems: listItem[] = [
    {
      id: 1,
      title: 'item1'
    },
    {
      id: 2,
      title: 'item2'
    },
    {
      id: 3,
      title: 'item3'
    },
    {
      id: 4,
      title: 'item4'
    },
    {
      id: 5,
      title: 'item5'
    },
  ];

  constructor() {
    let items = localStorage.getItem("listItems");
    if(items){
      this.listItems = JSON.parse(items);
    }
  }
  getItems() {
    return this.listItems;
  }
  setItems(items) {
    localStorage.setItem("listItems", JSON.stringify(items));
    this.listItems = items;
  }
  saveItem(id: number, newTitle: string) {

    let items = this.listItems.filter((item)=>{
      return item.id == id;
    });
    items[0].title = newTitle;
    localStorage.setItem("listItems", JSON.stringify(this.listItems));

  }
}
