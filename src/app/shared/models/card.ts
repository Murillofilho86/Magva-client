export interface Card {
    _id: string,
    number: string,
    expirationDate: Date,
    cardModel: number,
    password: string,
    balance: number,
    active: boolean,
    securityCode: string
    type: boolean,
    cardholderName: string,
    cardBrand: string
}
