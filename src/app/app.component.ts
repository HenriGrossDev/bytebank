import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bitebank1';


constructor(private service: TransferenciaService){}

  transferir($event: any){
    this.service.adicionar($event)
  }
}
