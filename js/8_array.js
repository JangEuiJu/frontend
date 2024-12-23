/**
 *  배열 (아주 중요!)
 *      - 자주 사용, react에서 많이 사용됨 (통신 결과)
 *      - 데이터 유형 (타입 기준)
 *          - 단일형
 *              - number, string, boolean, ...
 *              - 값 1개가 타입 1개를 대변함
 *          - 연속형 (혹은 컬렉션)
 *              - n개의 값이 모여서 구성된 타입
 *              - (*)배열 (특수한 목적을 가진 객체)
 *                  - []
 *                  - ex) : [1, 2, 3, 4, 5]
 *                  - 각 데이터의 의미가 애매함 -> 순서 존재 -> 인덱스 (0, 1, 2, ...)
 *              - 객체
 *                  - {}
 *                  - ex) : {name:"온라인", age:20, ...}
 *                  - 각 데이터에 의미가 표현됨 -> name, age 등 -> 키, 순서 x
 */

// 배열 정의
let arr = [10, 20, 30, 40, 50];
console.log(arr);

// 배열 데이터의 특정 구성원에 접근하여 값 추출 -> 인덱싱
// 배열명[인덱스]
// 값이 30인 멤버를 접근하여 데이터 30을 추출하시오
console.log(arr[2]);

// 반복문을 이용하여 모든 넴버의 값을 출력하시오
// 배열길이 체크
console.log(arr.length);
// 기본 for문
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// for in
// 배열의 길이를 몰라도, 존재하는만큼 추출하여 처리
for (const i in arr) { // 배열에서 인덱스를 하나씩 획득 0, 1, 2, ..
    console.log( arr[i] ); 
}
// for of
// 배열의 길이를 몰라도, 데이터를 추출해서 반환
for (const element of arr) {
    console.log( element );
}

// (*)배열을 위한 반복문
// 배열.내부함수();
// forEach() 배열의 멤버를 접근해서 하나씩 추출하여 지정한 함수로 던져주는 함수
// 용도 : 배열의 구성원을 하나씩 추출하여 뭔가 작업하기 위함
arr.forEach( (item, index) => {
    // item은 배열의 멤버(값)
    // index는 배열의 각 멤버의 순번
    console.log('->', item, index);
})

// 여기서부터는 다른 목적을 가진다
// map
// 배열의 멤버를 하나씩 꺼내서 뭔가 일괄작업 처리한다면 (모두 3배로 값 증가)
// 공통 : 서버로부터 데이터를 받아서 차트 구성, 게시판 구성,... 유용하게 사용될 수 있음
let arr2 = [10, 20, 30, 40, 50];
function mulx3 (data) {
    // 데이터가 1개 전달되면, 3배로 증가시켜서 반환
    console.log(`콜백함수 호출 원본 = ${data} 변경값 = ${data*3}`);
    return data * 3;
}
// mulx3라는 함수를 map() 함수에 인자로 전달 -> 함수의 매개변수로 함수를 전달
// 이때 전달된 함수 -> 콜백함수
let results = arr2.map(mulx3);
console.log(arr2, results);
// 실습
// 코드를 간결하게 구성 => 화살표 함수나 익명함수로 직접 함수를 인자로 전달
// let results2 = arr2.map(function(data) {
//      return data*3;
// });
let results2 = arr2.map(data => data * 3);
console.log(arr2, results);

// filter
// 배열의 멤버를 하나씩 꺼내서 조건에 맞는 멤버만 추린다
// 배열 데이터 arr3에서 값이 30 이상인 데이터만 추출하시오 => 배열로 반환
let arr3 = [10, 20, 30, 40, 51];
function cb (data) {
    // data는 arr3 배열에서 하나씩 꺼내서 cb 호출할 때 전달하는 데이터
    // 필터링 : 30 이상은 참, 아니면 거짓 => 조건식
    return data >= 30;
}
let results3 = arr3.filter(cb);
console.log(arr3, results3);
// 실습
// 1. 위의 표현을 화살표 함수로 변경하여 => filter(화살표함수 형태)로 구현하시오
let results4 = arr3.filter(data => data >= 30);
console.log(arr3, results4);
// 2. 필터링 대상은 짝수값만 나오는 배열로 추출하시오
// 값 % 2 => 0|1
let results5 = arr3.filter(data => data % 2 === 0);
console.log(arr3, results5);

// reduce
// 배열의 멤버를 하나씩 꺼내서 누적합, 누적곱, 등등 일괄 연산 처리한다
// 누적합
// pv : 이전값, cv : 현재값
// 통계
let arr4 = [10, 20, 30, 40, 51];
console.log(arr4.reduce( (pv, cv) => pv + cv) )