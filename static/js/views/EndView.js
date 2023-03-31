import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(probs) {
    super(probs);
    this.setTitle("End");
  }

  async getHtml() {
    return `
    <div class="manualContainerEnd">
        <div class="CloseButtonContainer">
          <a href="/" class="closeButton" data-link><img src="/static/images/Exit.png"
          height = "24px" width = "24px" ></a>
        </div>
        <img class="headerEnd imageEnd" src="/static/images/Schatzinsel_Überschrift.png" width = "500px">
        <img class="imageEnd" src="/static/images/Schatz_geborgen.png" width = "500px">
        <img src="/static/images/Herzlichen_Glückwunsch.png" width = "500px">
        <a href="/" class="button" data-link>Zurück zum Hauptmenü!</a>
    </div>
    `;
  }
}
