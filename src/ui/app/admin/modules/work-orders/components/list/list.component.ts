import {Component, Input, OnInit} from '@angular/core';
import {ShortWorkOrder} from '@domain/workOrders/entities/ShortWorkOrder';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() workOrders: ShortWorkOrder[];

  constructor() { }

  ngOnInit(): void {
  }

}
