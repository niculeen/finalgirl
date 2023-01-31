import {Controller} from "stimulus"
import { enter, leave } from 'el-transition';

export default class extends Controller {
  static targets = ["container", "background", "panel"]

  toggle() {
    if (this.containerTarget.classList.contains('hidden')) {
      enter(this.containerTarget)
      enter(this.backgroundTarget)
      enter(this.panelTarget)
    } else {
      leave(this.containerTarget)
      leave(this.backgroundTarget)
      leave(this.panelTarget)
    }
  }
}