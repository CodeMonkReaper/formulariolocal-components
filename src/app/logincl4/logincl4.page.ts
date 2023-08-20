import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logincl4',
  templateUrl: './logincl4.page.html',
  styleUrls: ['./logincl4.page.scss'],
})
export class Logincl4Page implements OnInit {
  formulariologin:FormGroup;
  constructor(public fb: FormBuilder,
    public alertController:AlertController) { 
    this.formulariologin=this.fb.group({
      'nombre':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }
   async enviar(){
    var f= this.formulariologin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario')!) || [] ;
    if (usuario.nombre == f.nombre && usuario.password==f.password) {
      console.log('ingresado');
    }else{
      const alert = await this.alertController.create({
        header: 'datos incorrectos',
        message: 'los datos no coinciden',
        buttons:['aceptar']
      })
      await alert.present()
    }
  }



}
