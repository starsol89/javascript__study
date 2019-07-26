console.log('Im Working. Im JS. Im Beautiful. Im worth it');
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