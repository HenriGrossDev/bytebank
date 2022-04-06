import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitebank1';
  destino!:number;
  valor!:number;
  transferencia:any;

  transferir($event: any){
    console.log($event);
    this.transferencia = $event;
  }
}
