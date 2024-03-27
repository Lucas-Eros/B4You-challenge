interface Card {
    number: string;
    cvv: string;
    expire_date: string;
    placeholder: string;
}


export interface TransactionDetail {
    id?: number;
    amount: number;
    document_number: string;
    full_name: string;
    email: string;
    card: Card;
    status: string;
}

export interface QueryParams {
    document_number?: string;
    email?: string;
    page?: number;
    size?: number;
    id_status?: number;
}

export interface Query {
    text: string;
    values: any[];
}