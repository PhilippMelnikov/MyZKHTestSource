import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { DragulaListService } from '../dragula-list-service/dragula-list.service';
import {MdSnackBar} from '@angular/material';
import { listItem } from '../models/list-item.model'
@Component({
  selector: 'app-dragula-list',
  templateUrl: './dragula-list.component.html',
  styleUrls: ['./dragula-list.component.css']
})
export class DragulaListComponent implements OnInit {
  listItems: listItem[];

  constructor(private router: Router,
    private dragulaListService: DragulaListService,
    private dragulaService: DragulaService,
    public snackBar: MdSnackBar) {

    this.listItems = this.dragulaListService.getItems();

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
    this.dragulaListService.setItems(this.listItems);
  }

  openSnackBar() {
    let message = "Click on item in order to edit it's content.";
    let action = ""
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
