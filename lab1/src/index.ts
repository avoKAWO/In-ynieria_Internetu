import {Employee} from "./types";
import {employees} from "./data";
import {addExperience} from "./functions"
import {getDevelopers} from "./functions"
import {findEmployees} from "./functions";
import {addExperiences} from "./functions";

// Zad 1
console.log("employees", employees);
const developers: Employee[] = getDevelopers(employees);
console.log("developers", developers);
const Robert = findEmployees(employees, "Robert");
if (Robert) addExperience(Robert, "java");
addExperiences(developers, "C");
const x: number = 3;