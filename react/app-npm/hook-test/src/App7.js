/**
 * 환율 계산기
 *  - 환율 정보를 가져와서, 실시간 환전 계산, 수수료(환율우대)부분 제외
 *  - 요구사항
 *      - 화면 
 *          -  왼쪽 (USD, JPY, EUR) 선택 <-> 오른쪽 (KRW 고정) : select
 *          -  왼쪽 [입력창] = 오른쪽 [입력창]
 *      - 오퍼레이션
 *          - 통화 선택 -> 왼쪽입력창에 수치를 입력( 5 $ )
 *          -  -> 오른쪽 계산된 값 (5,000 원)
 *          - 정반대로 작동 가능함
 *      - 환율정보
 *          - 1분간격( 편의상 10분간격 )으로 통화 데이터 갱신
 *          - http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json 획득
 */


// [1. 모듈 가져오기]
import './App.css';
import {
    useState, 
    useEffect, 
    useMemo,        
    useCallback,    
    useRef,         
    useContext
} from "react";
import axios from 'axios'; // 통신모듈

// 전역변수
const EXCHANGE_URL = 'http://127.0.0.1:5500/react/app-npm/hook-test/dummy/exchange.json';

// 수치만 입력되게하는 필터링 함수
// 숫자가 아닌 문자를 특정하여 모두 빈값으로 대체
// 숫자 이외에 추가할 기호가 있다면 계속 추가하면 됨 => . 추가함
const nanFiltering = s => s.replace(/[^0-9.]/g,"")

// [2. 커스텀 컴포넌트 정의 ( 객체형 | (*)함수형 )]
function App ( props ) {
    // 상태변수 통화코드, 기본값 null (exchangeCode)
    // 상태변수 구현 -> exchangeCode
    const [exchangeCode, setexchangeCode] = useState(null);
    // 현재 선택한 통화 코드
    const [curExchangeCode, setCurExchangeCode] = useState("USD");
    // 환율 정보 -> 특정 주기로 갱신 -> 화면갱신에 영향 x => useRef
    // exchangeRate
    const exchangeRate = useRef(null);

    // 상태변수 : leftInput, rightInput
    // 값 변경 이벤트 처리 함수 등록 : onExchangeLeft, onExchangeRight
    const [leftInput, setLeftInput] = useState("");
    const [rightInput, setRightInput] = useState("");
    function onExchangeLeft(e) {
        // 1. 입력값 -> 필터링 -> 수치만 획득
        const v = nanFiltering(e.target.value);
        // 2. 왼쪽 입력창에 입력한 내용 업데이트
        setLeftInput(v);
        // 3. 환율 계산을 진행하여 오른쪽 내용 업데이트
        // (입력한달러값 * 달러대환율).toFixed(2) : 환전 값 계산하여 소수점 2자리까지 표기
        // 엔화 계산은 100을 보정 (현재 생략)
        setRightInput((parseFloat(v) * exchangeRate.current[curExchangeCode]).toFixed(2));
    }

    function onExchangeRight(e) {
        // 1. 입력값 -> 필터링 -> 수치만 획득
        const v = nanFiltering(e.target.value);
        // 2. 오른쪽 입력창에 입력한 내용 업데이트
        setRightInput(v);
        // 3. 환율 계산을 진행하여 오른쪽 내용 업데이트
        // (입력한원화값 / 달러대환율).toFixed(2) : 환전값 계산하여 소수점2 자리까지 표기
        //  엔화 계산은 100을 보정 (현재 생략)
        setLeftInput( (parseFloat(v) / exchangeRate.current[ curExchangeCode ]).toFixed(2) )
    }
    
    // 요구사항
    // 1. 환율정보 가져오기 -> 일단 1회성 진행, 차후 지속적 반복 업그레이드
    // useCallback()으로 구현, 필요한 위치에서 호출
    const getExchangeInfo = useCallback(async() => {
        // 통화정보 획득
        const res = await axios.get(EXCHANGE_URL);
        // 통화정보에서 select의 요소를 동적으로 구성
        const jsxOptions = res.data.map((exchange, idx) => {
            // "name" : "USDKRW=X", => "USD" 이런 방식으로 세팅
            const{name} = exchange; // 데이터 1개의 형태는 객체
            const code = name.substring(0, 3);
            return (
                <option key={idx} value={code}>{code}</option>
            );
        });
        // 임시로 한국통화코드 삽입, 배열에 멤버 추가 삽입 (push())
        jsxOptions.push( <option key="-1" value="KRW">KRW</option> );
        // 상태 변수에 세팅
        setexchangeCode(jsxOptions);

        // 통화 정보 세팅
        /*
            // 자료구조
            {
                "USD":"1432.xx",
                "JPY":"940.xx"
                "EUR":"1500.xx"
            } 
            // 값 추출
            객체명[ 'USD' ]  => 1432.xx
            res.data를 전처리 등 조치 => 위의 구조 처럼 구성
        */
        // find는 배열 내에서 특정 정보가 일치하는 요소만 찾는 함수
        exchangeRate.current = {
            USD:parseFloat((res.data.find( code => code.name === "USDKRW=X" ).rate).toFixed(4)),
            JPY:parseFloat((res.data.find( code => code.name === "JPYKRW=X" ).rate).toFixed(4)),
            EUR:parseFloat((res.data.find( code => code.name === "EURKRW=X" ).rate).toFixed(4))
        } 
        console.log(exchangeRate.current);
    }, [])

    // 1회성 호출
    useEffect(() => {
        console.log("환율 정보 획득");
        getExchangeInfo(); // 차후 주기성을 가지고 지속적 호출
    }, []);

    // 환전을 위한 통화코드 변경 선택 이벤트
    function exchangeHandler (evt) {
        // 1. 입력된 내용 초기화 -> 0 or (*)빈 값 <= 네이버는 값을 유지하여 변환
        setLeftInput('');
        setRightInput('');
        // 2. 현재 통화 코드 조정 -> 상태변수 설정
        setCurExchangeCode(evt.target.value);
    }

    return (
        <div className='App'> {/* class 형태의 디자인 적용 */}
            <div className='App-header'>
                <h2>환율 계산기</h2>
                <fieldset>
                    <div>
                        {/* 통화 선택, 최초 선택값은 USD로 지정 */}
                        <select style={{ width:"45%" }}
                                onChange={exchangeHandler}
                                value={curExchangeCode}
                        >
                            {exchangeCode}
                        </select>
                        =
                        {/* KRW 고정 */}
                        <select style={{ width:"45%" }}
                                value={"KRW"}
                                disabled
                        >
                            {exchangeCode}
                        </select>
                    </div>
                    <br/>
                    <div>
                        {/* 환전 계산 */}
                        {/*
                            - 상태변수 : leftInput, rightInput
                            - 값 변경 이벤트 처리 함수등록 : onExchangeLeft, onExchangeRight
                        */}
                        <input  placeholder='숫자만 입력'
                                value={leftInput}
                                onChange={onExchangeLeft}
                        />
                        =
                        <input  placeholder='숫자만 입력'
                                value={rightInput}
                                onChange={onExchangeRight}
                        />
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

// [3. 대표 모듈화 -> 오직 1개만 지정]
export default App;