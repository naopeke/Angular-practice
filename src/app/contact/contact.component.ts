// import { Component } from '@angular/core';
// import { FormBuilder } from '@angular/forms';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css']
// })
// export class ContactComponent {
//   public usuario: any = {
//     name:'',
//     email:''
//   }

//   enviar(){
//     console.log(this.usuario);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  formularioContacto: FormGroup
  // usarioActivo: string = 'Pedro'

  // usarioActivo:any = {
  //   nombre: 'Pedro',
  //   apellido: 'Perez',
  //   dni: '12345678',
  // }

  // constructor (private form: FormBuilder){
  //   this.formularioContacto = this.form.group({
  //     nombre: ['', [Validators.required, Validators.minLength(3)]],
  //     apellido: ['', [Validators.required, Validators.minLength(3)]],
  //     dni: ['', [Validators.required, Validators.minLength(3)]],
  //     email: ['', [Validators.required, Validators.email]]
  //   })
  // }

  // ngOnInit(): void {
  //   this.formularioContacto.get('nombre')?.setValue(this.usarioActivo)
  //   this.formularioContacto.get('nombre')?.disable()
  // }

  // ngOnInit(): void {
  //   this.formularioContacto.patchValue({
  //     nombre: this.usarioActivo.nombre,
  //     apellido: this.usarioActivo.apellido,
  //     dni: this.usarioActivo.dni,
  //   })
  //   this.formularioContacto.get('nombre')?.disable()
  //   this.formularioContacto.get('apellido')?.disable()
  //   this.formularioContacto.get('dni')?.disable()
  // }

  //----------

  // usarioActivo:any = {
  //   nombre: 'Pedro',
  //   apellido: 'Perez',
  //   dni: '12345678',
  // }

  // constructor (private form: FormBuilder){
  //   this.formularioContacto = this.form.group({
  //     nombre: ['', [Validators.required, Validators.minLength(3)]],
  //     apellido: [''],
  //     dni: [''],
  //     email: ['', [Validators.required, Validators.email]]
  //   })
  // }

  //   ngOnInit(): void {
  //     this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)])
  //       this.formularioContacto.patchValue({
  //         nombre: this.usarioActivo.nombre,
  //         apellido: this.usarioActivo.apellido,
  //         dni: this.usarioActivo.dni,
  //   })
  //   this.formularioContacto.get('nombre')?.disable()
  //   this.formularioContacto.get('apellido')?.disable()
  //   this.formularioContacto.get('dni')?.disable()
  // }
  //--------------

  // usarioActivo:any = {
  //   nombre: 'Pedro',
  //   apellido: 'Perez',
  //   dni: '12345678',
  // }
  //   constructor (private form: FormBuilder){
  //   this.formularioContacto = this.form.group({
  //     nombre: ['', [Validators.required, Validators.minLength(3)]],
  //     apellido: ['', [Validators.required, Validators.minLength(3)]],
  //     dni: [''],
  //     email: ['', [Validators.required, Validators.email]]
  //   })
  // }

  //     ngOnInit(): void {
  //     this.formularioContacto.get('apellido')?.clearValidators()
  //     this.formularioContacto.get('apellido')?.updateValueAndValidity()
  //       this.formularioContacto.patchValue({
  //         nombre: this.usarioActivo.nombre,
  //         dni: this.usarioActivo.dni,
  //   })
  //   this.formularioContacto.get('nombre')?.disable()
  //   this.formularioContacto.get('dni')?.disable()
  // }

    //--------------
    //cada cosa que escribe, aparece.

  //  constructor (private form: FormBuilder){
  //   this.formularioContacto = this.form.group({
  //     nombre: ['', [Validators.required, Validators.minLength(3)]],
  //     apellido: ['', [Validators.required, Validators.minLength(3)]],
  //     tipoDni: [''],
  //     dni: [''],
  //     email: ['', [Validators.required, Validators.email]]
  //   })
  // }

  // ngOnInit(): void {
  //   this.formularioContacto.valueChanges.subscribe(valor =>{
  //     console.log(valor);
  //   })
  // }

      //--------------
      tipoDni: string = 'DNI'

     constructor (private form: FormBuilder){
    this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      dni: [''],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value =>{
      this.tipoDni = value
    })
  }

 //--------------
  hasErrors( controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar(){
  console.log(this.formularioContacto)
 }
}
