export class CustomerClass{

    constructor(private _firstName: string, private _lastName: string) {

    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lasttName(): string {
        return this._lastName;
    }

    set lasttName(value: string) {
        this._lastName = value;
    }
}

