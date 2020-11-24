interface Listener {
  subscribe: (...args: any[]) => void;
}
interface Publisher{
  notify:()=>void;
  add:(item:Listener)=>void;
}
class BasicPublisher implements Publisher {

  private listenerList: Listener[];
  constructor() {
    this.listenerList = new Array<Listener>();
  }
  notify(...args:any[]) {
    for (let item of this.listenerList) {
      item.subscribe(...args);
    }
  }
  add(item: Listener) {
    if (item == null) {
      this.listenerList.push(item);
    }
  }
}

let a = new BasicPublisher();

a.add(null);
a.notify();

interface StringArray {
  [index: number]: string;
}

let arr: StringArray;