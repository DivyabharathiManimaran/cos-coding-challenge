import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-cards',
  templateUrl: './loading-cards.component.html',
  styleUrls: ['./loading-cards.component.scss'],
})
export class LoadingCardsComponent implements OnInit {
  fakeAuctions = ['', '', '', '', '', '', '', '', '', '', '', ''];

  constructor() { }

  ngOnInit() {}

}
