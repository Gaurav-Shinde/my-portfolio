import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    projects: Project[] = [
        { id: 0, name: "Todoapp Lifecycle Automation", pictures: ["assets/c1.png", "assets/c2.png", "assets/c3.png"], projectLink: "//www.github.com", summary: "Jenkins pipeline that automates build, test, scan, deploy of todoapp on a server", description: "Add later", tags: [Tag.JENKINS] },
        { id: 1, name: "Tech Store Ecommerce", pictures: ["assets/tech-store_ecomm/c1.PNG", "assets/tech-store_ecomm/c2.PNG", "assets/tech-store_ecomm/c3.PNG"], projectLink: "https://github.com/Gaurav-Shinde/E-Commerce_App", summary: "Fullstack web app developed using Angular, Springboot, and MySQL", description: "Add later", tags: [Tag.ANGULAR, Tag.SPRINGBOOT, Tag.MYSQL] },
        { id: 2, name: "Fraudulent Job Classification", pictures: ["assets/fraud-jobs_class/c1.PNG", "assets/fraud-jobs_class/c2.PNG", "assets/fraud-jobs_class/c3.PNG"], projectLink: "https://github.com/Gaurav-Shinde/FakeJobsPrediction/", summary: "ML models performance comparison on Fraudulent Jobs dataset.", description: "Add later", tags: [Tag.PYTHON] },
        // { id: 3, name: "Web API Project", pictures: ["assets/c1.png", "assets/c2.png", "assets/c3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANSIBLE, Tag.TYPESCRIPT] },
        // { id: 4, name: "Chrome Extension", pictures: ["assets/c1.png", "assets/c2.png", "assets/c3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT] },
        // { id: 5, name: "Mobile App", pictures: ["assets/c1.png", "assets/c2.png", "assets/c3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVA] }
    ];

    constructor() { }

    getProjects() {
        return this.projects;
    }

    getProjectById(id: number): Project {
        let project = this.projects.find(project => project.id === id);
        if (project === undefined) throw new TypeError('There is no project matching this id: ' + id);
        return project;
    }

    getProjectByFilter(filterTags: Tag[]) {
        let filteredProjects: Project[] = []
        let foundAllTags = true;

        this.projects.forEach((project) => {
            filterTags.forEach((tag) => {
                if (project.tags.includes(tag) == false) foundAllTags = false
            })

            if (foundAllTags) filteredProjects.push(project);
            foundAllTags = true; //reset
        })

        return filteredProjects;
    }

}
