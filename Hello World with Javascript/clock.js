/* 변수의 사용
   1. Create(생성)
   2. Initialize(초기화)
   3. Use(사용)
   필요할 때는 생성과 초기화를 동시에 할 수 있으며, 나중에 사용 할 수 있다.
   
   에를들어
   
   a = 221; 이라고 하면 a를 생성하고, 숫자 221로 초기화 한 것이다.
   여기서 규칙을 적용하는데 변수를 초기화 하기 전에 let 이라는 단어를 넣어야한다.
   즉, let a = 221; 
   
   let a = 221;
   let b = a - 5;
   
   라면 let b = let a -5; 로 let을 써야하는거 아닐까? 라는 생각이 들수있지만, 이미 생성된 것을 사용할 때는 단지 참조만 하면 된다. 즉, let b = a - 5; 다.
   
   변수는 가변적이기에 변화 될 수 있다.
   쉽게 예를 들어서 
   let a = 221;
   let b = a - 5;
   a = 4; (여기서는 let을 쓰지 않았고, 다시 선언하지 않았다. 단지 업데이트를 한 것.)
   console.log(b, a);
   
   결과 = 216, 4
   
   라면, javascript는 맨 위에서 아래로 실행한다. 
*/

/*
   let, const, var 

   큰 작업을 하다가 보면 프로그래머는 변수를 바꾸지 말아야 할때 바꾸게 될지도 모른다. 즉, 실수를 말하는 것이다.
   이러한 면에서 우리는 변함없이 변수를 사용하기 위해 const를 이용 할 수 있다.
   좀 더 명확하게는 info를 어떤 값으로 정하고 난 뒤 이걸 알지 못하고 나중에 info를 다른 값으로 바꾸는 것인데...이건 별로다.
   왜냐면 만약 문제가 발생 했을때 무슨 일이 일어났는지 알 수 없기 때문이다.
   그래서 이걸 해결하기 위해 우리는 let 대신 const라는 걸 사용할 것이다.
   const 즉, constant는 상수라는 뜻이다. 상수 = 안정적! 변하지 않는

   javascript는 아래의 것을 보고 "A는 상수의 221이라고 했잖아!! 넌 바꿀수 없다!" 라고 하며 에러를 띄울 것이다. 
   const a = 221;
   let b = a - 5;
   a = 4; (여기서는 let을 쓰지 않았고, 다시 선언하지 않았다. 단지 업데이트를 한 것.)
   console.log(b, a);
   
   결과 = Assignment to constant variable.(에러)

   위에 나온 결과는 매우 중요하다. (프로그래머는 에러를 읽을 수 있어야한다.)
   그 이유는 모든 정보나 대부분의 정보가 에러에 있기 때문이다.
   이 에러는 넌 상수로 지정된 변수에 변수를 대입 하려고 했다! 그러니 상수는 변하지 않는 값이니 에러야! 와 같다.

   또한 에러를 보면 우리가 어디서 잘못 되었는지 몇번째 라인 인지 알려준다.

   간단하게 한줄로 정리하자면 "다른 사람들이 내 변수를 바꿔도 괜찮으면 let을 사용하고 그게 아니라면 conts를 사용하자"

   그럼 var = varible는 무엇인가?!
   이 친구도 let과 비슷하게 변수를 바꿀수 있다. 

   var a = 221;
   var b = a - 5;
   a = 4;
   console.log(b, a);

   결과는 let을 쓴 것과 같다.

   결과적으로 let과 conts를 많이 쓰기 때문에 var 보다 비중이 높다.
   
   대체적으로 변수를 사용할때 const를 사용하고 진짜 필요할때만 let을 사용하자.
*/

/*
    Data Types on JS
    
    첫번째는 String
    const what = "youngchul"
    결과: youngchul

    두번째는 Boolean (True or False)
    바이너리 세계에선(이진법) 모든 것은 0 or 1 이다.
    즉, true는 1, false는 0 이다.
    true와 false는 절대 텍스트가 아니라는 것.

    세번째는 number
    const wat = 777;
    float도 알아보면 일단 숫자이며, floating number(떠돌이 소숫점)를 가지고 있다.
    const wat = 55.1; ---> 여기서 00.1에 해당하는 것이 떠돌이 소숫점이 있는 것이다.

    이 위에 것들을 외우려는 노력은 필요없다. 자연스럽게 코딩을 해나가다 보면 많이 쓰이기에 금방 터득한다.
    다만 사용하는게 어떤 타입인지 인지하는게 중요하다.

*/

/*
    Orhanizing Data with Arrays

    Array - 데이터를 저장하는 곳이며, 리스트 같이 저장하는 방식이다. 예를들어 우리가 요일을 정리한다고 했을때 밑에 처럼
    * daysOfWeek 이 단어에서 우리는 대소문자로 구분 된 것을 확인 할 수 있다. 이걸 camel case라고 하며 이건 변수명을 언제나 소문자로 시작해서 변수명 중간에 스페이스가 필요하다면 스페이스 대신 대문자로 이용해서 써준다.
      왜냐하면 javascript에서는 스페이스를 쓸 수 없기 때문이다.
    
      const monday = "Mon";
      const tue = "Tue";
      const wed = "wed";
      const thu = "Thu";
      const fri = "Fri";

      console.log(monday, tue, wed, thu, fri);

      이 코드는 전혀 효과적이지 않다. 우리는 이걸 하나로 묶을 수 있다. 그것을 Array라고 부른다.
      Array는 여러 string들을 하나로 묶는 것.

      [] ---> 저 괄호가 Array다.
      const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      
      console.log(dayOfWeek);

      Array는 규칙을 가지고 있다. 예를 들면 난 Array 3번째 요일을 알고 싶어! 라고 했을때, 
      console.log(daysOfWeek[2]);
      라고 실행하면 된다. 결과는 Wed 나오는데 여기서 사람이 새는 숫자와 컴퓨터가 인식하는 숫자가 다르단걸 알수있다.
      컴퓨터는 0 부터 시작해서 숫자를 새어나가기 시작한다. 즉, 0,1,2,3 이런식이다.
*/

/*
    Organizing Data with Objects

    object와 Array가 다른점은 object는 각 value에 이름을 줄 수 있는 것.
    만약 우리가 리스트로 내 개인정보를 지니고 있다고 예를 들어보자
    const youngInfo = ["YoungChul", "31", true, "Osan"];
    console.log(youngInfo);
    이면, 여기서 내 이름을 얻기 위해 console.log(youngInfo[0]); 이런식의 접근이 필요하다. 즉, 리스트에 정렬 되어있지 않은 데이터를 내가 꼭 위치를 생각해서 얻어내야하는 불편함이 있다. 
    만약 그 위치를 까먹게 되면 위치 확인 이후에 데이터를 가져와야 한다.
    근데 이것은 효율적이지 못하다. 그래서 우리가 소위 말하는 Object를 만들어야 한다.

    object를 선언하기 위해선 리스트 []브라켓과 다른 {}컬리 브라켓을 써주면 된다.
    object는 실제 객체를 만든다고 알아야한다. 즉, label을 네가 저장하고 싶은 data에 줄 수 있는 것이다.
    
    예를들어 

    const youngInfo = {
        name:"Young",
        age:31,
        gender:"Male",
        isHandsome:true
    }

    결과 : {name:'Young', age:33, gender:'Male', isHandsome: ture}

    리스트와는 차이가 나는 결과가 나온다. 즉 key와 vlaue!!

    이 youngInfo object를 이용해서 우리는 데이터에 접근하고 바꾸기도 할 수 있다.

    console.log(youngInfo.gender); 해주면 해당 키 값에 들어있는 vlaue 값들을 모조리 가져온다.

    또한 vlaue에 해당하는 값들은 javascript 안에서는 다양하게 바꿀수있다. 보시다시피 const 안에 있는 값을 바꿀 수 있다는 말이다.
    그러나 youngInfo 자체는 바꿀 수 없다는 걸 명심해야 한다.

    만약 DB에서 가져온 리스트 데이터라면 Array를 선택 해야한다. 

    object안에는 list를 넣어 줄 수 있다.

    const youngInfo = {
        name:"Young",
        age:31,
        gender:"Male",
        isHandsome:true,
        favMovies: ["Along the gods", "Lotr", "Oldboy"]
        favFood: [{name: "Kimchi", fatty: false}, {name: "Cheese burger", fatty: ture }]
    }

    여기서 우리는 javascript 문법의 규칙을 기억해야한다. 콤마(,)를 빼먹지 말아야한다. 꼭!!! 또한 string 쓸때, "" 앞 뒤에 넣는거 잊지말아야 한다.
    그리고 꼭 console log를 챙겨보자! 특히 에러가 난다면 그 안에 해답이 존재 한다.
*/

/*
    Function 함수

    우리가 함수를 사용하는 이유는 개발을 하다가 보면 반복적이거나 같은 것을 수시로 사용해야 할때 하나의 기능을 담당하는 함수를 만들어서 처리한다.

    기본적으로 함수를 사용하는 법은

    function -함수이름 (어느것이든 내가 쓰고자하는 이름, 다만 기능에 맞게 지어주면 좋음)-
    function sayHello() {
        console.log("Hello");
    }
    sayHello();

    하게 되면 우리는 "Hello"를 얻게 된다. 

    여기서 우리는 그냥 Hello 말고 Hello, youngchul!!을 얻고 싶다! 어떤식으로 하면 될까?

    sayHello(", youngchul!!") 이라고 하면 될까? 아니다 ! 실행 되지 않는다. 이유는!?

    받는 인자(argument)가 없기 때문인데 argument(인자)는 변수 같은 것이다. 우리가 주는 값을 저장해준다. 그럼 쓰는법은?!

    첫 함수를 만들때, 
    function sayHello(argument) 이곳에 넣어주면 된다. 예를들면 

    function sayHello(name) {
        console.log("Hello", name);
    }

    sayHello("youngchul!!");

    결과 : "Hellon youngchul!!"

    이런식으로 외부에 있는 데이터를 읽는 함수를 만드는 방법이다. 하나의 인자 뿐 아니라 2개,3개도 가능하다. 즉, 무한하게 가질수있다.

    function sayHello(name, age) {
        console.log("Hello", name, " My age ", age);
    }

    sayHello("youngchul!!", 31);

    결과: "Hello youngchul!! My age 31" 이 나오게 된다.

    인자는 내가 만드는 함수 안에서 쓰이고, 무슨 이름이든 법칙은 없다.
*/

/*
    More Function Fun
    
    javascript에서 "",'' 둘다 스트링이며, "" 를 썻으면 끝까지 써줘야하고, '' 도 마찬가지다. 

    우리는 위에서 배운 함수를 좀 더 간편하고 javascript에 걸맞는 방식으로 만들고자 한다.

    function sayHello(name, age) {
        return 'Hello ${name} you are ${age} years old';
    }

    sayHello("youngchul", 31);

    const greetYoungchul = sayHello("youngchul", 31)

    console.log(greetYoungchul)

    여기서 우리는 새로운 return을 알게 되었는데 간단히 설명하자면, 내가 돈을 내면 반드시 잔돈을 받아야 하는 그럼 개념이다.

    우리는 함수에 console.log를 쓰는건 프로그래밍 언어에서 적합한 방식이 아니다. 함수 안에서 값은 반환을 해줘야하는 구조이고, return이 이를 담당한다.

    만약에 console.log로 함수에 써준다면 나중에 값을 불러 올때 함수에 한번, 값을 불러올때 한번씩 해서 두번을 사용하는 비효율이 발생한다. 

    그런 것들을 방지하기 위해 javascript의 법칙에 맞게 프로그래밍의 논리에 맞게 return으로 값을 반환해준다. 

    그럼 더 정확히 들어가서 console.log 처럼 우리도 객체와 함수를 새로 정의 할 수 있지 않을까?! 
    console.log 자체도 하나의 만들어진 내장객체?! 및 함수인데 말이다.

    const calculator = {
        plus: function(a, b){
            return a + b;
        }
    }

    const plus = calculator.plus(5, 5)
    console.log(plus)

    결과: 10

    여기서 기억해야할 점은 우리는 새로운 객체 안에 새 함수를 만들어 줄 수 있다는 것이다. 이거 말고도 빼기, 나누기, 나눈 값의 나머지 등등 다양하게 만들 수 있다.

    사칙연산 뿐 아니라 어떠한 동작을 해줄 수 있는 기능도 만들 수 있다.

    const calculator = {
        plus: function(a, b){
            return a + b;
        },

        multiply: function(a, b){
            return a * b;
        }
    }

    const multiply = calculator.multiply(5,5)
    console.log(multiply)

    결과: 25

    이런식으로 된다.

*/

/*
    JS DOM Function
    DOM(Document Object Module)
    Javascript는 내꺼인 html에 있는 요소를 가지고 오며, 그걸 객체로 바꿀 것이다. 좀 더 보태면 html tag를 가져다가 객체로 만들 것이다.
    console. 이 객체는 저렇게 했을때 점 뒤로 수많은 key를 가지고 있다.

    또한 예를들어 
    const title = document.getElementById("title");
    title.innerHTML = "Hi! JS!!"

    라고 했을때 

    HTML에 작성 된

    <h1 id="title">This works!</h1> 이것은 JS에서 작성한 "Hi! JS!!"로 변화 된다.

    이게 바로 Javascript의 힘이고, 우리가 찾게 될 모든 객체들의 함수들 즉, console. 하고 뒤에 나타나는 것들은 DOM(Document Object Module) 형태로 변경 가능하다.

    내 페이지에서 Javascript로 선택한 거는 갹체가 된다.
*/

/*
    Modifying the DOM with JS

    우리는 JS를 이용해서 DOM을 수정 할 수 있는데, 말 그대로 html,css의 자체를 변경해서 변화를 줄 수 있다. 각각의 객체들을 이용해서 말이다.
    예를들어서

    const title = document.querySelector(".title"); 하게 된다면 우리는 정의되지 않는 null 값을 받을 것이다.

    그러나 const title = document.querySelector("#title"); 해준다면, 우리는 index.html에 h1에 있는 id 값을 받아 올수있다.

    이 처럼 객체를 이용해서 JS는 값에 접근하고 수정하고 가져오고 다양하게 해 줄 수 있다.
*/

/*
    Events and event handlers

    우리가 여짓 공부하면서 작성했던 Javascript는 제대로 쓰여진 javascript는 아니다. 
    Javascript는 단지 html와 css를 바꾸고 싶어서 만들어지진 않았고, Javascript는 event에 반응하기 위해서 만들어졌다.
    그러면 event는 무엇일까?
    웹사이트에서 발생하는 것들을 말하는 것이며, click, resize, submit, input, change, load, before, closing, printing 같은 것들 모두를 뜻한다.

    예를 든 event 하나를 만들자면,

    function handleResize(){
        console.log("I have been resized");
    }

    window,addEventListener("resize", handleResize); 해주는데 여기서 handleResize는 내가 필요한 시점에 함수를 호출하는 것이고, handleResize() 해준다면 지금 당장 호출 하라는 것이다.
    이 두가지는 의미 자체가 다르기 때문에 정말 중요하다.

    즉, handleResiz는 윈도우 창 사이즈가 변화 될때 이벤트가 동작하는 것이고, handleResize()는 윈도우 창이 변화 되지 않아도 이벤트가 동작한 것이다.
*/

/*
    첫번째 조건문 if, else, and, or

    if 조건은 항상 참이어야 한다. 
    if (10 === 10) {
        console.log("hi"); >>> 여기 적은 것을 실행하게 하려면 말이다. 
    } else if ("10" === "10") {
        console.log("lalala");
    } else {
        console.log("ho"); >>> 단, 참이 아니면 이건 else 블럭으로 간다.
    }
    또한 else if를 통해서 더 많은 다른 조건을 가질 수 있다.

    이것뿐아니라, 피연산자라는 것도 있다. 다른 조건들을 합치게 하는 것인데, 
    if(10-4)를 하는거 대신에 

    if(20>5 && "young" === "young"){    -------> && 이것이 and 이다.
        console.log('yes');
    } else{
        console.log("no");
    }

    and를 이용해서 yes를 얻고 싶다면 위에 두가지 조건이 모두 참일때 yes가 된다. 반대로 둘 중에 하나라도 거짓이라면 이건 else에 있는 것이 실행된다.

    그리고 and와는 다른 ||(or)도 있다. 

    if(20>5 || "young" === "young"){    -------> || 이것이 or 이다.
        console.log('yes');
    } else{
        console.log("no");
    }

    or은 둘중 하나라도 참이면 if 문장이 실행되고, 둘다 거짓이라면 else 문장이 실행 된다.

    정리하자면,

    &&는
    true && true = true
    true && false = fales
    fales && true = false
    false && fales = fales

    ||는
    true || true = true
    ture || false = true
    false || ture = ture
    false || fales = false 

    기억하자!
*/

/*
    DOM if else Function practice

    const title = document.querySelector("#title");

    const BASE_COLOR = "rgb(52, 73, 94)";
    const OTHER_COLOR = "#7f8c8d";

    function handleClick() {
        const currentColor = title.style.color;
        if (currentColor === BASE_COLOR) {
            title.style.color = OTHER_COLOR;
        } else {
            title.style.color = BASE_COLOR;
        }
    }

    function init() {
        title.style.color = BASE_COLOR;
        title.addEventListener("click", handleClick);
    }

    init()

    두개의 변수를 이용해서 우리는 클릭 시 참 일시, BASE_COLOR에서 OTHER_COLOR로 변화 되게 되고, 다시 클릭 시 OTHER_COLOR에서 BASE_COLOR로 변화 되게 된다. 

    이 조건을 충족 시키는 Function(함수)는 handleClick()이다.

    그리고 클릭 동작을 인식하는 함수는 init()이다. 

    정리하자면 사용자가 타이틀을 클릭 할 시 먼저 init()함수로 들어가서 handleClick을 인식하고 그 함수로 가서 함수 속 조건들을 검토하고 실행하게 된다.

    좀 더 재밌는걸 해보자면, 

    function handleOffline() {
        console.log("Off");
    }

    function handleOnline() {
        console.log("ON");
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    해주게 된다면 연결 되어있던 인터넷을 끄면, Off가 메세지로 나오고, 다시 켜면 ON으로 나오게 된다.
*/

/*
    DOM - if else - Function practce part Two

    우리는 위에서 많은 작업을 했지만, 일반적으로 추천하기 좋은 작업은 아니였다. 
    Javascript에서 css를 가지고 작업을 했는데, 이것은 보편적이지 않는 작업이다.
    즉, HTML에서는 HTML만 작업하고 CSS에선 CSS 작업을 하며, Javascript에선 로직을 처리하면 되는 것이다.

    const title = document.querySelector("#title");

    const CLICKED_CLASS = "clicked";

    function handleClick() {
        const hasClass = title.classList.contans(CLICKED_CLASS);
        if (hasClass) {
            title.classList.remove(CLICKED_CLASS);
        } else {
            title.classList.add(CLICKED_CLASS);
        }
    }

    function init() {
        title.addEventListener("click", handleClick);
    }

    init();

    우리는 위에서 작성한 contans 라는 객체를 이용해서 value가 존재하는지 체크한다. 446번째 줄에 위치하고있다.
    446번째 줄은 우리에게 참/거짓을 구별짓게 하는 토대가 될 것이고 이걸 이용해 조건문을 작성해준다.
    즉, title.classList가 click을 포함하고 있으면 조건은 참이 될 것이다.

    그럼 title.classList.remove(CLICKED_CLASS); 를 실행하게 된다. 

    만약 CLICKED_CLASS를 가지고 있지 않다면,
    title.classList.add(CLICKED_CLASS); 될 것이다.

    즉, 우리는 이걸 통해 className 하나도 두가지 일을 한다는걸 알 수 있다. classlist.contans를 통해서 말이다. 

    그런데 우리는 저 긴 작업을 하기에 게이른 프로그래머다! 더 쉽고 더 편하게 작업을 하고 싶다!! 간단한 방법을 찾고 싶다!

    toggle라는 함수를 이용해서 우리가 했던 일들을 간단하게 할 수 있다.
    간단하게 요약 한다고 보면 되겟다.

    const title = document.querySelector("#title");

    const CLICKED_CLASS = "clicked";

    function handleClick() {
        title.classList.toggle(CLICKED_CLASS);
    }

    function init() {
        title.addEventListener("click", handleClick);
    }

    init();

    다시 한번 강조하지만, title.classList.toggle(CLICKED_CLASS);는 클라스가 거기 있는지 체크해서 거기 있으면 add 아니면 remove를 해주는 걸 말한다.

    그럼 여기서 알수있는건 우리가 그전에 만들었던 함수 처럼 toggle도 미리 만들어져있는 것을 우리가 사용한다는걸 알 수 있다.
*/

/*이건 js-clock이라는 class 이름을 찾아 줄것이다. 그리고 clockTitle의 변수는 clockContainer의 자식을 querySelector를 통해서 얻게 된다.*/
const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

//현재 시간을 가져오는 함수
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    //html에 작성했던 text에 각각 시간과 분을 대입해준다.
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    /* 정리하자면, 만약 시가 10보다 작으면, 0과 시를 리턴하고(`0${hours}`), 그렇지 않으면 0을 떼고 시만 리턴한다(: hours).
    hours < 10 ? `0${hours}` : hours (10보다 작으면, ? 물음표는 if 처럼 동작함 즉, 질문이다. 질문이 참이라면 `0${hours}` 부분을 실행하고, 그게 거짓이라면 : hours 동작 된다.)
    그래서 작은 if 라고도 한다.
    */
}

function init(){
    getTime();
    setInterval(getTime, 1000); //setInterval 이 함수는 두 인자값(argument)을 받는데, 첫번째 인자는 실행 할 함수를, 두번째 인자는 실행할 시간 간격이다.
}
//init() 함수의 동작은 결국 시간을 실시간으로 움직이게 보여주게 된다. setInterval 함수에서 얻은 시간을 갖고 시계 부분 html을 변경 시키기 때문이다.
init();