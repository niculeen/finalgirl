// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

/* StimulusJS */
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import html2canvas from 'html2canvas'
const application = Application.start()
const context = require.context("controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

import "../stylesheets/application.scss"

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

window.addEventListener('DOMContentLoaded', function () {
  window.onbeforeprint = function(event){
    
  };
});

// function changed(){
//   html2canvas(document.querySelectorAll('.card.front')[0],{scrollY: -window.scrollY}).then(function (canvas) {
//     console.log(canvas); 
//     document.getElementById('frontCardCanvas').replaceWith(canvas);
//   });
//   html2canvas(document.querySelectorAll('.card.back')[0],{scrollY: -window.scrollY}).then(function (canvas) {
//     console.log(canvas); 
//     document.getElementById('backCardCanvas').replaceWith(canvas);
//   });
// }