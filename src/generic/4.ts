/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponentProperties {
  title: string;
}

interface IPageProperties extends IComponentProperties {
  pageInfo?: object;
}

class Component<T extends IComponentProperties> {
  constructor(public props: T) {}
}

class Page extends Component<IPageProperties> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
