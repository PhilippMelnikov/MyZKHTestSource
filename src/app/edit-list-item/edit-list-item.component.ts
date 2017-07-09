import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DragAndDropListService } from '../drag-and-drop-list-service/drag-and-drop-list.service';

@Component({
  selector: 'app-edit-list-item',
  templateUrl: './edit-list-item.component.html',
  styleUrls: ['./edit-list-item.component.css']
})
export class EditListItemComponent implements OnInit {
  itemTitle: string = "item";
    itemId: number;
  constructor(private route: ActivatedRoute, private router: Router,  private dragAndDropListService: DragAndDropListService) { }

  ngOnInit() {
    // Recieving parameters of item via route.params observable
    this.route.params.subscribe((params: Params) => {
        this.itemTitle = params['title'];
        this.itemId = +params['id'];
      });
  }
  updateItem(){
    this.dragAndDropListService.updateItem(this.itemId, this.itemTitle);
  }

}
