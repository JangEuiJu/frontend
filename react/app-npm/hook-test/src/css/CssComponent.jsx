/**
 *  여러 유형의 css 적용 스타일 컴포넌트
 */

// 스타일 2 사용을 위한 모듈 가져오기
// import myStyle from "./index";
import myStyle from "."; // 이름이 index이면 .으로 표현 가능

// 스타일 3 : css styled-componenets 방식
import styled from 'styled-components';

// 스타일 4 css 작성하는 방식을 새로운 문법으로 구성하는 스타일
// scss, sass
import './styles.scss';

// Title이라는 컴포넌트를 생성 (스타일을 가지고 있음)
const Title = styled.h2`
    color:red;
`

// Button이라는 컴포넌트를 생성 (스타일을 가지고 있음), 문법만 다름
const Button = styled.button ({
    color:'grey',

});

export default function CssComponent() {
    return(
        <div>
            <h3>CSS 적용 테스트</h3>
            <div style={{ backgroundColor:'lightgrey', 
                          margin:'1em', padding:'1em'}}>
                스타일 1, 직접(inline) CSS 적용
            </div>
            <div style={ myStyle.styleDiv }>
                스타일 2, CSS Modules 적용 방식
                CSS를 별도의 JS로 구성하여 스타일 적용
            </div>
            <div>
                <Title>스타일 3, css styled-components 방식</Title>
                <Button>styled button</Button>
            </div>
            <div className="title">
                스타일 4, scss/sass 사용
            </div>
        </div>
    );
}