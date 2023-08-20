import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-regcl4',
  templateUrl: './regcl4.page.html',
  styleUrls: ['./regcl4.page.scss'],
})
export class Regcl4Page implements OnInit {
  formularioregistro:FormGroup;

  constructor(public fb: FormBuilder,
    public alertController:AlertController) {
    this.formularioregistro=this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmpassword':new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }
   async guardar(){
    var f = this.formularioregistro.value;
    if (this.formularioregistro.invalid) {
      const alert = await this.alertController.create({
        header: 'campos incompletos',
        message: 'debes llenar todos los campos',
        buttons: ['aceptar']

      })
      await alert.present()
      return  ;
    }
    var usuario ={
      nombre: f.nombre,
      password: f.password
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}
