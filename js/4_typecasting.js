/**
 *  형변환
 *      - 타입 변환
 *      - 종류
 *          - 명시적 형변환
 *              - 직접 코드로 표현 -> 타입명의 함수를 활용
 *              - String(변수), Number(변수), ...
 *          - 암묵적 형변환
 */

// A. 명시적 형변환
// 데이터
let a = 10;
console.log(a, typeof a);

// 1. 결과 문자열 변환
// 변환처리 : 일반타입 => 문자열 변환
console.log(String(a), typeof String(a));
console.log(String(false), typeof String(false));

// 2. 결과 수치형 변환
// 수치형 => 수치형
console.log(Number(a), typeof Number(a));
// js의 변수는 타입 추론형으로서, 값이 할당(세팅 혹은 참조)되면 타입이 결정된다.
a = "11";
// 문자열, 불리안형 => 수치형
console.log(Number(a), typeof Number(a));
// true => 1, false => 0
console.log(Number(true), typeof Number(true));
// 변환이 안되는 값인 경우 => 값이 부정확함
console.log(Number("1 "), typeof Number("1 ")); // 공백을 제거해줌
console.log(Number("ABC"), typeof Number("ABC")); // 처리불가(NaN : Not a Number)

// 3. NaN 체크
console.log(isNaN(Number("1 "))); // 수치형이므로 false
console.log(isNaN("AB")); // 입력 시 입력값이 수치인지 아닌지 체크하는 함수

// 4. 불리안 변환 -> false 상황을 기억하면 편함
// 조건식에서 false로 해석되는 값 : 0|0.0, "", NaN, null, undefined
console.log(Boolean(0), Boolean(""), Boolean(NaN), Boolean(null), Boolean(undefined));
// 수치값 중 0|0.0은 false, 나머지는 true
console.log(Boolean(1), Boolean(-1), Boolean(0.0), Boolean("  "));

// B. 암묵적 형변환
// + 연산자
console.log(1 + 2);
// + 연산 시 하나라도 문자열이 존재하면 다 문자열이 됨
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
// + 연산자가 아니라면 ? -> 수치로 변환되는 것이 우선순위로 처리됨
// 문자열이 수치로 자동 변환
console.log(1 - 2);
console.log("1" - 2);
console.log(1 - "2");
console.log("1" - "2");