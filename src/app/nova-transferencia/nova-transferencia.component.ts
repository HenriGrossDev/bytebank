import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']

})

export class NovaTransferenciaComponent{

    @Output() aoTransferir = new EventEmitter<any>();

    valor: number = 10;
    destino: number = 222;


    transferir(): void{
      console.log('Solicitada nova transferência');
      const valorEmitir = { valor: this.valor, destino: this.destino}
      this.aoTransferir.emit(valorEmitir);

    }
}
