/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {};
personalMovieDB.count = numberOfFilms;
personalMovieDB.movies = {};
personalMovieDB.actors = {};
personalMovieDB.genres = [];
personalMovieDB.privat = false;

// for(let i = 0; i < 2; i++ ) {
//     let lastMovie = prompt('Один из последних просмотренных фильмов?'),
//         rating = prompt('На сколько оцените его?');
//     if(
//         lastMovie !== null &&
//         rating !== null &&
//         lastMovie.length > 0 &&
//         lastMovie.length < 51 && 
//         rating.length > 0 && 
//         rating.length < 51
//     ) {
//         personalMovieDB.movies[lastMovie] = rating;
//     } else {
//         i--;
//     }
// }
// let i = 0;
// while(i < 2) {
//     let lastMovie = prompt('Один из последних просмотренных фильмов?'),
//         rating = prompt('На сколько оцените его?');
//     if(
//         lastMovie !== null &&
//         rating !== null &&
//         lastMovie.length > 0 &&
//         lastMovie.length < 51 && 
//         rating.length > 0 && 
//         rating.length < 51
//     ) {
//         personalMovieDB.movies[lastMovie] = rating;
//         i++;
//         console.log(i);
//     }
// }
let i = 0;
do {
    let lastMovie = prompt('Один из последних просмотренных фильмов?'),
        rating = prompt('На сколько оцените его?');
    if(
        lastMovie !== null &&
        rating !== null &&
        lastMovie.length > 0 &&
        lastMovie.length < 51 && 
        rating.length > 0 && 
        rating.length < 51
    ) {
        personalMovieDB.movies[lastMovie] = rating;
        i++;
    }
}
while(i < 2);
console.log(personalMovieDB);

if (numberOfFilms < 10) {
   alert("Просмотрено довольно мало фильмов");
} else if( numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("Вы классический зритель");
} else if(numberOfFilms > 30){
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
