class Address{
    public addressLine1: string;
    public addressLine2: string;
    public street: string;
    public landmark: string;
    public zip:string;
}

export class HoperDomain {
    public name: string;
    public phone: string;
    public gender: string;
    public email: string;
    public idProff: string;
    public job: string
    public address: Address = new Address();
}
