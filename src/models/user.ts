
import { User } from "dajts";

export default class ModelUser extends User {
  name: string;
  lastName: string;
  birthday: string;
  dniNumber: string;
  user: string;
  password: string;
  direction: string;
  email: string;
  ocupation: string;
  income: string;
  empoyerName: string;
  workAddress: string;
  workPhoneNumber: string;
  workTenure: number;
  SourceOfFunds: string;
  IncomeAmount: string;
  
  constructor() {
    super();
  }
}