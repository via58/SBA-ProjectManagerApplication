import { PipeTransform, Pipe } from "@angular/core";
import { User } from '../models/user';
import { Project } from '../models/project';
import { toDate } from '@angular/common/src/i18n/format_date';

@Pipe({
    name: 'projectsort'
})
export class Projectsort implements PipeTransform {
    transform(
        projectContainer: Project[], sortStartDate: boolean,
        sortEndDate: boolean, sortPriority: boolean, sortCompleted: boolean
    ) {
        if (sortStartDate) {
            return projectContainer.sort(
                (a, b) => {
                    return a.start_Date > b.start_Date ? -1 : a.start_Date < b.start_Date ? 1 : 0;
                })
        }
        if (sortEndDate) {
            return projectContainer.sort(
                (a, b) => {
                    return a.end_Date > b.end_Date ? -1 : a.end_Date < b.end_Date ? 1 : 0;
                })
        }
        if (sortPriority) {
            return projectContainer.sort(
                (a, b) => {
                    return (Number(a.priority)) - (Number(b.priority))
                })
        }
        if (sortCompleted) {
            return projectContainer.sort(
                (a, b) => {
                    return ((a.status)).localeCompare((b.status))
                }
            )
        }
        else {
            return projectContainer;
        }
    }
}

