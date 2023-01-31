import {Controller} from "stimulus"
import { enter, leave } from 'el-transition';

export default class extends Controller {
  static targets = ["menu", "placeholder", "reduceHorror"]

  toback() {
    var frontImage = $('#initial_image_front')[0];
    var backImage = $('#initial_image_back')[0];
    var frontPosition = $(frontImage).position();
    
    backImage.src = frontImage.src;
    $(backImage).css({top: frontPosition.top + 'px', left: frontPosition.left + 'px'});

  }

}