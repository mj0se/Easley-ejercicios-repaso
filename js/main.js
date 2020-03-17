'use strict';

// const news = [{
//     title: 'Asteroids 101',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Life on Mars',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Martians invade Earth',
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: "Humans aren't real",
//     image: 'https://via.placeholder.com/200x100'
//   },
//   {
//     title: 'Space The Final Frontier',
//     image: 'https://via.placeholder.com/200x100'
//   }
// ];



// function paintFilms() {
//   let htmlCode;
//   for (let item of news) {
//     htmlCode += `<li> ${item.title}</li>`
//     for (const title of item.title) {


//     }


//   }


//   ulElement.innerHTML = htmlCode;
// }


// paintFilms()


//  exercise2

const ulElement = document.querySelector('.js-news');
const liElement = document.querySelector('.js-list');
let htmlCode = '';


fetch(' http://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/news.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (films) {

    for (const film of films.news) {
      htmlCode += `<li>`
      htmlCode += `<h2>${film.title}</h2>`
      htmlCode += `<img src="${film.image}">`
      htmlCode += `</li>`
      ulElement.innerHTML = htmlCode;
    }


  });



// const images = document.createElement('img');
// images.setAttribute('src', film.image);
// ulElement.appendChild(images);
// console.log(film.image);
