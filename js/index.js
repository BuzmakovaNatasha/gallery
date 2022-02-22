import '../css/style.scss'

import { drawGallery } from './drawGallery';

import { items } from './items'

const gallery = document.querySelector('.gallery');

items.map(item => gallery.appendChild(drawGallery(item)));