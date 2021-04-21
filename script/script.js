function Client(count, movies, actors, genres,privat, name) {
  this.count = count
  this.movies = movies
  this.actors = actors
  this.genres = genres
  this.privat = privat
  this.name =  name
}

let me = new Client(+prompt("Сколько фильмов вы уже посмотрели?"),{},{},[],false, prompt("Ваше имя"))

Client.prototype.sayName = function () {
  return `My name is ${this.name}`
};
for (let i = 1; i <= 2; i++) {
  let last = prompt("Последний ваш фильм")
  let mark = prompt("Ваша оценка")
  if (last === "" || mark === "" || last.length>50 || last === null || mark === null) {
    i--
  }
  else {
    me.movies[last] = mark
  }
}
if (me.count<10){
  alert("Too low")
}
else if (me.count > 10 && me.count <30) {
  alert("normal")
}
else if (me.count > 30) {
  alert("too much")
}
else {
  alert("smt strange")
}
// let last = prompt("Последний ваш фильм")
// let mark = prompt("Ваша оценка")
// let llast = prompt("Последний ваш фильм")
// let mmark = prompt("Ваша оценка")
//
// me.movies[last] = mark
// me.movies[llast] = mmark

// function Admin(count, movies, actors, genres,privat, name, status) {
//     Client.call(this. count, movies, actors, genres,privat, name)
//     this.status = status
//
// }
// Admin.prototype = Object.create(Client.prototype)
// Admin.prototype.constructor = Admin
// let he = new Admin(+prompt("Сколько фильмов вы уже посмотрели?"),{},{},[],false, prompt("Ваше имя"),'admin')

// class Person {
//   constructor(count, movies, actors, genres,privat, name) {
//     this.count = count
//     this.movies = movies
//     this.actors = actors
//     this.genres = genres
//     this.privat = privat
//     this.name =  name
//   }
//   sayName(){
//     return `My name is ${this.name}`
//   }
// }
//
// class Teacher extends Person {
//   constructor(count, movies, actors, genres,privat, name,status) {
//       super(count, movies, actors, genres,privat, name)
//       this.status = status
//   }
// }
//
// let me = new Person(+prompt("Сколько фильмов вы уже посмотрели?"),{},{},[],false, prompt("Ваше имя"))
// let he = new Teacher(+prompt("Сколько фильмов вы уже посмотрели?"),{},{},[],false, prompt("Ваше имя"),"Teacher")
