class CustomerClass{
    private _firstName:string;
    private _lasttName:string;

    constructor(firstName: string, lasttName: string) {
        this._firstName = firstName;
        this._lasttName = lasttName;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lasttName(): string {
        return this._lasttName;
    }

    set lasttName(value: string) {
        this._lasttName = value;
    }
}

let orCustomer = new CustomerClass("Mike","Stoba");

console.log(orCustomer.firstName);
console.log(orCustomer.lasttName);