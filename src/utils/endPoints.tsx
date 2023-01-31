const serverUrl = 'http://localhost:3000';

export const endPoints = {
    getStudentsListURL: `${serverUrl}/studentsList`,
    getStudentURL: (id: string) => `${serverUrl}/student/${id}`,
}