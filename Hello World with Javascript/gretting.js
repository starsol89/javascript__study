/*
querySelector를 이용해서 해당 요소 하위에 있는 input을 얻게 된다. 원한다면 클래스를 input에 넣어도 된다. 
input  변수는 좀 더 명확하게 form 하위 요소를 가져올 수 있게 하기 위해 document 대신에 form을 썻다.
즉, 여러가지 방법이 있는데 
하나는 쿼리 셀렉터 - 이건 원하는 셀렉터는 다 가져온다고 보면 된다.(클래스, 태그, 아이디, css 등등 가져온다.)
둘째는 쿼리 셀렉터 올 - 모든걸 가져온다. 쿼리 셀렉터는 찾은 첫번째 것을 가져오는 반면, 쿼리셀렉터 올은 클래스명에 따른 엘리먼트들을 가져오는데 이건 array(리스트)를 준다. 그가 찾은 모든 엘리먼트의 array를 줄것이다.
대체적으로 이건 array 외부에서 하나의 엘리먼트를 가져오는게 여간 귀찮다. 그 이유는 찾은 것이 유일하게 하나의 클래스명이라고 해도, array 안에 넣을 것이며, 이건 꽤나 귀찮아지는 일이다. 
*/
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  //기본적으로 내가 텍스트를 input에 적고 enter를 누르면 내용이 사라지게 되어있다. 그러나 이 event의 기본 동작(기본값)을 막는 코딩이 바로 event.preventDefault(); 이것이다.
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// 이 함수는 currentUser가 없다면, user의 이름을 요청하기 위해 만듬. 즉, if문에서 currentUser가 없다면 이 성립되면 동작함.
// 웹페이지를 보면 what is your name? 을 보여주는건 currentUser가 null 이기 때문이다. 내 이름을 요청해야 한다는 것임 = askForName(); 즉, 요청하는 방식이 form.classList.add(SHOWING_CN); 이거다.
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

// 이 함수의 동작은 첫줄내용 - form을 지우고, 둘째 줄 내용 - 나에게 greeting을 보여줄거고, 셋째 줄 내용 - 내가 보낸 text를 넣을 것.
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

//이 함수는 localStorage에서 값을 가져오는 것.
function loadName() {
  // 로컬스토리지 에서 유저를 가져와 currentUser 변수에 담는다. 그 이후 조건문에서 유저가 있는지 없는지 확인하고 동작한다.
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // 이 곳에는 로컬 스토리지에 유저가 없을때 어떤 행동을 하는지에 대해 조건을 건다.
    askForName();
  } else {
       /* 이 곳에는 로컬 스토리지에 유저가 있을때에 어떤 행동을 하는지에 대해 조건을 건다. 
           paintGreeting() 함수를 불러서, 로컬스토리지에서 가져온 텍스트와 함께 동작.
        */
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

//local storage - 이건 작은 정보를 내 유저 컴퓨터에 저장하는 방법이다.