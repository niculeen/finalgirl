import {Controller} from "stimulus"
import { enter, leave } from 'el-transition';

export default class extends Controller {
  static targets = ["menu", "placeholder", "freeText", "saveFreeText"]

  select() {
    if (this.menuTarget.classList.contains('hidden')) {
      enter(this.menuTarget)
    } else {
      leave(this.menuTarget)
    }

    var rewards = $(this.element).find('.reward');
    $(rewards).each(function(i,e){
      $(e).addClass('hidden');
    })

    var selection = event.currentTarget.dataset.rewardValue;
    $(this.targets.find(selection)).toggleClass('hidden');
  }

  ultimate() {
    if (this.menuTarget.classList.contains('hidden')) {
      enter(this.menuTarget)
    } else {
      leave(this.menuTarget)
    }

    var rewards = $(this.element).find('.reward');
    $(rewards).each(function (i, e) {
      $(e).addClass('hidden');
    })

    var selection = event.currentTarget.dataset.rewardValue;
    $(this.targets.find(selection)).toggleClass('hidden');
  }

  syncFreeText() {
    $(this.targets.find('saveFreeText')).removeClass('hidden');
    this.freeTextTarget.innerHTML = event.currentTarget.innerHTML;
  }

}