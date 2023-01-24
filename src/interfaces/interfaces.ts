export interface IStudent {
  name: string;
  surname: string;
  email: string;
  telegram: string;
  phone: string;
  status: 'active' | 'inactive';
}

export type StudentList = IStudent[];

export type IGroupCheckbox = {
  name: string;
  active: boolean;
}
