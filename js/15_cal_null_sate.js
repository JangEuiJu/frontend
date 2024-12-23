/**
 *  코드 전개 시 (연산 등) 오류 코드가 발생할 수 있다 -> 방지 코드
 *      - ?.
 *          - 예시
 *              - 비동기처리 시 => 함수().then.then()...
 *              - 객체명.멤버.멤버 ...
 *          - 위와 같은 코드를 옵셔널 체이닝 코드라고 함. 여기서 앞부분에 오류가 발생하면 중단
 *          - ex) 함수()?.then()?.then() <= 안전하게 처리 가능 <= 중단되지 않게
 *      - ??
 *          - Nullish Coalescing
 *          - null일 때에 대한 방어코드 -> 선택적 값 선택 유도 => 잠재적 버그 해결
 */

// 샘플 1
const A = { // 객체 리터럴
    proc:{
        msg:{
            code:10
        },
        check:null
    }
}
// 요구사항 : code값 10을 출력하시오
// 객체형.멤버
console.log(A.proc.msg.code);
// 원래 데이터에는 check:{code:5}가 있었다고 가정
// console.log(A.proc.check.code); // 셧다운 발생 (console.log(1) 출력 x)
// 해결
// 예외처리
// (*)방어코드 작성
console.log(A?.proc?.check?.code); // undefined 발생 => 대응 가능함 by 조건문
console.log(1); // 이것이 출력되면 셧다운 x, 출력 안되면 중단된 것임 

// 샘플 2
// 서비스 => 환경 변수 => 선택적 값 부여 가능
// 서버 포트 지정 (커스텀 || 시스템설정 포트)
// 서버 포트 지정 (개발 || 시스템설정 포트)
// 처음으로 발견되는 참(조건식의 의미로 판단)값이 최종값
// false 상황 : 0, 0.0, '', null, NaN, undeifned
console.log('a' || 'hello'); // 조건식에서는 'a' 참 => 값으로 세팅
console.log('' || 'hello'); // 조건식에서는 '' 거짓 => 뒤에서 체크 => 'hello' 값이 존재 => 세팅
console.log(0 || 'hello'); // 조건식에서는 0 거짓 => 뒤에서 체크 => 'hello' 값이 존재 => 세팅
// 선택적 작용, 0 또한 false가 아닌 값으로 처리하고 싶음
// ??으로 해결
console.log(0 ?? 'hello');