function Client(count, movies, actors, genres,privat) {
  this.count = count
  this.movies = movies
  this.actors = actors
  this.genres = genres
  this.privat = privat
}


let me = new Client(+prompt("Сколько фильмов вы уже посмотрели?"),{},{},[],false)
let last = prompt("Последний ваш фильм")
let mark = prompt("Ваша оценка")
let llast = prompt("Последний ваш фильм")
let mmark = prompt("Ваша оценка")
me.movies[last] = mark
me.movies[llast] = mmark 
console.log(me);

// let he = new Client(+prompt("Сколько фильмов вы уже посмотрели?"),{},{},[],true)
// console.log(he);
