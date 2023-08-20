import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase4-sum-rest',
  templateUrl: './clase4-sum-rest.page.html',
  styleUrls: ['./clase4-sum-rest.page.scss'],
})
export class Clase4SumRestPage implements OnInit {
  n=0

  constructor() { }

  ngOnInit() {
  }
  sumar(){
    this.n++

  }
  restar(){
    this.n--
  }
  negativo(){
    

  }
}
