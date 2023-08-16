import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {
  nombre='barbie'
  apellido='perez'
  usuario={
  nombre:'',
  password:''
  }

  constructor() { }

  ngOnInit() {
  }
  enviar(){
    console.log('form submit')
    console.log(this.usuario)
  }

}
