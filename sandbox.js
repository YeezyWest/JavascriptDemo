//DECLARING VARIABLES ====================

// const title = 'Head Master';
// const author = 'West';
// const likes = '70';

// let result = `The award for   ${title} on the book name ${author} with over ${likes}`;
// console.log(result)

// const num = 39;
// const num2 = 38;

// let result = `the final award for ${title} on the book name ${author} with over $`

//METHODS iclude =========
// let name = "Yusuf";
// let list = [ 'A' , 'B' , 'C' , 'D'];

// let result = list.includes('B'); 
// console.log(result);

// const names = ["Ali" , "yusuf" , "Ade" , "ola"];

// if ( names.length === 4 && names.includes("YU") ) {
//     console.log("Yellloooo!!!!!!!!!")
// }  else if ( names.includes("ola") ) {
//     console.log("NAHHHHHHHHHH!!!!!!")
// }

//SWITCH cases =====================

// const grade = 'F';

// switch(grade) {
//     case 'A': 
//     console.log("You got A!!");
//     break;
//     case 'B': 
//     console.log("You got B!!");
//     break;
//     case 'C': 
//     console.log("You got C!!");
//     break;
//     case 'D': 
//     console.log("You got D!!");
//     break;
//     case 'E': 
//     console.log("You got E!!");
//     break;
//     case 'F': 
//     console.log("You got F!!");
//     break;
//     default:
//         console.log("Invalid grade")
// }

// DECLARING A FUNCTIONS ==========================

// function greet() {
//     console.log("Yellllo!!");
// }
// greet()

// const talk = function(name , message) {
//     console.log(`hello ${name} ${message}`);
// }
// talk("yusuf", "How are you doing?");

// const cal = function(radius){
//    return 5 * radius
// }
// const area =  cal(5);
// console.log(area)


// const aishaDay = ['waking up' , ' eating' , ' going to work']
// for( let i = 0; i < aishaDay.length; i++ ){
//     console.log(aishaDay[i])
// }
// callAisha()
// callAisha()
// callAisha()
// callAisha()
// callAisha()
// callAisha()
// callAisha()
// callAisha()
// const aishaDay = function(){
//    let day1 = ['waking up' , ' eating' , ' going to work']
//     for( let i = 0; i < day1.length; i++ ){
//   console.log(day1[i])
// }
// }
// aishaDay();

// const greet = () => {
//     return 'Hello, World!';
// };

// const print = greet();
// console.log(print)

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([20,40,30], 5.5));


// let people = ['yusuf', 'olatunji', 'west', 'yeezy'];

// const logPerson = (element, index) => {
//     console.log(`${index} - Hello ${element}`);
// }
// people.forEach(logPerson);

//OBJECT =============

// let user = {
//     name : 'Yusuf',
//     age : 22,
//     email : 'yusuf@gmail.com',
//     location : 'kwara state',
//     blogs : [
//         { title : 'yo!! Was awesome' , likes : 30,},
//         { title : 'completed' , likes : 30,}
//     ],
//     login: () => {
//     console.log(`the user login`);
//     },

//     logBlog : function () {
//       console.log(`the content of the blog :`);
//       this.blogs.forEach(blog => {
//         console.log(blog.title , blog.likes);
//       });
//     }
// };

// console.log(user);
// console.log(user.age);

//  user.age = 30
//  console.log(user.age);

//  console.log(user['email'])

//  const email = user.email
//  console.log(user.email)

// user.login();

// user.logBlog();

//MATH ==================

// const random = Math.random();

// console.log(random)
// console.log( Math.round(Math.random() * 100));  

//DOM eventListener ===========================

// const paras = document.querySelectorAll('p');

// paras.forEach(element => {
//     console.log(element.innerText);
//     element.innerText += "-New text"
// });

// paras.innerText = "-New paras";



// const list = document.querySelector('.content');

// const people = ['Yusuf','olatunji','West','Yeezy'];

// people.forEach(person => {
//   list.innerHTML += `<li>${person}</li>`
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://wwww.facebook.com');

// console.log(link.getAttribute('href'));

// const color = document.querySelector('p')

// color.setAttribute('style', 'color:green');

// const pick = document.querySelector('h1');

// console.log(pick.style);

// pick.style.marginLeft = '50px';
// pick.style.color = 'purple';

// const content = document.querySelectorAll('p');

// content.forEach(element => {
//     if(element.innerText.includes('error')) {
//         element.classList.add('error');
//     } else if (element.innerText.includes('succes')){
//         element.classList.add('succes');
//     }
// });


// const content = document.querySelectorAll('p');
// content.forEach(element => {
//     if( element.innerText.includes('succes')){
//         element.classList.add('succes');
//     } else if( element.innerText.includes('error') ){
//         element.classList.add('error');
//     }
// });

//  const article = document.querySelector('article')

// console.log(article.children)
// Array.from(article.children).forEach(element => {
//     element.classList.add('plus');
// });
// const ul = document.querySelector('ul');

// const button = document.querySelector('button');

// button.addEventListener('click', () =>{
//     const li = document.createElement('li');
//     li.innerHTML = '<li class="click">Added something</li>';
//     ul.prepend(li);

// })

// const list = document.querySelectorAll('li');

// list.forEach(element => {
//    ul.addEventListener('click', (e) => {
//     e.target.remove()
//    }); 
// });
// const ul = document.querySelector('ul');

// const button = document.querySelector('button')

// button.addEventListener('click' , ()=> {
//    const li = document.createElement('li');
//    li.innerHTML = "<li class = 'click'>something new </li>";
//    ul.prepend(li)
// });

// const list = document.querySelectorAll('li');

// list.forEach(item => {
//     item.addEventListener('click' , (e) => {
//         e.target.remove();
//     })
// });

// ul.addEventListener('click' , (e)=> {
//    if (e.target.tagName === 'LI'){
//     e.target.remove();
//    }
// });

// const copy = document.querySelector('.copy');

// copy.addEventListener('copy', () => {
//     console.log("dnt do that")
// })

// const ul = document.querySelector('ul');

// ul.addEventListener('click' , (e)=> {
//         if (e.target.tagName === 'LI'){
//          e.target.remove();
//         }
//     });

// const button = document.querySelector('button');

// button.addEventListener('click', ()=> {
//     const li = document.createElement('li');
//     li.innerHTML = "<li class = 'click'>New todo</li>"
//     ul.prepend(li)
// })

// const pick = document.querySelector('.yo');

// pick.addEventListener('mousemove', e => {
//     pick.textContent = e.offsetX, e.offsetY
// }); 

// const button = document.querySelector('.Btn');
// const content = document.querySelector('.content');
// const close = document.querySelector('.close');

// button.addEventListener('click', () => {
//    content.style.display = 'block';  
// });

// close.addEventListener('click', () => {
//     content.style.display = 'none';  
//  });



//  const sign = document.querySelector('.signup-form');


// sign.addEventListener('submit', e => {
//    e.preventDefault();
//    console.log(sign.username.value)
// })

// // const username = 'yusufo'
// // const pathern = /^[a-z]{6,}$/

// // let result = pathern.test(username);
// // console.log(result);

// const form = document.querySelector('.sign-up');
// const message = document.querySelector('#message');
// const email = document.querySelector('#email');
// const usernamePattern = /^[a-zA-z]{6,}$/;
// const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// form.addEventListener('submit', e => {
//    e.preventDefault();

//    //validation

//   const username = form.username.value;
//   const email = form.email.value;


//   if(usernamePattern.test(username) && emailPattern.test(email)) {
//     message.textContent = 'Valid Username 😊🚀'
//   } else {
//    message.textContent = 'Invalid username 😂'
//   }

// });

// //keyboard validation

// form.username.addEventListener('keyup', e => {
//    if(usernamePattern.test(e.target.value)) {
//      form.username.setAttribute('class' , 'succes');
//    } else { 
//       form.username.setAttribute('class' , 'error');
//    }
// });


// form.email.addEventListener('keyup', e => {
//   if(emailPattern.test(e.target.value)) {
//     form.email.setAttribute('class' , 'succes');
//   } else { 
//      form.email.setAttribute('class' , 'error');
//   }
// });

// const correctAnswer = ['A', 'B' , 'B' , 'B'];
// const form = document.querySelector('.quiz-form');
// const result = document.querySelector('.result');

// form.addEventListener('submit', e => {
// e.preventDefault();

// let score = 0;
// const userAnswers = [form.q1.value, form.q2.value , form.q3.value, form.q4.value];

// userAnswers.forEach((answer, index) => {
// if (answer === correctAnswer[index]) {
//   score += 25
// }
// });

// scrollTo(0,0)

// result.classList.remove('hidden');



// let output = 0;
// const timer = setInterval(() => {
// result.querySelector('span').textContent = `${output}%`;
// if(output === score){
//   clearInterval(timer);
// } else {
//   output++;
// }

// }, 10);


// });

// const scores = [10, 30, 40, 50, 60, 80, 90, 100];

// const filterScore = scores.filter((score) => {
//   return score > 20
// }); 
// console.log(filterScore);

// const user = [
//   { name: 'yusuf', premium: true},
//   { name: 'ola', premium: false},
//   { name: 'tunji', premium: false},
//   { name: 'west', premium: true}
// ];

// const premiumUser = user.filter(user => {
//   return user.premium
// });

// console.log(premiumUser);

// const products = [
//   { name: 'yusuf', price: 20},
//   { name: 'Ola', price: 40},
//   { name: 'west', price: 30},
//   { name: 'Ade', price: 50},
//   { name: 'tunji', price: 60},

// ];

// const newProduct = products.map( (product) =>{
//   if(product.price > 30){
//     return { name: product.name, price: product.price /2 }
//   } else {
//     return product;
//   }
// });

// console.log(newProduct);

// const products = [
//   { name: 'yusuf', price: 20},
//   { name: 'Ola', price: 40},
//   { name: 'yusuf', price: 30},
//   { name: 'yusuf', price: 50},
//   { name: 'ola', price: 60},
//   { name: 'yusuf', price: 30},
//   { name: 'yusuf', price: 50},
//   { name: 'ola', price: 60},
//   { name: 'yusuf', price: 30},
//   { name: 'yusuf', price: 50},
//   { name: 'ola', price: 60},



//];

// const totalPrice = products.reduce((acc,curr ) => {
//   if (curr.name === 'yusuf') {
//     acc += curr.price;
//   }
//   return acc;
//  }, 0 );

//  console.log(totalPrice);

//const players = [
//   { name: 'yusuf', price: 20},
//   { name: 'Ola', price: 40},
//   { name: 'Ade', price: 30},
//   { name: 'west', price: 60},
//   { name: 'tunji', price: 60},  
// ];

// const promos = players.filter(product => product.price > 20 )
//                .map(product => `the following ${product.name} is ${product.price /2 } pounds`)

// console.log(promos);

// players.sort( (a,b) =>{
//   return b.price - a.price
// });

// console.log(players);


// const scores = [10, 30, 40, 50, 60, 80, 90, 100];

// scores.sort((a,b) =>{
//   return b-a
// })
// console.log(scores);


// const addForm = document.querySelector('.add');
// const list = document.querySelector('.todos');
// const search = document.querySelector('.search , input');
// const clock = document.querySelector('.clock');


// //addTodo
// const generateTemplate = todo => {

//   const html = `
//   <li class="border-b-2 p-4 py-3 sm:py-4 shadow-2xl shadow-black">
//   <div class="flex items-center space-x-4">

//     <div class="flex-1 min-w-0">
//        <p class="text-xl font-medium text-white">
//           ${todo}
//        </p>
//     </div>
//     <i class="fa-solid fa-trash-can text-red-900 text-xl cursor-pointer delete"></i>
//     </div>
// </li>
//   `
// list.innerHTML += html;

// }

// addForm.addEventListener('submit', e =>{

//   e.preventDefault();

//   const todo = addForm.add.value.trim();

//   if(todo.length) {
//   generateTemplate(todo)
//   addForm.reset();
// }
// });


// //deleteTodo

// list.addEventListener('click', e => {
//   if(e.target.classList.contains('delete') ) {
//     e.target.parentElement.parentElement.remove();
//   }
// });


// const filterTodos = (term) => {

//   Array.from(list.children)
//   .filter((todo) => !todo.textContent.toLocaleLowerCase().includes(term))
//   .forEach((todo) => todo.classList.add('filtered'));


//   Array.from(list.children)
//   .filter((todo) => todo.textContent.toLowerCase().includes(term))
//   .forEach((todo) => todo.classList.remove('filtered'));

//   };

// //search 


// search.addEventListener('keyup', () => {

// const term = search.search.value.trim().toLowerCase();
// filterTodos(term);

// });

// // date & times 

// const tick = () => {

//   const now = new Date();

//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();

//   const html = 
//    `
//   <span>${h}</span> :
//   <span>${m}</span> :
//   <span>${s}</span> 
//   `;

//   clock.innerHTML = html;

// };

// setInterval(tick,1000)

// // const now = new Date();


// //year and month

// console.log(`getFullYear:`, now.getFullYear());
// console.log(`getMonth:`, now.getMonth());
// console.log(`getDate:`, now.getDate());
// console.log(`getDay:`, now.getDay());
// console.log(`getHours:`, now.getHours());
// console.log(`getminutes:`, now.getMinutes());
// console.log(`getSeconds:`, now.getSeconds());

// //timestamps

// console.log(`timestamps:`, now.getTime());

// //date strings

// console.log(`date strings:`, now.toDateString());
// console.log(`time strings:`, now.toTimeString());
// console.log(`time local:`, now.toLocaleString());

// const timestamps = 672888429271;

// console.log(new Date(timestamps))

// Async javascript ==============
// const getTodo = (resource) => {
//promise 
//       return new Promise((resolve,reject) => {
//             const request = new XMLHttpRequest();

//             request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200) {
//                   const data = JSON.parse(request.responseText);
//                   resolve(data);
//             } else if(request.readyState === 4) {
//                   reject('couldnt fetch data from server');
//             } 
//             });
//             request.open('GET', resource);
//             request.send();

//             });
// };

// getTodo('todos/ade.json').then(data => {
//       console.log('promise 1 resolved', data);
//       return getTodo('todos/ola.json' , data);
// }).then(data => {
//       console.log('promise 2 resolved', data);
//       return getTodo('todos/yusuf.json', data);
// }).then(data => {
//       console.log('promise 3 resolved', data);
// }).catch(err => {
//       console.log('promise rejected:', err);
// });

//fetch api=============
//      fetch('todos/yusuf.json').then(res => {
//       console.log('resolved:', res);
//       return res.json();
//      }).then(data => {
//         console.log( data);
//      }).catch(err => {
//       console.log('rejected:',err);
//      });

//Async and await
//      const getTodos = async () => {

//       const response = await fetch('todos/ade.json');

//       if (response.status !== 200){
//             throw new Error('Error: ' + response.status)
//       }

//       const data = await response.json();


//       return data;

//      };

//      getTodos()
//       .then(data => console.log('resolved:',data))
//      .catch(err => console.log('rejected:',err.message));


//localStorage======================
//set localStorage
// localStorage.setItem('name', 'West')
// localStorage.setItem('age', 22)
//get localStorage
// let name = localStorage.getItem('name')
// let age = localStorage.getItem('age')

// console.log(name, age);

// name = localStorage.setItem('name', 'yeezy')
// name = localStorage.getItem('name')
// console.log(name)
//delete data from localStorage
// name = localStorage.removeItem('name')
// name = localStorage.removeItem('age')
// console.log(name)
//clear localStorage
// localStorage.clear(name,age);

// const players = [
//   { name: 'yusuf', price: 20},
//   { name: 'Ola', price: 40},
//   { name: 'Ade', price: 30},
//   { name: 'west', price: 60},
//   { name: 'tunji', price: 60},  
// ];

// localStorage.setItem('players', JSON.stringify(players));

// const stored = localStorage.getItem('players');
// console.log(JSON.parse(stored)); 

//OOP(OBJECT ORIENTED PROGRAMMING)========

// const newUser = new Array('20','30','40','50');
// console.log(newUser);

//classes

class User {
    //class constructors
    constructor(username, email) {
        //set propertise
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(`${this.username}: ${this.email} just logged in`);
        return this
    }
    logout() {
        console.log(`${this.username}: ${this.email}  logged out`);
        return this
    }
    incScore() {
        this.score += 1
        console.log(`this ${this.username}: Scored ${this.score}`);
        return this
    }
}

//class inheritance

class Admin extends User{
    constructor(username, email, title){
        //set properties
        super(username, email)
        this.title = title;
    }
   deleteUser (user){
     users = users.filter(u => {
        return u.username !== user.username;
     })
   }
}

const userOne = new User('yeezyWest', 'yeezy033@gmail.com');
const userTwo = new User('Olatunji', 'West57@gmail.com');
const userThree = new Admin('MrWest', 'Wnation@gmail.com', 'Odogu!!!!!!');

//class methods & method chaining
console.log(userOne, userTwo , userThree);
//userOne.login().incScore().incScore().logout().incScore()

let users = [userOne, userTwo, userThree];
console.log(users);
console.log(users);

// userThree.deleteUser(userTwo);
// console.log(users);

