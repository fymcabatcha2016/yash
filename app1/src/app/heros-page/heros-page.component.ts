import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros-page',
  templateUrl: './heros-page.component.html',
  styleUrls: ['./heros-page.component.css']
})
export class HerosPageComponent implements OnInit {
  public player="Yash";
  public heros=["kritika","yash","abdul"]
  constructor() { }

  ngOnInit() {
  }

}
