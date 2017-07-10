import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DragAndDropListService } from '../drag-and-drop-list-service/drag-and-drop-list.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-dragula-list',
  templateUrl: './dragula-list.component.html',
  styleUrls: ['./dragula-list.component.css']
})
export class DragulaListComponent implements OnInit {
  listItems: { id: number, title: string }[];

  constructor(private router: Router,
    private dragAndDropListService: DragAndDropListService,
    private dragulaService: DragulaService,
    public snackBar: MdSnackBar) {

      this.listItems = this.dragAndDropListService.getItems();

      dragulaService.drag.subscribe((value) => {
        this.onDrag(value.slice(1));
      });
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

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  onDrop(args) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
    this.dragAndDropListService.setItems(this.listItems);
  }



  openSnackBar() {
    let message = "Click on item in order to edit it's content.";
    let action = ""
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
