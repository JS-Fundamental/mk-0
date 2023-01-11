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