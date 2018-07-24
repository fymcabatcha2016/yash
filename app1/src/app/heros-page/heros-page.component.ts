import { Component, OnInit } from '@angular/core';
import {student} from '../classes/student';

import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-heros-page',
  templateUrl: './heros-page.component.html',
  styleUrls: ['./heros-page.component.css']
})
export class HerosPageComponent implements OnInit {
  public player="Yash";
  public heros=["kritika","yash","abdul"]
  public studentVar:student;
  dispText="nan";
  constructor(public form:FormsModule) { 
    this.studentVar={
      name:"yash",
      rollNo:15
    };
    setTimeout(()=>{
      this.dispText="five sec passes";
    },5000);
  }

  ngOnInit() {
  }

}
