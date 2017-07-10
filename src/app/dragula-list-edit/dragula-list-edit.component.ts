import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DragulaListService } from '../dragula-list-service/dragula-list.service';

@Component({
  selector: 'app-dragula-list-edit',
  templateUrl: './dragula-list-edit.component.html',
  styleUrls: ['./dragula-list-edit.component.css']
})

export class DragulaListEditComponent implements OnInit {
  itemTitle: string = "item";
  itemId: number;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private dragulaListService: DragulaListService) {
  }

  ngOnInit() {
    // Recieving parameters of item via route.params observable
    this.route.params.subscribe((params: Params) => {
      this.itemId = +params['id'];
      this.itemTitle = this.dragulaListService.getItems().filter((el) => {
        return el.id == this.itemId;
      })[0].title;


    });
  }

  saveItem() {
    this.dragulaListService.saveItem(this.itemId, this.itemTitle);
  }
}
