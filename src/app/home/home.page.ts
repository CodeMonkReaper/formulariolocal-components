import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre='Pancho pistola'
  edad=28
items = [
  {id:1, marca: 'toyota', colores: 'primary' },
  { id:2,marca: 'lada', colores: 'secondary' },
  {id:3,marca:'nissan', colores:'medium'},
  {id:4,marca:'audi', colores:'danger'}
]
home: string|undefined;

trackItems(index: number, itemObject: any) {
  return itemObject.id;
}
  


  constructor(private router:Router) {}
  gotopag1(){
    this.router.navigate(['pag1'])
  }
  gotopag2(){
    this.router.navigate(['clase4-sum-rest'])
  }
  gotologin(){
    this.router.navigate(['logincl4'])
  }
  gotoreg(){
    this.router.navigate(['regcl4'])
  }
}
