import { Message } from '@angular/compiler/src/i18n/i18n_ast';

export interface Transaction {

     id: string,
     name: string,
     amount: number,
     numberInstallments: number,
     dateTransaction: Date
     number: string,
     securityCode: string,
     type: boolean,
     message: string

}
