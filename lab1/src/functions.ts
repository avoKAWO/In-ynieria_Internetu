import {Employee} from "./types";

export const getDevelopers = (employees: Employee[]) => {
    return employees.filter(e => e.position === "Developer");
}

export const findEmployees = (employees: Employee[], name: string) => {
    return employees.find(e => e.firstName.includes(name) || e.lastName.includes(name));
}

export function addExperience(employee: Employee, language: string) {
    employee.programmingLanguages.push(language);
}

export function addExperiences(employees: Employee[], language: string) {
    return employees.map(e => e.programmingLanguages.push(language));
}