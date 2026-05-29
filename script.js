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

function sangsung(one_type, two_type, two_hp) {
    //노말 타입일 때 상성
    if (one_type == types[0]) {
        if (two_type == types[7]) {
            //고스트 데미지 0
            console.log("데미지가 없습니다.");
            two_hp -= 0;
            return two_hp;
        }
        else if (two_type == types[5] || two_type == types[8]) {
            //바위 강철은 8분의 1
            console.log("데미지 8분의 1");
            two_hp -= 1;
            return two_hp;
        }
        else {
            //나머지는 일반 데미지
            console.log("데미지 4분의 1");
            two_hp -= 2;
            return two_hp;
        }
    }

    //격투 타입일 때 생성
    else if (one_type == types[1]) {
        if (two_type == types[0] || two_type == types[14] || two_type == types[5]) {
            //노말, 얼음, 바위에 2분의 1
            console.log("데미지 2분의 1");
            two_hp -= 4;
            return two_hp;
        }
        else if (two_type == types[3] || two_type == types[6] || two_type == types[2] || two_type == types[13]) {
            //독, 벌레, 비행, 에스퍼 8분의 1
            console.log("데미지 8분의 1");
            two_hp -= 1;
            return two_hp;
        }
        else if (two_type == types[7]) {
            //고스트는 0
            console.log("데미지가 없습니다.");
            two_hp -= 0;
            return two_hp;
        }
        else {
            //나머지는 4분의 1
            console.log("데미지 4분의 1");
            two_hp -= 2;
            return two_hp;
        }
    }

    //비행 타입일 때 상성
    //확인하기 작동 잘하는지
    else if (one_type == types[2]) {
        if (two_type == types[11] || two_type == types[1] || two_type == types[6]) {
            //풀, 격투, 벌레에 2분의 1
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[12] || two_type == types[5]) {
            //전기, 바위에 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //독 타입일 때 상성
    else if (one_type == types[3]) {
        if (two_type == types[11] || two_type == types[6]) {
            //풀, 벌레에 2분의 1
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[3] || two_type == types[4] || two_type == types[5] || two_type == types[7]) {
            //독, 땅, 바위, 고스트 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //땅 타입일 때 상성
    else if (one_type == types[4]) {
        if (two_type == types[9] || two_type == types[12] || two_type == types[3] || two_type == types[5]) {
            //불꽃, 전기, 독, 바위 2분의 1
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[11] || two_type == types[6]) {
            //풀, 벌레 8분의 1
            console.log("데미지 8분의 1");
        }
        else if (two_type == types[2]) {
            //비행에 0
            console.log("데미지가 없습니다.");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //바위 타입일 때 상성
    else if (one_type == types[5]) {
        if (two_type == types[9] || two_type == types[14] || two_type == types[2] || two_type == types[6]) {
            //불꽃, 얼음, 비행, 벌레 2분의 1
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[1] || two_type == types[4]) {
            //격투, 땅 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //벌레 타입일 때 상성
    else if (one_type == types[6]) {
        if (two_type == types[9] || two_type == types[1] || two_type == types[3] || two_type == types[2] || two_type == types[7] || two_type == types[8] || two_type == types[17]) {
            //불꽃, 격투, 풀, 비행, 고스트, 강철, 페어리 8분의 1
            console.log("데미지 8분의 1");
        }
        else if (two_type == types[11] || two_type == types[13] || two_type == types[16]) {
            //풀, 에스퍼, 악 2분의 1
            console.log("데미지 2분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //고스트 타입일 때 상성
    else if (one_type == types[7]) {
        if (two_type == types[0]) {
            //노말 0배
            console.log("데미지가 없습니다.");
        }
        else if (two_type == types[13] || two_type == types[7]) {
            //에스퍼, 고스트 2분의 1
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[16]) {
            //악 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //강철 타입일 때 상성
    else if (one_type == types[8]) {
        if (two_type == types[9] || two_type == types[10] || two_type == types[12] || two_type == types[8]) {
            //8분의 1 불꽃, 물, 전기, 강철
            console.log("데미지 8분의 1");
        }
        else if (two_type == types[14] || two_type == types[6] || two_type == types[17]) {
            //2분의 1 얼음, 벌레, 페어리
            console.log("데미지 2분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //불꽃 타입일 때 상성
    else if (one_type == types[9]) {
        if (two_type == types[11] || two_type == types[14] || two_type == types[6] || two_type == types[8]) {
            //2분의 1 풀, 얼음, 벌레, 강철
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[9] || two_type == types[10] || two_type == types[5] || two_type == types[15]) {
            //불꽃, 물, 바위, 드래곤 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //물 타입일 때 상성
    else if (one_type == types[10]) {
        if (two_type == types[9] || two_type == types[4] || two_type == types[5]) {
            //불꽃, 땅, 바위 2분의 1
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[10] || two_type == types[11] || two_type == types[15]) {
            //물, 풀, 드래곤 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //풀 타입일 때 상성
    else if (one_type == types[11]) {
        if (two_type == types[10] || two_type == types[4] || two_type == types[5]) {
            //물, 땅, 바위 2분의 1
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[9] || two_type == types[11] || two_type == types[3] || two_type == types[2] || two_type == types[6] || two_type == types[15] || two_type == types[8]) {
            //불꽃, 풀, 독, 비행, 벌레, 드래곤, 강철 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //전기 타입일 때 상성
    else if (one_type == types[12]) {
        if (two_type == types[10] || two_type == types[2]) {
            //2분의 1 물, 비행
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[11] || two_type == types[12] || two_type == types[15]) {
            //풀, 전기, 드래곤 8분의 1
            console.log("데미지 8분의 1");
        }
        else if (two_type == types[4]) {
            //땅 데미지 0
            console.log("데미지가 없습니다.");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //에스퍼 타입일 때 상성
    else if (one_type == types[13]) {
        if (two_type == types[1] || two_type == types[3]) {
            //격투, 독 2분의 1
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[13]) {
            //에스퍼 8분의 1
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //얼음 타입일 때 상성
    else if (one_type == types[14]) {
        if (two_type == types[11] || two_type == types[4] || two_type == types[2] || two_type == types[15]) {
            //2분의 1 풀, 땅, 비행, 드래곤
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[10] || two_type == types[14]) {
            //8분의 1 물, 얼음
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //드래곤 타입일 때 상성
    else if (one_type == types[15]) {
        if (two_type == types[15]) {
            //2분의 1 드래곤
            console.log("데미지 2분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //악 타입일 때 상성
    else if (one_type == types[16]) {
        if (two_type == types[7] || two_type == types[13]) {
            //2분의 1 고스트, 에스퍼
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[1] || two_type == types[16] || two_type == types[17]) {
            //8분의 1 격투, 악, 페어리
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }

    //페어리 타입일 때 상성
    else {
        if (two_type == types[1] || two_type == types[15] || two_type == types[16]) {
            //2분의 1 격투, 드래곤, 악
            console.log("데미지 2분의 1");
        }
        else if (two_type == types[3] || two_type == types[8] || two_type == types[9]) {
            //8분의 1 독, 강철, 불꽃
            console.log("데미지 8분의 1");
        }
        else {
            //나머지 4분의 1
            console.log("데미지 4분의 1");
        }
    }
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
        //페어리
        one_type = types[17];
    }
    console.log(one_type);


    //let two_type = types[Math.floor(Math.random() * types.length)];


    let two_type = types[7]
    console.log(two_type);

    let one_hp = 8;
    let two_hp = 8;

    let one_att = sangsung(one_type, two_type, two_hp);
    console.log(one_att);
    two_hp = one_att;
    sangsung(two_type, one_type);


}


/*
let one = "user";
let two = "com";

//상성 계산 ==> 일반 4분의 1

let user = one;
let com = two;


*/




