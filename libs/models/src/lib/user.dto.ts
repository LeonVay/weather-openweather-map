export class UserDto {
    login?: string;
    fName?: string;
    lName?: string;
    lang?: string;
    tz?: string;
    offset?: number;
    updatePass?: boolean;

    constructor(init?: Partial<UserDto>) {
        Object.assign(this, init);
    }
}
