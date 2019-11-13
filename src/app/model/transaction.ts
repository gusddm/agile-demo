import { User } from './user';

export class Transaction {
    id: number;
    user: User;
    ammount: number;
    type: string;
    date: Date;
}