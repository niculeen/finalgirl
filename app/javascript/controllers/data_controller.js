import {Controller} from "stimulus"

export default class extends Controller {
  static targets = ["health", "name", "form"]

  submit(event) {
    console.log(event);
    event.preventDefault();
  }

  syncHealth() {
    this.healthTargets.forEach(element => element.value = event.currentTarget.value);
  }

  syncName() {
    this.nameTargets.forEach(element => element.value = event.currentTarget.value);
  }

}