export enum TransactionStatus {
    DUE = 'DUE',
    OVERDUE = 'OVERDUE',
    RECEIVED = 'RECEIVED',
};

export interface Transaction {
    description: string,
    billingAmount: number,
    date: Date,
    logo: string,
    logoText: string,
    invoiceNumber: number,
    status: Transaction,
}

export interface TransactionCategory {
    name: string,
    items: Array<Transaction>
};

export interface TransactionFilter {
    header: string,
    count: number,
    options: Array<FilterOption>
}

export interface FilterOption {
    optionIcon: string,
    optionText: string
}