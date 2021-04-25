/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Алф",
        "Бва"
    ]
};

let add = document.querySelector('.promo__adv')
add.querySelectorAll('img').forEach((item) => {
  item.remove()
});
add.querySelectorAll('div').forEach((item) => {
  item.remove()
});


let text = document.querySelector('.promo__genre').innerHTML="Драма"
let bg = document.querySelector('.promo__bg').classList.add("newbg")



let ul = document.querySelector('.promo__interactive-list')
ul.innerHTML=""

let mo = movieDB.movies

mo.sort().forEach((item,i) => {
  return  ul.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${++i} ${item}
                                                <div class="delete"></div>
                                              </li>`)
});
