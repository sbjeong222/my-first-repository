function BlackDog() {
    this.name = "흰둥이";
    return {
        name: "검둥이",
        bark: function () {
            console.log(this.name + ": 멍멍"); //일반 함수는 자신이 종속된 객체를 this로 가리킨다. 현재 리턴 이후의 {} 에 종속됨.
        },
    };
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
    this.name = "흰둥이";
    return {
        name: "검둥이",
        bark: () => {
            console.log(this.name + ": 왈왈"); //화살표 함수는 자신이 종속된 인스턴스를 가리킴.
        },
    };
}

const whiteDog = new WhiteDog();
whiteDog.bark();

