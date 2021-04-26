/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */
'use strict';
window.addEventListener("DOMContentLoaded" ,() =>{
  const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Апачи"
        ]
    };

    const add = document.querySelectorAll('.promo__adv img')
    const ul = document.querySelector('.promo__interactive-list')
    const bd = movieDB.movies.sort()
    const input = document.querySelector('.adding__input')
    const btn =document.querySelector('button')
    const error = document.querySelector('.filmName')
    let check = document.querySelector('.check')





    let changeAbit = () =>{
      let changeTitle = document.querySelector('.promo__genre').innerHTML ="Драма"
      let changeBg = document.querySelector('.promo__bg').classList.add("newbg")
    }

    let deleteAdd = (nodeArr) =>{
      nodeArr.forEach((item) => {
        item.remove()
      });

    }

    let addFav =(checkbox,input) =>{
      if (checkbox.checked && input.value !==""){
        alert(`Добавляем ${input.value} в избранные`)
        console.log(`Добавляем ${input.value} в избранные`);
        checkbox.checked=false
      }
    }

    const sortArr = (arr) => {
     arr.sort();
 };

    let filmInOrder = (ul, bd) =>{
      sortArr(bd)
      ul.innerHTML=""
      bd.forEach((item, i) => {
        ul.innerHTML +=`<li class="promo__interactive-item"> ${i+1})${item}
          <div class="delete"></div>
        </li>`

        document.querySelectorAll('.promo__interactive-item .delete').forEach((item,i) => {
        item.addEventListener("click",(e)=>{
          e.target.parentNode.remove()
          bd.splice(i,1)
          filmInOrder(ul, bd)
        })

      });
      });

    }



    btn.addEventListener("click", (e)=>{
      e.preventDefault()
      if(input.value.length>21){
        input.value = `${input.value.slice(1,21)}....`
        movieDB.movies.push(input.value)
        filmInOrder(ul, bd)
        addFav(check,input)
        error.style.color="black"
      }
      else if (input.value === "") {
        error.style.color="red"
      }
      else{
        movieDB.movies.push(input.value)
        filmInOrder(ul, bd)
        addFav(check,input)
        error.style.color="black"

      }
      input.value=""
    })








    changeAbit()
    deleteAdd(add)
    filmInOrder(ul, bd)



    });
