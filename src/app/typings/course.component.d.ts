export interface ICourse {
  id: number;
  title: string;
  description: string;
  duration: number;
  date: string;
}

export interface ICourseComponent {  
  course: ICourse;
}