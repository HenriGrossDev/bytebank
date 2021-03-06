import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  listaTransferencia: any[] = [];

constructor() {
  this.listaTransferencia = [];
}

get transferencias(){
  return this.listaTransferencia
}

adicionar(transferencia: any){
  this.hidratar(transferencia);
  this.listaTransferencia.push(transferencia);
}

private hidratar(tranferencia: any){
  tranferencia.data = new Date();
}

}
