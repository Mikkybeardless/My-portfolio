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
    backgroundImage: string;
    list: ListItem[]
  }

  export type Skill ={
    src: string;
    desc: string
  }