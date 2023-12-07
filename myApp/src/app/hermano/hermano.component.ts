import { Component, OnInit, inject } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrls: ['./hermano.component.css']
})

//(4) service e inyeccion
export class HermanoComponent implements OnInit {

 nombre?: string;

 constructor(
  private _servicioFamiliar : ServicioFamiliarService
 ){}

//Angular 17, inject(    )
//!  private _servicioFamiliar = inject(ServicioFamiliarService);


 ngOnInit():void{
  this._servicioFamiliar.setHermanoPequeno('Pedro');
  this.nombre = this._servicioFamiliar.getHermanoPequeno();
 }

 saludar(){
  this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
 }
 //this._servicioFamiliarは、クラス内のプロパティまたはサービスのインスタンスを指します。
// _servicioFamiliarはFamily Serviceと呼ばれる何らかのサービスのインスタンスです。

// getHermanoGrande()は、Family Service内で定義されているメソッドで、"兄"を取得するためのものです。
 
// this._servicioFamiliar.getHermanoGrande() || ''は、getHermanoGrande()がnullまたは
// undefinedを返す場合に空の文字列にデフォルト値を設定する JavaScript のテクニックです。

// 最終的に、this._servicioFamiliar.saludar()が呼び出され、引数として"兄"の名前または
// 空の文字列が渡されます。
// 要するに、これはFamily Service内で定義されたgetHermanoGrandeメソッドから取得した"兄"
// の名前（もしくは名前がない場合は空の文字列）を使って、saludarメソッドを呼び出しています。

 preguntar(){
  console.log(this._servicioFamiliar.preguntarPorHijo());
 }
}

