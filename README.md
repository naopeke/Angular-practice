# Angular-practice
```
npm i -g @angular/cli@16.2.10
```
```
npm uninstall -g @angular/cli
```
```
npm cache clean --force
```
```
ng new my-app(nombre de aplicacion)</p>
```

**MODULOS CON CLI**
```
ng generate module nombre-del-modulo
ng g m nombre-del modulo
```

**MODULOS**
```
import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MiComponente } from './mi-componente.component'

@NgModule({<br>
    declarations: [MiComponente],
    imports: [CommonModule],
    exports: [MiComponente]
})

export class MiModulo {}
```

**COMPONENTS CON CLI**
```
ng generate component nombre-del componente
ng g c nombre-del componente
```

**4 archivos**
__.component.ts<br>
__.component.html<br>
__.component.css<br>
__.component.spec.ts<br>

```
npm start<br>
```
**Actively supported versions**
https://angular.io/guide/versions
Node.js
```
nvm install 18.10.0 // to install the version of node.js I wanted
nvm use 18.10.0  // use the installed version
```
Angular (Downgrade @angular-devkit/build-angular)
```
npm list @angular-devkit/build-angular
npm install @angular-devkit/build-angular@16.2.10 --save-dev
```

http://localhost:4200/<br>

**親のコンポーネント作成（myApp-src-app内トップ）**
```
ng g c padre
```
```
app.module.ts
@NgModule({
    declarations: [
        AppComponent,
        PadreComponent
        // added automatically
    ]
})
```

**INPUT**
```
//Componente hijo
@Input() datoEntrada: string;

//Componente padre
<app-hijo [datoEntrada]="valorDesdePadre"></app-hijo>

//Componente padre
valorDesdePadre = "Hola, mundo!"

//Componente hijo template
{{ datoEntrada }}
```

**OUTPUT**
```
//Componente hijo
@Output() messageEvent = new EventEmitter<string>();
message: string = '';

sendMessage(){
    this.messageEvent.emit(this.message)
}

//Componente hijo
<div>
<label for="childInput">Mensaje:</label>
<input id="childInput"> [(ngModel)]="message" />
<button (click)="sendMessage()">Enviar Mensaje</button>

//Componente padre
receivedMessage: string = '';

receiveMessage(message: string){
    this.receivedMessage = message;
}

//Componente padre
<div><br>
<app-child (messageEvent)="receiveMessage($event)"></app-child>
<p>Mensaje recibido en el padre {{ receivedMessage}}</p>
```

**Servicio con Cli**
```
ng generate service nombre-del-servicio
ng g s nombre-del-servicio
```
```
@import { Injectable } from '@anglar/core';

@Injectable({
    providedIn: 'root'
})

export class MiServicioService {
    constructor() {}

      //Métodos y lógica del servicio
}
```
**Inyeccion de dependencias**
```
import { Component } from '@anglar/core';
import { MiServicio } from './mi-servicio.service';

@Component({
    selector: 'app-mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente {
    constructor(privete miServicio: MiServicio){
        //una variable, miServicio e inyecta esta forma de MiServicio
        //...
        //a partir de Angular17, "inject". servicio inject MiServicio<br>
    }
}
```

**Directiva**
```
ng generate directive nombre-de-la-directiva
ng g d nombre-de-la-directiva
```
```
//html
<div appMiDirectiva>
 Este es un elemento con mi directiva personalizada.
 </div>

//nombre-de-la-directiva.directive.ts
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {
    constructor(private el: ElementRef){
        //Accede al elemento del DO en el que se aplica la directiva (this.el.nativeElement)
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```

**PIPES**
```
ng generate pipe nombre-del-pipe
ng g p nombre-del-pipe
```
```
//nombre-del-pipe.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'miPipe'
})
export class MiPipe implements PipeTransform {
    transform(valor: any): any{
        //Implementa la lógica de transformación aquí
        return valor.toUpperCase();
    }
}
```
```
<p>{{texto | miPipe }}</p>
https://angular.io/guide/pipes
```

**Rutas(Routes)**
```
<p>const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
]</p>
```

**Router Outlet**
```
<router-outlet></router-outlet>
```

**Navegación**
```
<a routerLink="/inicio">Inicio</a>
```

**Parámetros de Ruta**
```
{ path: 'producto/:id', component: DetalleProductoComponent }
<a [routerLink]="['/producto', producto.id]">Ver Detalles</a>
```

**routerLinkActive**
```
<nav>
<a routerLink="/inicio" routerLinkActive="active">Inicio</a>
<a routerLink="/productos" routerLinkActive="active">Productos</a>
<a routerLink="/contacto" routerLinkActive="active">Contacto</a>
</nav>
```

**Parámetros por la URL**
(1)Definir una ruta con varios parámetros:
```
const routes: Routes = [
    { path: 'producto/:categoria/:id', component: DetalleProductoComponent },
];
```

(2)Enlazar a la ruta con múltiples parámetros:
```
<a [routerLink]="['/producto', producto.categoria, producto.id]">Ver Detalles</a>
```
()
3)Recuperar los parámetros en el componente:
```
import { ActivatedRoute } from '@angular/router';

//...

constructor(private route: ActivatedRoute) {}

ngOnInit(){
    this.route.params.subscribe(params => {
        const categoria = params['categoria'];
        const productId = params['id'];
        // Hacer algo con los valores de los parámetros
    })
}
```

**Navegar desde el controller**
```
import { Router } from '@angular/router';

//...

constructor(private router: Router) {}

//...

navegarAProducto(productoId: number){
    //Puedes navegar a una ruta especifica programáticamente
    this.router.navigate(['/producto, productoId]);

}
```

**Bootstrap**
```
npm i bootstrap@5.3.2
```

ルーティングモジュール(app-routing.module.ts)を手動で追加:
```
ng generate module app-routing --flat --module=app
```
あるいは
新しいプロジェクトを--routingフラグをつけて作成
```
ng new my-app --routing
```

node_module - dist - css - bootstrap.min.css - (click) copy relative path 
=> (paste)angular.json 
```
//27, 92
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```
node_module - dist - js - bootstrap.bundle.min.js - (click) copy relative path
```
//30, 95
    "scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
```
