export interface IStudent {
  name: string;
  surname: string;
  email: string;
  avatarUrl: string;
  phone: string;
  Groups: 'Contemp' | 'FrameUP' | 'HipHop' | 'HighHeels' | 'Stretching' | 'DanceHall';
}

export type StudentList = IStudent[];

export type IGroupCheckbox = {
  name: string;
  active: boolean;
}
