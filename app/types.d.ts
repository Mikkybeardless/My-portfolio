 export type Item = {
    id: number;
    name: string;
    desc: string;
    imgSrc: string;
    stack: string;
    link: string;
  };
export type ListItem ={
  name: string;
  desc: string;
}
export type Services = {
    title: string;
    list: ListItem[]
  }