/**
 * 커스텀 컴포넌트
 * 숫자만 입력받는 입력 요소 구성
 * <input type='number' ... />  <= 모바일에서 숫자 키패드로 등장
 * PC 버전에서 사용시 숫자만 입력되게 구성
 */

// [1. 모듈 가져오기]
import React, { Component } from "react";

// [2. 커스텀 컴포넌트 구현 ((*)객체형 | 함수형)]
class MyInput extends Component {
    constructor(props){
        super(props);
        // 4. 상태변수 생성
        this.state = {
            inputValue:'' // 사용자 입력값을 담을 변수
        }
    }
    // 3. 컴포넌트의 커스텀 멤버 함수
    onChangeHandlerMember (evt) {
        let ori_text = evt.target.value;
        console.log('입력', ori_text);
        // 요구사항 : 숫자만 입력받는 컴포넌트
        // 입력값 => 정규식(데이터 전처리) => 수치만 추출

        // 정규식 적용하여 필터링
        // 문자열.replace(대상, 대체문자열) : 특정 문자열의 특정 표현을 지정한 형식으로 대체
        // 숫자가 아닌 문자를 모두 특정해서 -> '' 문자열로 대체
        /*
            정규식
            - /정규식/g : 앞뒤 마크는 /, /g
            - [문자등 정규식] : 문자 1개를 표현
            - [0-9] : 0,1,2,...,9까지 표현(숫자 중 10진수 표현)
            - [^0-9] : 0,1,..,9를 제외한 모든 문자 : 숫자를 제외한 모든문자
            - 한글 => [ㄱ-ㅎㅏ-ㅣ가-힣]
        */
        // replace()는 모조리 다 찾아서 바꿔라
        const value = ori_text.replace(/[^0-9]/g , '') // 수치만획득
        console.log( value );

        // 6. 상태변수 업데이트 -> ... -> render() 호출 -> ... -> 화면 갱신
        this.setState({inputValue:value});
    }
    // 9. 전송 처리 메소드(함수) 구현
    onSubmitHandler(evt){
        // 전송 이벤트 무효화
        evt.preventDefault();
        // 확인
        console.log('전송', this.state.inputValue);
        // 서버와 통신 (생략)
        // 입력창 초기화 -> 화면 갱신
        this.setState({inputValue:''});
    }
    render(){
        // 2. 이벤트 함수
        // evt : 이벤트 객체가 발생하면 전달됨
        // const onChangeHandler = (evt) => {
        //     // 멤버접근 : this.멤버
        //     this.onChangeHandlerMember(evt)
        // };
        // render()내에 함수에서 멤버함수를 호출
        // 멤버 함수 내에서 this 접근 문제를 해결하기 위해
        const onChangeHandler = evt => this.onChangeHandlerMember(evt);
        const{inputValue} = this.state;

        // 8. 이벤트 등록
        const onSubmitHandler = evt => this.onSubmitHandler(evt);
        return(
            <div>
                {/* 전송 클릭 처리(이벤트), 숫자만 입력(이벤트) */}
                {/* 7. 전송 이벤트 등록, onSubmitHandler 구현 */}
                <form onSubmit={onSubmitHandler}>
                    {/* 1. 입력 -> 값이 변했다 -> onChange */}
                    {/* 5. 상태 변수 사용 value 속성 */}
                    <input type="text"
                           onChange={onChangeHandler}
                           value={inputValue}
                           placeholder="숫자만 입력"/>
                    <input type="submit" value="전송"/>
                </form>
            </div>
        );
    }
}

// [3. 커스텀 컴포넌트의 대표 모듈화]
export default MyInput;