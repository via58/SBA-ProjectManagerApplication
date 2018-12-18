import { PipeTransform, Pipe } from "@angular/core";
import { User } from '../models/user';
import { Project } from '../models/project';

@Pipe({
    name: 'projectfilter'
})
export class Projectfilter implements PipeTransform {
    transform(projectContainer: Project[], searchProjectName: string
    ) {
        if (projectContainer && projectContainer.length) {
            return projectContainer.filter(projects => {
                if (searchProjectName && projects.project.toLowerCase().indexOf(searchProjectName.toLowerCase()) === -1) {
                    return false;
                }
                if (searchProjectName && projects.project.toLowerCase().indexOf(searchProjectName.toLowerCase()) === 1) {
                    return false;
                }
                return true;
            }
            );
        }
        else {
            return projectContainer;
        }
    }
}
