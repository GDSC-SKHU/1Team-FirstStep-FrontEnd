interface IGetPost {
  data: IGetPostContent[]
}


interface IGetPostContent {
  id: number;
  title: string;
  content: string;
  author: string;
  // categories_id: number;
}
