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
      if (obj[key] == '') {
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

/////////////////// Mine code ///////////////////////////////
// Code to render single item

// Image field
const photo = document.querySelector('.photo');
const singleImg = photo.querySelector('img');

//Name field
const userName = document.querySelector('.name');

// Term field
const term = document.querySelector('.term');
const termDate = term.querySelector('b');

// Title field
const descClass = document.querySelector('.description');
const title = descClass.querySelector('h2');

// Price field
const price = document.querySelector('.price');

// Description field
const description = document.querySelector('article');

// function to inject advertisement data
const injectData = (idx) => {
  singleImg.setAttribute('src', adBase[idx].imageSrc);
  userName.innerText = adBase[idx].userName;
  termDate.innerText = adBase[idx].term;
  title.innerText = adBase[idx].title;
  price.innerText = adBase[idx].price;
  description.innerText = adBase[idx].description;
};

injectData(2);
