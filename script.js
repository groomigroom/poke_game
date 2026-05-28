//타입들 변수 선언
let types = ["normal", "fighting", "flying", "poison", "land", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "esper", "ice", "dragon", "evil", "fairy"];
/*
let normal = 1; //노말
let fighting = 2; //격투
let flying = 3; //비행
let poison = 4; //독
let land = 5; //땅
let rock = 6; //바위
let bug = 7; //벌레
let ghost = 8; //고스트
let steel = 9; //강철
let fire = 10; //불꽃
let water = 11; //물
let grass = 12; //풀
let electric = 13; //전기
let esper = 14; //에스퍼
let ice = 15; //얼음
let dragon = 16; //드래곤
let evil = 17; //악
let fairy = 18; //페어리
*/


//document.getElementById("result").innerText = "선택된 거: " + selectedRadio.value;
const MyTypeL = function getMyType() {

    const MyType = document.querySelector('input[name="type"]:checked');

    if (MyType) {
        console.log(MyType.value);
        document.querySelector(".mt_p").innerText = "선택한 타입은: " + MyType.value;
    }
    else {
        alert("타입 선택");
    }

    return MyType.value
}

if (MyTypeL == "노말") {
    console.log(types[0]);
}

/*
// types 배열 예시
const types = ["노말 타입 데이터", "격투 타입 데이터"];

// 1. 변수명 MyTypeL에 익명 함수를 할당합니다.
const MyTypeL = function () { 

    const MyType = document.querySelector('input[name="type"]:checked');

    if (MyType) {
        console.log(MyType.value);
        document.querySelector(".mt_p").innerText = "선택한 타입은: " + MyType.value;
        return MyType.value; // 체크된 값(예: "노말")을 바깥으로 보냅니다.
    }
    else {
        alert("타입 선택");
        return null; // 선택 안 되었을 때는 null 반환
    }
}

// 2. HTML 버튼이 클릭되었을 때 실행할 '진짜 실행용 함수'를 만듭니다.
function startCheck() {
    // 함수를 실행하고 그 결과값("노말")을 result 변수에 담습니다.
    const result = MyTypeL(); 
    
    // 이제 함수 밖에서 질문하신 모양 그대로 비교할 수 있습니다!
    if (result == "노말") {
        console.log(types[0]);
    } else if (result == "격투") {
        console.log(types[1]);
    }
}
코드를 사용할 때는 주의가 필요합니다.2. HTML 수정HTML에서는 이제 getMyType()이 아니라, 위에서 새로 만든 최종 실행 버튼인 startCheck()를 호출해야 에러가 나지 않습니다.html<!-- 변경 전 -->
<button type="button" onclick="getMyType()">버튼</button>

<!-- 변경 후 -->
<button type="button" onclick="startCheck()">버튼</button>

*/

/*
let one = "user";
let two = "com";

//상성 계산 ==> 일반 4분의 1

let user = one;
let com = two;

//노말 타입일 때 상성
if (user == types[0]) {
    if (com == ghost) {
        //고스트는 0
    }
    else if (com == rock || com == steel) {
        //바위 강철은 8분의 1
    }
    else {
        //데미지 4분의 1
    }
}

//격투 타입일 때 생성
else if (user == types[1]) {
    if (com == normal || com == ice || com == rock) {
        //노말, 얼음, 바위에 2분의 1
    }
    else if (com == poison || com == bug || com == flying || com == esper) {
        //독, 벌레, 비행, 에스퍼 8분의 1
    }
    else if (com == ghost) {
        //고스트는 0
    }
    else {//나머지는 4분의 1

    }
}

//비행 타입일 때 상성
else if (user == flying) {
    if (com == grass || com == fighting || com == bug) {
        //풀, 격투, 벌레에 2분의 1
    }
    else if (com == electric || com == rock) {
        //전기, 바위에 8분의 1
    }
    else {
        //나머지 4분의 1
    }
}

//독 타입일 때 상성
else if (user == poison) { }
//풀, 벌레에 2분의 1
//독, 땅, 바위, 고스트 8분의 1
//나머지 4분의 1

//땅 타입일 때 상성

//불꽃, 전기, 독, 바위 2분의 1
//풀, 벌레 8분의 1
//비행에 0

//바위 타입일 때 상성

//불꽃, 얼음, 비행, 벌레 2분의 1
//격투, 땅 8분의 1

*/




