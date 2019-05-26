// import { default as data} from './../data/data.json';

export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  async getClips(value = '') {
    const url = `${this.state.url}&q=${value}`;
    const res = await fetch(url);
    const data = await res.json();

    return data.items;
  }
}
