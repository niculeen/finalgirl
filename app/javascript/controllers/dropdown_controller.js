import {Controller} from "stimulus"
import { enter, leave } from 'el-transition';

export default class extends Controller {
  static targets = ["menu"]

  toggle() {
    if (this.menuTarget.classList.contains('hidden')) {
      enter(this.menuTarget)
    } else {
      leave(this.menuTarget)
    }
  }

}