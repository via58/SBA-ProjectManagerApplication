import { PipeTransform, Pipe } from "@angular/core";
import { User } from '../models/user';

@Pipe({
    name: 'userfilter'
})
export class Userfilter implements PipeTransform {
    transform(userContainer: User[], searchUserName: string
    ) {
        if (userContainer && userContainer.length) {
            return userContainer.filter(users => {
                if (searchUserName && users.firstName.toLowerCase().indexOf(searchUserName.toLowerCase()) === -1) {
                    return false;
                }
                if (searchUserName && users.lastName.toLowerCase().indexOf(searchUserName.toLowerCase()) === 1) {
                    return false;
                }
                return true;
            })
        }
        else {
            return userContainer;
        }
    }
}

