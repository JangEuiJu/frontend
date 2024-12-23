/**
 *  CSS Module 전용
 *      - index.js라는 이름은 원래 특정 디렉토리의 대표명인데 편의상 사용
 */ 

const myStyle = {
    styleDiv:{  // css의 클래스와 동일한 의미
        // 내부 멤버가 CSS의 의미를 가진다
        backgroundColor:'lightgreen',   // 배경색
        padding: 5,                     // 내부 여백
        margin: 5,                      // 외부 여백
    },
    styleMargin:{
        margin:10,
    }
    // ...
}

export default myStyle;