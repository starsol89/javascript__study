const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
    const image = new Image();
    // 이 코딩에서 + 1을 해주는 이유는 Math.radom() 함수가 0을 줄 수 있기 때문이다.
    // 즉, Math.radom() 함수가 0을 주면 + 1을 넣어서 첫번째 사진이 될 것이고, 그 다음 1이 주어지면 2가 되어서 두번째 사진이 될 것이다.
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage"); // 우리는 이미지 관련 클래스(bgImage)를 만들어줬다. 이 곳에 있는 이미지를 css에서 작업해서 좀 더 보기 좋고 활용하기 좋게 코딩 해 줄 수 있다.
    body.prepend(image); // prepend는 선택한 요소 앞에 콘텐츠를 추가 하는 메서드 이며, 우린 이미지 앞에 먼저 작성한 텍스트들을 놓았다.
}

function genRandom() {
    // number 변수에서 랜덤으로 번호를 생성하는걸 담아준다. 
    // 작성한 코드와 같이 javascript에서는 math(수학)이란 모듈이 있으며, 그걸 이용해서 랜덤한 숫자를 만들어준다.
    // Math.floor 이란 랜덤한 숫자를 생성 했을때 소수점도 같이 나오는데 그 소수점을 버려주는 역활을 하고 Math.random() * 4은 우리가 사용할 이미지 4개를 랜덤으로 가져온다.
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();