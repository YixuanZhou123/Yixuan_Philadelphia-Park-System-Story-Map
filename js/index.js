import { SlideDeck } from './slidedeck.js';

const map = L.map('map', {scrollWheelZoom: false}).setView([0, 0], 0);

// ## The Base Tile Layer
L.tileLayer('https://api.mapbox.com/styles/v1/zinkm/cl0r7a69x000214pjtro7pxaf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiemlua20iLCJhIjoiY2wwcjc2bXVkMDBwNDNjazN5em1zdXM1dCJ9.KAWOxtNGJa8GL1lw0KODTw', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
}).addTo(map);

// ## Interface Elements
const slides = document.querySelectorAll('.slide');

// ## The SlideDeck object
const deck = new SlideDeck(slides, map);

document.addEventListener('scroll', () => deck.calcCurrentSlideIndex());

deck.preloadFeatureCollections();
deck.syncMapToCurrentSlide();
