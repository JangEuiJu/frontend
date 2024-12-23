/**
 *  반복문
 *      - for(문) : 지정된 횟수를 반복 (끝이 정해져 있다)
 *      - while(문) : 언제 끝날 지 모르고 반복 (무한 루프)
 *          - 0 ~ 무한대
 *      - do ~ while(문) : 언제 끝날 지 모르고 반복 (무한루프)
 *          - 1 ~ 무한대
 *      - 기타
 *          - 배열, 객체 확인 후
 *          - 배열, 객체 등 특정 요소의 반복 처리 함수
 *      - 목적
 *          - 유사한 작업을 반복적으로 처리해야 한다면
 *          - 배열 등 컬렉션 데이터 쪽에서 멤버들을 하나씩 접근해서 처리할 때
 *          - ex) 구구단, 데이터를 일괄적으로 2배 상승 처리
 * 
 */

// 1. 기본 for문
// 언어 초기부터 지원, 현재는 활용 빈도가 떨어짐
// step1 : let i = 0
// step2 : i < 5 => 참이면 수행문 수행, 거짓이면 종료
// step3 : i++
// step2 ~ step3 반복
for (let i = 0; i < 5; i++){
    console.log(`카운트 : ${i}`);
}

// 2. 중첩 반복문
for (let i = 0; i < 2; i++){
    for (let j = 0; j < 2; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
// 실습 : 구구단 중 3단, 4단을 출력
/*
    출력결과
    3 x 1 = 3
    3 x 2 = 3
    ...
    4 x 9 = 36
*/
for (let i = 3; i < 5; i++){
    for (let j = 1; j < 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
// 실습 : 구구단 중 3단, 5단을 출력
// 조건의 비교값 증가 혹은 비교식 변경, 값 증가를 변경 1->2
for (let i = 3; i < 6; i+=2){
    for (let j = 1; j < 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
for (let i = 3; i < 6; i++){
    if(i != 4) { // 4단이 아니면 수행
        for (let j = 1; j < 10; j++){
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }
}
for (let i = 3; i < 6; i++){
    if(i == 4) {
        // continue를 만나면 더 이상 코드를 진행하지 말고
        // 반복문 맨 위로 가서 다음 단계 (값 업데이트 = i++)로 진입
        continue;
    }
    for (let j = 1; j < 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
// 실습 : 4단만 출력 후 반복문 종료(탈출 -> break)
// break, continue는 나를 감싸고 있는 가장 가까운 반복문을 탈출, 점프함
for (let i = 3; i < 6; i++){
    if(i == 4) { 
        for (let j = 1; j < 10; j++){
            console.log(`${i} x ${j} = ${i*j}`);
        }
        break; // 4단에서 바로 종료, 5단 체크 안함
    }
}

// 3. for ~ in => object(객체)를 대상으로 반복문 처리
// JS의 객체는 {} 이다 <-> JSON으로 대체됨 (데이터 관점)
const person = {
    name: "js",
    age : 10
};
// in 뒤에 있는 객체를 접근해서 멤버들을 하나씩 꺼내어 key(name, age,..)를 추출
for (const key in person) {
    // 객체에서 데이터 추출법 = 객체명[키값]
    console.log( `${key} ${person[key]}`);
}

// 4. for ~ of -> of뒤에 데이터는 배열 : [] <= 타겟
// 배열의 멤버로 직접 순서대로 추출
const level = [1, 12, 3];
// 여러 데이터를 묶어서 표현하는 방법 => 배열(array)
// 배열은 순서를 가지고 있다. 0번째, 1번째, 2번째 ,.. <= 인덱스
for (const element of level) {
    console.log(element)
}
for (const idx in level) {
    // 배열의 멤버 추출 => 배열명[인덱스값]
    // idx : 배열의 인덱스 (0, 1, 2, ...)
    console.log(idx, level[idx])
}

// 5. 배열에서 체크
// array.forEach(element => {});

// 6. await => 비동기 처리시 사용하는 키워드, 차후 체크
// for await (const element of object) {}

// 7. while문
// 기본형
// 0 ~ 무한대로 반복 => 이런 요구사항이 분석되면 도입
let cnt = 0;
while(true) {
    // statements
    console.log(cnt++);
    // 중간에 반드시 탈출 코드가 필요함 -> break
    if(cnt > 3) break;
}
cnt = 0;
while (cnt <= 3) { // 무한루프
    // statements
    console.log( cnt++ );     
}
// continue, break 사용
cnt = 0;
while (true) {
    cnt++;
    if(cnt < 3) {
        continue;
    }
    console.log( cnt );
    if (cnt > 3) {
        break;
    }
}
// 출력값은? 3 4

// 8. do ~ while
// 1 ~ 무한대
cnt = 0;
do {
    console.log( cnt );
    cnt++;
} while (cnt < 3);

// 나머지 반복문 => 배열, 비동기 상황에서 처리