import { 
    IGroupCheckbox, 
    StudentList, 
    IStudent, 
    IStudentsFilters
} from '../interfaces/interfaces';

export function filterStudents (filters: IStudentsFilters, tierStudents: any) {
    const students = trieSearch(filters.searchFilter, tierStudents);
    const activeGroups = filters.groupFilter.reduce((acc: number[], group: IGroupCheckbox) => {
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

function trieSearch (word: string, trie: any) {
    const letters = word.toLowerCase().replace(/ /g,'').split('');
    let currentNode = trie;

    for (let i = 0; i < letters.length; i++) {
        const currentLetter = letters[i];
        if (!currentNode[currentLetter]) {
            return [];
        }
        currentNode = currentNode[currentLetter];
    }
    return currentNode.children;
}

export function createTrieForStudentsList(students: StudentList) {
    const trie = { children: students };
    const fillNode = (tierNode: any, letters: string[], node: IStudent) => {
        if(letters.length === 0) {
            return;
        }
        
        const currentLetter = letters[0];

        if (!tierNode[currentLetter]) {
            tierNode[currentLetter] = { children: [], childrenIds: [] };  
        }

        if(!tierNode[currentLetter].childrenIds.includes(node.id)) {
            tierNode[currentLetter].children.push(node);
            tierNode[currentLetter].childrenIds.push(node.id);
        }

        fillNode(tierNode[currentLetter], letters.slice(1), node);
    }

    for(let i = 0; i < students.length; i++) {
        const student = students[i];
        const name = student.name.toLowerCase().split('');
        const surname = student.surname.toLowerCase().split('');
        fillNode(trie, [...name, ...surname], student);
        fillNode(trie, [...surname, ...name,], student);
    }

    return trie;
}
