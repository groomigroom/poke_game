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
const MyTypeL = function () {

    const MyType = document.querySelector('input[name="type"]:checked');

    if (MyType) {
        console.log(MyType.value);
        document.querySelector(".mt_p").innerText = "선택한 타입은: " + MyType.value;
        return MyType.value;
    }
    else {
        alert("타입 선택");
        return null;
    }

    return MyType.value
}

function startCheck() {
    let one_type = "";
    const OneResult = MyTypeL();
    if (OneResult == "노말") {
        one_type = types[0];
    }
    else if (OneResult == "격투") {
        one_type = types[1];
    }
    else if (OneResult == "비행") {
        one_type = types[2];
    }
    else if (OneResult == "독") {
        one_type = types[3];
    }
    else if (OneResult == "땅") {
        one_type = types[4];
    }
    else if (OneResult == "바위") {
        one_type = types[5];
    }
    else if (OneResult == "벌레") {
        one_type = types[6];
    }
    else if (OneResult == "고스트") {
        one_type = types[7];
    }
    else if (OneResult == "강철") {
        one_type = types[8];
    }
    else if (OneResult == "불꽃") {
        one_type = types[9];
    }
    else if (OneResult == "물") {
        one_type = types[10];
    }
    else if (OneResult == "풀") {
        one_type = types[11];
    }
    else if (OneResult == "전기") {
        one_type = types[12];
    }
    else if (OneResult == "에스퍼") {
        one_type = types[13];
    }
    else if (OneResult == "얼음") {
        one_type = types[14];
    }
    else if (OneResult == "드래곤") {
        one_type = types[15];
    }
    else if (OneResult == "악") {
        one_type = types[16];
    }
    else {
        one_type = types[17];
    }
    console.log(one_type);

    /*
let two_type = types[Math.floor(Math.random() * types.length)];
*/
    let two_type = types[3]
    console.log(two_type);


    //노말 타입일 때 상성
    if (one_type == types[0]) {
        if (two_type == types[7]) {
            //고스트 데미지 0
            console.log("데미지가 없습니다.");
        }
        else if (two_type == types[5] || two_type == types[8]) {
            //바위 강철은 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            console.log("데미지 4분의 1");
        }
    }
}


/*
let one = "user";
let two = "com";

//상성 계산 ==> 일반 4분의 1

let user = one;
let com = two;



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




