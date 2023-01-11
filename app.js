/*Зробити перевірку чи введені всі поля, перевірку реалізувати 
через конструкцію try...catch, 
якщо якесь поле не введено то ми маємо згенерувати власний тип помилки
 і вивести як error в термінал(консоль)
*/

const advertForm = document.querySelector('#advert-form');
const advertItem = {};

function errorHandling(obj) {
  try {
    for (const key in obj) {
      if (obj[key] == "") {
        throw `One or more fields are EMPTY`; // generates an exception
      }
    }
    console.log(obj);
  } catch (e) {
    // statements to handle any exceptions
    console.error(e); // pass exception object to error handler
  }
}

advertForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let formItems = e.target.elements;

  advertItem.image = formItems.image.value;
  advertItem.userName = formItems.name.value;
  advertItem.userPhone = formItems.phone.value;
  advertItem.userEmail = formItems.email.value;
  advertItem.title = formItems.title.value;
  advertItem.price = formItems.price.value;
  advertItem.description = formItems.text.value;

  errorHandling(advertItem);
});


// Code to render single item
const photo = document.querySelector('.photo');
const userName = document.querySelector('.name');
const term = document.querySelector('.name-general');

const adBase = [
  {
    image: `${'<img src="./powerbank.jpg" alt="item" />'}`,
    name: 'Joseph',
    term:  `<p>User since: <b>December 2022</b></p>`,
  },
];

// function to inject advertisement data 
const injectData = () => {
  photo.innerHTML = adBase[0].image;
  userName.innerText = adBase[0].name;  
  
}

injectData();

// <p>User since: <b>December 2022</b></p>
//  <p class="deals"><b>+500 </b>Successful deals</p>

