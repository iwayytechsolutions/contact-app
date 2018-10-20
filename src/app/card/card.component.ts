import { Card } from '../model/card.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output("onCardSelected")
  onCardSelected = new EventEmitter<Event>(); 

  @Input("card")
  card : Card;

  onSelect(card) {
     this.onCardSelected.emit(card);
  }

  constructor() { }

  ngOnInit() {
  }

}
