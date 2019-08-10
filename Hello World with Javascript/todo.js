//html에서 얻고 싶은 것을 얻었다. (클래스,요소, 등등)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

//해야할 일을 생성할 때마다 'toDos'라는 array에 추가되도록 할것이다.
let toDos = [];

function deleteToDo(event) {
    const btn = event.target; // 우리가 누른 버튼에 대해서 html에 있는걸 선택해 준다. 예시) ❌를 누르면 거기에 해당하는 button을 선택되게 함.
    const li = btn.parentNode; // btn에 담겨진 button의 부모가 누구인지 더 명확하게 알려준다. 여기선 li가 누군지.
    toDoList.removeChild(li); // 명확하게 알게 된 button을 지워준다. 부모 자식 모두 지워짐.

    //지금 사용 하려는 코딩은 toDos에 filter를 사용해 함수 filterFn를 동작하게 하는 것이다.
    //filter를 이용하게 되면, array의 모든 아이템을 통해 함수를 실행하고 그리고 true(참)인 아이템들만 가지고 새로운 array를 만든다.
    const cleanToDos = toDos.filter(function(toDo){
        //모든 toDos가 'li'의 id와 같지 않을때 동작하며, parseInt는 li의 id를 string에서 int로 변환해준다. 왜냐면 지워줬더니 toDo.id는 숫자, li.id는 string이라 지워지지 않았음.
        return toDo.id !== parseInt(li.id);
    });
    //cleanToDos에서 일어난 일련의 동작들의 결과를 toDos에 담고, saveToDos() 함수가 실행 됨.
    toDos = cleanToDos;
    //이 함수는 'toDos'를 저장 할 것이다.
    saveToDos();
}

// 이 saveToDos 함수는 9번째 줄의 toDos를 가져와서 로컬스토리지에 저장하는 일을 하게 될 것이다.
//JSON.stringify는 javascript object를 string으로 바꿔준다.
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    //이 문장은 html에서 쓰고 싶은 것을 얻어오는게 아니라 뭔가를 생성 하기를 원하기에 쓰는 문장이다.
    const li = document.createElement("li"); // empty(비어있는) li를 만들었고,
    const delBtn = document.createElement("button"); //마찬가지로 delBtn을 만들었고,
    const span = document.createElement("span");//또 span를 만들었다.
    const newId = toDos.length + 1; //toDos.length + 1은 toDos에 기본으로 1을 지니고 있다.
    delBtn.innerText = "❌";
    //paintToDo함수에 delBtn을 만들때 addEventListener 동작을 하게 끔 만든다. 그리고 addEventListener는 click 이벤트를 갖는다.
    //클릭 하고 난 다음 동작하는 함수는 deleteToDo가 된다.
    delBtn.addEventListener("click", deleteToDo);
    //이 text는 submit function 에서 온 값이다.
    span.innerText = text;
    //li.appendChild()를 해줄건데 그게 무엇이냐면, 뭔가를 그의 father element(부모요소)안에 넣는 것이다.
    li.appendChild(delBtn); // 버튼을 li 안에 넣고,
    li.appendChild(span); //span을 li 안에 넣었다.
    //li에 id를 준다. 그 이유는 나중에 만들어진 li를 지울때 어떤 것이 지워졌는지 알기 쉽게 하기 위해.
    li.id = newId;
    //이제 남은건, 마지막으로 li를 ul에다 append 하는 것이다.
    toDoList.appendChild(li);

    //해당 코딩은 toDos = []의 역활을 제대로 수행하기 위해 해주는 코딩이다.
    const toDoObj = {
        // text는 paintToDo(text)와 같다.
        text : text,
        id: newId
    };
    // push를 써서, array 안에 element 하나를 넣어 줄 수 있다. 즉, 'toDos' array 안에 'toDoObj'를 넣게 되는 것이다.
    toDos.push(toDoObj);
    //savaToDos() 함수를 위에 만들었으면 여기서 호출해줘야한다.
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //input에 내용을 작성하고 엔터를 누르면 로컬스토리지에 저장 되면서 input에도 그냥 내용이 남는다. 그런건 싫어서 작성 후 엔터를 치면 내용은 사라지고 로컬스토리지에만 저장 되게 하고 싶을때 쓰려고 한다.
    toDoInput.value = "";
}

//임 함수의 기능을 정리하자면, toDos를 가져온 뒤에 조건문을 실행! 그래서 null이 아니라면, if 조건문이 실행 된다.
//그 이후 JSON.parse! 즉, 가져온 것을 javascript object로 변환해줄 것이고, 
//forEach를 통해 각각에 대해서 paintToDo라는 function이 실행 된다.
//paintToDo 함수는 위에 정의해 뒀던 기능을 그대로 수행한다.
//구체적으로 toDo.text에 대해 실행 될 것이다.
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //JSON은 그냥 'Javascript object Notation'의 준말이다. 
        //데이터를 전달할 때, javascript가 그걸 다룰 수 있도록 object로 바꿔주는 기능인 셈이다.
        //그래서 javascript의 object를 string으로 변환 해주기도 하고, string을 object로 변환 해줄수도 있다!
        const parsedToDos = JSON.parse(loadedToDos);
        
        //forEach()는 array가 가진 함수인데, 이녀석의 기능은 array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 주는 것이다.
        //예를들어 우리가 작성하는 경우에는 괄호안에서 바로 function을 만들거다.
        //바로 아래 init() 함수 처럼 호출하는게 아니라 안에다 바로 만드는 것이다. 
        //정리하자면 지금 만들 함수를 parsedToDos에 있는 것들 각각에 대해 실행 해줄 것이므로, 그 각각을 toDo라고 칭할 것이다.
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();