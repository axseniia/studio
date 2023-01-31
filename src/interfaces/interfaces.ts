//TODO groups must be an array of numbers
export interface IStudent {
  id: string,
  name: string;
  surname: string;
  email: string;
  avatarUrl: string;
  phone: string;
  groups: number;
  hasActiveAbonement: boolean;
}

export type StudentList = IStudent[];

export interface IGroupCheckbox {
  name: string;
  active: boolean;
  type: number;
}

export interface IStudentsFilters {
  groupFilter: IGroupCheckbox[];
  searchFilter: string;
  activeAbonementFilter: boolean;
};