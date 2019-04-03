export interface Card {
    _id: string,
    cardNumber: string,
    validate: Date,
    cardModel: number,
    password: string,
    balance: number,
    active: boolean,
    securityCode: string
}
