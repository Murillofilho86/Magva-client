import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertType, Alert } from 'src/app/shared/models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private message: string;

  alertSubject: Subject<Alert> = new Subject<Alert>();

  success(message: string) {
    this.alert(AlertType.SUCCESS, this.getMessage(message));
  }

  warning(message: string) {
    this.alert(AlertType.WARNING, this.getMessage(message));
  }

  danger(message: string) {
    this.alert(AlertType.DANGER, this.getMessage(message));
  }

  info(message: string) {
    this.alert(AlertType.INFO, this.getMessage(message));
  }


  private alert(alertType: AlertType, message: string) {
    this.alertSubject.next(new Alert(alertType, message))
  }


  getAlert() {
    return this.alertSubject.asObservable();
  }


  private getMessage(msg: string): string {
    switch (msg) {
      case 'INSUFFICIENT_BALANCE': this.message = 'Saldo insuficiente.';
        break;
      case 'CARD_BLOCKED': this.message = 'Cartão bloqueado.';
        break;
      case 'UPDATE_SUCCESS': this.message = 'Registro atualizado com sucesso.';
        break;
      case 'CREATE_SUCCESS': this.message = 'Registro atualizado com sucesso.';
        break;
      case 'PASSWORD_IS_NOT_VALID': this.message = 'Erro no tamanho da senha informada';
        break;
      case 'VALUE_IS_NOT_VALID': this.message = 'Valor informado não é valido';
        break;
      case 'DOCUMENT_IS_NOT_VALID': this.message = 'Documento inválido';
        break;
      case 'DOCUMENT_NOT_EXISTS': this.message = 'Cliente não cadastrado';
        break;
      case 'EMAIL_IS_NOT_VALID': this.message = 'E-mail inválido';
        break;
      case 'CARD_NOT_EXISTS': this.message = 'Cartão não localizado';
        break;
      case 'REQUEST_SUCCESS': '';
        break;
    }
    return this.message;
  }
}
