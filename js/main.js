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
let films = [];

function getDataApi() {
  fetch('http://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/news.json')
    .then(response => response.json())
    .then(data => {

      films = data.news;
      paintNews();


    });

}

const paintNews = () => {
  let htmlCode = '';

  for (const film of films) {
    htmlCode += `<li class="news__item">`
    htmlCode += `<h2 class="news__title" >${film.title}</h2>`
    htmlCode += `<img class="news__image" src="${film.image}">`
    htmlCode += `</li>`

  }
  ulElement.innerHTML = htmlCode;

}



for (let item of films) {
  console.log(item);
  if (item.includes('Mars' || item.includes('Martians'))) {
    liElement.classlist.add('news__item--from-mars');

  }

  paintNews();
}


getDataApi();
