class Teacher {
    private _firstName: string;
    private _lastName: string;
    public fullTimeEmployee: boolean;
    public yearsOfExperience?: number; // Optional
    public location: string;

    [key: string]: any; // Index signature

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience) {
            this.yearsOfExperience = yearsOfExperience;
        }
    }

    get firstName(): string {
        return this._firstName;
    }
    get lastName(): string {
        return this._lastName;
    }
}


