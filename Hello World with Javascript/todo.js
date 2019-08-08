//html에서 얻고 싶은 것을 얻었다. (클래스,요소, 등등)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
    //이 문장은 html에서 쓰고 싶은 것을 얻어오는게 아니라 뭔가를 생성 하기를 원하기에 쓰는 문장이다.
    const li = document.createElement("li"); // empty(비어있는) li를 만들었고,
    const delBtn = document.createElement("button"); //마찬가지로 delBtn을 만들었고,
    delBtn.innerText = "❌";
    const span = document.createElement("span");//또 span를 만들었다.
    //이 text는 submit function 에서 온 값이다.
    span.innerText = text;
    //li.appendChild()를 해줄건데 그게 무엇이냐면, 뭔가를 그의 father element(부모요소)안에 넣는 것이다.
    li.appendChild(delBtn); // 버튼을 li 안에 넣고,
    li.appendChild(span); //span을 li 안에 넣었다.
    //이제 남은건, 마지막으로 li를 ul에다 append 하는 것이다.
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //input에 내용을 작성하고 엔터를 누르면 로컬스토리지에 저장 되면서 input에도 그냥 내용이 남는다. 그런건 싫어서 작성 후 엔터를 치면 내용은 사라지고 로컬스토리지에만 저장 되게 하고 싶을때 쓰려고 한다.
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();