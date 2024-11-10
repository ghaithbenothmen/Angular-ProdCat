export class User {
    name!: string;
    email!: string;
    password!: string;
    adresse!: Address;
    skills!: string[];
  }

  export class Address {
    city!: string;
    postalCode!: string;
    town!: string;
  }