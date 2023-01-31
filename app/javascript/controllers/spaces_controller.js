import {Controller} from "stimulus"

export default class extends Controller {

  change() {
    var selection = event.currentTarget.innerText;
 
    if (selection === "1") {
      $('#reward_2').addClass('hidden');
      $('#reward_3').addClass('hidden');
      $('#reward_4').addClass('hidden');
      $('#reward_5').addClass('hidden');
      $('#reward_6').addClass('hidden');
    }

    if (selection === "2") {
      $('#reward_2').removeClass('hidden');
      $('#reward_3').addClass('hidden');
      $('#reward_4').addClass('hidden');
      $('#reward_5').addClass('hidden');
      $('#reward_6').addClass('hidden');
    }

    if (selection === "3") {
      $('#reward_2').removeClass('hidden');
      $('#reward_3').removeClass('hidden');
      $('#reward_4').addClass('hidden');
      $('#reward_5').addClass('hidden');
      $('#reward_6').addClass('hidden');
    }
    if ( selection === "4" ) {
      $('#reward_2').removeClass('hidden');
      $('#reward_3').removeClass('hidden');
      $('#reward_4').removeClass('hidden');
      $('#reward_5').addClass('hidden');
      $('#reward_6').addClass('hidden');
    }

    if ( selection === "5" ) {
      $('#reward_2').removeClass('hidden');
      $('#reward_3').removeClass('hidden');
      $('#reward_4').removeClass('hidden');
      $('#reward_5').removeClass('hidden');
      $('#reward_6').addClass('hidden');
    }

    if ( selection === "6" ) {
      $('#reward_2').removeClass('hidden');
      $('#reward_3').removeClass('hidden');
      $('#reward_4').removeClass('hidden');
      $('#reward_5').removeClass('hidden');
      $('#reward_6').removeClass('hidden');
    }

    $('.space_option').each(function(i,e){
      $(e).removeClass('text-red');
    });

    $(event.currentTarget).addClass('text-red');

  }

}