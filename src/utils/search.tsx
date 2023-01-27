import { IGroupCheckbox, StudentList, IStudent, IStudentsFilters } from '../interfaces/interfaces';

export function filterStudents (filters: IStudentsFilters, students: StudentList) {
    const activeGroups = filters.groupFilter.reduce((acc: number[], group:IGroupCheckbox) => {
        if (group.active) {
            acc.push(group.type);
        }
        return acc;
    },[]);
    return students.filter((student: IStudent) => {
        const hasSelectedGroups = activeGroups.every((group: number) => student.groups === group);
        const hasActiveAbonement = !filters.activeAbonementFilter || student.hasActiveAbonement === filters.activeAbonementFilter;
        return hasSelectedGroups && hasActiveAbonement;
    })
};