/**
 * 자바스크립트 변수
 *  - 문법
 *      - 변수 선언
 *          - 키워드 변수명;
 *      - 변수 선언 및 초기화
 *          - 키워드 변수명 = 값;
 *  - 용도
 *      - 값을 담는 그릇 or 값을 가르키는 주소를 가진 그릇
 *      - 수치, 문자열, 불리안 등등 특정 타입의 데이터를 담는 그릇
 *  - 키워드
 *      - var
 *          - 초기부터 계속 사용
 *          - 버그적인 문제가 내제되어 있음
 *      - 표현 추가
 *          - 변수의 범위가 블록 스코프 ( { 여기에서만 유효 } )에서만 유효
 *          - let
 *              - 변수
 *          - const
 *              - 상수 : 값을 한 번 세팅하면 절대로 바꿀 수 없다
 *              - 상수명은 반드시 대문자 (_ 추가 사용)롤만 표현
 *              - 환경변수, 설정값, CONFIG 용도
 */

// 1. 상수
const PI = 3.14;
console.log(PI); // 콘솔(터미널) 출력 -> 코드가 잘 작동햇는지 결과를 확인
// 상수 값 수정 -> 오류 발생 -> 상수 값을 변경시도해서 오류
// Assignment to constant variable.
// PI = 3.144;
// console.log(PI);

// 2. 변수 (var or let)
// 스코프 관점 : 전역변수 (코드 전반에서 사용 가능)
// 타입 관점 : 수치형 -> 정수형 -> Number
var a = 1;
// const, var, typeof => 키워드, 특수 목적을 가지고 있음
console.log(a, typeof a); // typeof 변수의 타입을 조사
// 변수가 가지고 있는 데이터 변경 (다른 타입으로)
a = "hi";
console.log( a, typeof a)
/*
변수는 값을 언제든지 바꿀 수 있다
변수는 값을 들고 있는 것이 아니라 가르키고 있는 것(참조)
이런 유형의 언어 타입을 "타입 추론형"으로 부른다
변수의 타입은 값이 세팅될 때 결정된다
*/
// 스코프 체크
a = 1;
console.log(a, typeof a);
// if( 조건식:결과가 참(true)이면 {} 내부가 수행된다 ) {}
if(true) {
    // 여기는 무조건 작동함 (조건식의 결과가 참이므로)
    // a라는 변수가 전역과 지역사이에서 겹친다 
    // -> 변수명동일 -> 같은 변수로 취급 : var
    var a = 10; 
    var b = 11; // 지역(local)변수
    let c = 12; // let는 var의 버그적인 상황 해결
}
console.log( 'a=', a );
// b는 지역변수인데, 지역을 벗어나도 ( {} 밖에서 사용 ) 오류 없음 -> var
console.log( 'b=', b );
// 변수명이 다르면 문제가 없음(피해서 작성, var를 굳이 사용)
// console.log( 'c=', c ); // 에러 발생해야함 => let 추천!!
// 스코프 체크결론
// let를 키워드로 사용 => 각각의 범위 맞게 사용가능!!. 틀리면 오류남
// 변수명을 겹치지 않게 사용
// 전역변수, 지역변수 적절하게 사용

// 3. 변수 호이스팅
// -> 경우에 따라서는 잠재적 버그를 가지고 있음
// 호이스팅 : 증상/현상 -> 인터프린터가 코드 실행전에 함수, 변수, 
//           클레스등 최상위로 선언문을 배치하는 증상/현상
console.log( a2 );
var a2 = 10;
console.log( a2 );
/*
실제 작동 코드
var a2; // 선언만 진행 => 초기화 안함 => undefined
console.log( a2 ); // undefined
a2 = 10; // 10으로 초기화
console.log( a2 ); // 10
*/
// 호이스팅 해결 -> let or const
//console.log( a3 ); // 에러 발생 기대
// 변수 선언및 초기화 이후에 변수 사용!!
let a3 = 10;
console.log( a3 );