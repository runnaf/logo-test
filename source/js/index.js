// import {getMap} from './modules/map';
import { openMenu } from './modules/openMenu.js';
import { addJsFunctional } from './modules/addJs.js';
import { addAdaptiveMenu } from './modules/adaptiveMenu.js';
import { displayDate } from './modules/getObjectGoods.js';
import { initAddress, init, initEmail } from './modules/dadata.js';
import { scrollsUp } from "./modules/scrollUp.js"
import { initMap } from "./modules/yandex-map.js"
// import {storingFormData} from './modules/form-data';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  displayDate();
  // Inichion fields of form

  initAddress();

  init($("#surname"), $("#name"));

  initEmail();

  // With JS

  addJsFunctional();

  // if Mobile 

  addAdaptiveMenu();

  //Scroll up

  scrollsUp();

  // Map

  initMap()

  // getMap();

  // Menu

  openMenu();

  // Scroll

  // scrolling();

  // Form Data

  // storingFormData();

  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

  });
});
