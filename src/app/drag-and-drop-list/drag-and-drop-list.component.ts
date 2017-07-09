import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DragAndDropListService } from '../drag-and-drop-list-service/drag-and-drop-list.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-drag-and-drop-list',
  templateUrl: './drag-and-drop-list.component.html',
  styleUrls: ['./drag-and-drop-list.component.css']
})
export class DragAndDropListComponent implements OnInit {
  listItems: { id: number, title: string }[];

  constructor(private router: Router, private dragAndDropListService: DragAndDropListService, private dragulaService: DragulaService, public snackBar: MdSnackBar) {
    this.listItems = this.dragAndDropListService.getItems();
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
  }

  ngOnInit() {
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  onDrop(args) {
    let [e, el] = args;
    this.dragAndDropListService.setItems(this.listItems);
  }
  navigateToEditPage(listItem: { id: number, title: string }){
    this.router.navigate(['/edit-list-item/', listItem.id, listItem.title]);
  }

  openSnackBar() {
    let message = "Click an item in order to edit it's content.";
    let action = ""
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
