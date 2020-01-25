import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum-space',
  templateUrl: './sum-space.component.html',
  styleUrls: ['./sum-space.component.less']
})
export class SumSpaceComponent implements OnInit {

  text: string;
  sum = 0;

  constructor() { }

  ngOnInit() {
  }

  sumSpace() {
    this.sum = 0;
    let elements = this.text.split(' ');

    for(let x of elements) {
      this.sum += parseInt(x);
    }
  }

}
