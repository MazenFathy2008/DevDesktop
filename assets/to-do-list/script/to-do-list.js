//This object is for the elmentnst which will thake the input from user
let inputFromPage = {
  toDoElemnt: document.querySelector(".js-todo-input"),
  dateElemnt: document.querySelector(".js-date-input"),
  addButtonElemnt: document.querySelector(".js-add-button"),
};
//this is the div elemment which will display  the final output
let outputElement = document.querySelector(".js-display-div");
//this button is used to clrear dataBase
let deleteAll = document.querySelector(".js-delete-all");
//this is the dataBase for my todo list project
let dataBase = JSON.parse(localStorage.getItem("dataBase")) || {
  line: [],
  Html: ``,
};
dataBase.line = dataBase.line || [];
dataBase.deleteNum = dataBase.deleteNum || 0;
dataBase.deletPlace = dataBase.deletPlace || [];
dataBase.Html = dataBase.Html || ``;
// this methode used to resave the data in dataBase(localStorage)
dataBase.setDataBase = function () {
  localStorage.setItem("dataBase", JSON.stringify(dataBase));
};
// this used to clear the dataBase
dataBase.resetDataBase = function () {
  dataBase.line = [];
  dataBase.deleteNum = 0;
  dataBase.deletPlace = [];
  dataBase.Html = ` `;
  localStorage.removeItem("dataBase");
};
//this function check if the user enter value
function checkInput() {
  return !inputFromPage.toDoElemnt.value || !inputFromPage.dateElemnt.value;
}

function removeItem(index, num) {
  dataBase.line.splice(index, num);
  creatHtml(dataBase.line.length);
  display(dataBase.Html);
  deleButtonFunc();
  dataBase.setDataBase();
}
// function generate the html at the number we need to display
function creatHtml(Num) {
  let Html = ` `;

  for (let i = 0; i < Num; i++) {
    Html += `
          <div class="output">
              <span class="todo-name"> ${dataBase.line[i][0]} </span>
              <span class="date"> ${dataBase.line[i][1]} </span>
              <button class="delete-button js-delete-button">
                Delete 
              </button>
            
            </div> \n    
    `;
  }
  //this button element used to delete the current row
  dataBase.Html = Html;
  display(dataBase.Html);
}
//this consider as the main function wich append the data to our dataBase
function appendData(toDoName, date) {
  if (checkInput()) {
    alert(`Please Enter Data`);
  } else if (dataBase.line.length <= 7) {
    dataBase.line.push([toDoName, date]);
    creatHtml(dataBase.line.length);
    deleButtonFunc();
    dataBase.setDataBase();
    inputFromPage.dateElemnt.value = " ";
    inputFromPage.toDoElemnt.value = " ";
  } else {
    alert("You reach maximum todos");
  }
}

//this used to display the html after the webpage begain to work

//this use to put the html from dataBase in  our display div
function display(Html = " ") {
  outputElement.innerHTML = Html;
  return document.querySelectorAll(".js-delete-button");
}
function deleButtonFunc() {
  let deleteButton = display(dataBase.Html);
  deleteButton.forEach((button, i) => {

    button.addEventListener("click", () => {
      removeItem(i, 1);
    });
  });
}
// this add event (onclick) to the button add
inputFromPage.addButtonElemnt.addEventListener("click", function () {
  appendData(inputFromPage.toDoElemnt.value, inputFromPage.dateElemnt.value);
});

// this add event (onclick) to the button delete
deleteAll.addEventListener("click", function () {
  //we reset the dataBase and the display window
  dataBase.resetDataBase();
  display(" ");
});
display(dataBase.Html);
deleButtonFunc();
