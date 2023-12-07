import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  //(2) mensaje padre a hijo
  // Este es el mensaje que recibe desde el padre
  // @Input() recibeHijo: string = '';
  // @Input() recibeHijo?: string;

  //(3) mandar y recibir
  @Output() mensajeDesdeHijo = new EventEmitter<string>();
  @Output() incrementarDesdeHijo = new EventEmitter<void>();
  @Output() decrementarDesdeHijo = new EventEmitter<void>();
  
  mensaje: string= '';

  enviarMensaje(){
    this.mensajeDesdeHijo.emit(this.mensaje);
    //this.mensaje は mensaje:string=''　を指す
  }
  incrementar(){
    this.incrementarDesdeHijo.emit();
  }

  decrementar(){
    this.incrementarDesdeHijo.emit();
  }
}