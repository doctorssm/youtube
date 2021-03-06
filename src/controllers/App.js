import AppModel from '../models/AppModel';
import AppView from '../views/AppView';
import { debounce } from 'lodash';

export default class App {
  constructor() {
    this.state = {
      url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=3',
    };
  }

  async start() {
    this.model = new AppModel(this.state);
    const data = await this.model.getClips();
    this.view = new AppView(data);

    this.view.render();
    this.addHandlers();
  }

  addHandlers() {
    document.querySelector('input')
      .addEventListener('input', debounce(this.inputHandler.bind(this), 500));
  }

  inputHandler(e) {
    this.model.getClips(e.target.value).then((clips) => {
      this.view.renderList(clips);
    })
  }
}
