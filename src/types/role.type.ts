interface Role {
  _id: string;
  name: string;
  value: string;
  currentCourse: Array<{ _id: string; progress: number; time: string }>;
}

export { Role };
