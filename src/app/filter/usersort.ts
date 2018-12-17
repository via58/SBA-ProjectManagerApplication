import { PipeTransform, Pipe } from "@angular/core";
import { User } from '../models/user';

@Pipe({
    name: 'usersort'
})
export class Usersort implements PipeTransform {
    transform(userContainer: User[], sortFirstName: boolean
        ,sortLastName:boolean,sortAssociateId:boolean
    ) {
        if (sortFirstName) {
           return userContainer.sort(
                (a, b) => {
                  return (a.firstName).localeCompare(b.firstName)
                }
              )
        }
        if (sortLastName) {
            return userContainer.sort(
                (a, b) => {
                  return (a.lastName).localeCompare(b.lastName)
                }
              )  
        }
        if (sortAssociateId) {
            return userContainer.sort(
                (a, b) => {
                  return (Number(a.employee_ID))-(Number(b.employee_ID))
                }
              )
        }
        
        else {
            return userContainer;
        }
    }
}

