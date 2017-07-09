import { Injectable } from '@angular/core';

@Injectable()
export class DragAndDropListService {
  listItems = [
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
    console.log(items);
    localStorage.setItem("listItems", JSON.stringify(items));
    this.listItems = items;
  }
  updateItem(id: number, newTitle: string) {
    this.listItems.forEach((item, i, arr)=>{
      if(item.id == id) item.title = newTitle;
    });
    localStorage.setItem("listItems", JSON.stringify(this.listItems));

  }
}
