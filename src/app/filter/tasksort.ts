import { PipeTransform, Pipe } from "@angular/core";
import { User } from '../models/user';
import { Task } from '../models/task';

@Pipe({
    name: 'tasksort'
})
export class Tasksort implements PipeTransform {
    transform(taskContainer: Task[], sortStartDate: boolean
        , sortEndDate: boolean, sortPriority: boolean, sortCompleted: boolean
    ) {
        if (sortStartDate) {
            return taskContainer.sort(
                (a, b) => {
               return a.start_date>b.start_date ? -1 : a.start_date<b.start_date ? 1 : 0;
            }
            )
        }
        if (sortEndDate) {
            return taskContainer.sort(
                (a, b) => {
                    return a.end_date>b.end_date ? -1 : a.end_date<b.end_date ? 1 : 0;
                }
              )  
        }
        if (sortPriority) {
            return taskContainer.sort(
                (a, b) => {
                    return (Number(a.priority)) - (Number(b.priority))
                }
            )
        }
        if (sortCompleted) {
            return taskContainer.sort(
                (a, b) => {
                    return ((a.status)).localeCompare((b.status))
                }
            )
        }
        else {
            return taskContainer;
        }
    }
}


