/**
 *  객체 생성 방법 중 es next 문법에 적용되는 class 기법
 *      - class라는 문법 형실으로 객체를 생성, 구현하는데 목적
 */

class Food {
    // 생성자 => 고정이름, 객체 생성, 멤버 초기화
    constructor (name, age){
        // 멤버 => this. 으로 접근
        // 멤버변수(데이터)를 생성, 초기화
        this.name = name;
        this.age = age;
    }
    // 멤버메소드 (함수), 개정 문법에서는 생략(function)
    info (){
        console.log( `${this.name} ${this.age}`)
    }
}
const obj = new Food("JS", 33);
console.log(obj); // Food {} : Food 객체
// 멤버 접근 => 객체명.멤버
console.log( obj.name );
obj.info();

// 상속, 재정의 => 생략 => 자바, 스프링부트에서 확인