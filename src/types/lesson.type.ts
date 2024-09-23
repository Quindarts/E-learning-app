interface Lesson {
  _id: string;
  name: string;
  duration: string; // duration in seconds
  content: Array<string>; // text, url
}
export { Lesson };
