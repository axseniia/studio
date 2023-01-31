const serverUrl = 'http://localhost:3000';

export const endPoints = {
    studentsListURL: `${serverUrl}/studentsList`,
    studentURL: (id: string) => `${serverUrl}/student/${id}`,
}