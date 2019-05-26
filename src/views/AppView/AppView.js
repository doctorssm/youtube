export default class AppView {
  constructor(clips) {
    this.clips = clips;
  }

  render() {
    this.renderInput();
    this.renderList(this.clips);
  }

  renderInput() {
    var input = document.createElement("INPUT");
    input.setAttribute("type", "text");

    document.body.appendChild(input);
  }

  renderList(data) {
    const list = document.querySelector('ul');

    if (list) {
      list.remove()
    }

    document.body.appendChild(this.createClipsList(data));
  }

  createClipsList(clips) {
    const list = document.createElement('ul');
    list.innerHTML = clips.map(this.createCard).join('');

    return list;
  }

  createCard({id, snippet}) {
    const { thumbnails, title, description} = snippet;

    return (
      `<li class="card">
        <img class="card-img" src="${thumbnails.medium.url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="https://www.youtube.com/watch?v=${id.videoId}" target="_blank" class="btn btn-primary">Go to video</a>
        </div>
      </li>`
    );
  }
}

