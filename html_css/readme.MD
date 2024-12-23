# 프런트엔드 구조
    - 프런트엔드
        - 기본 구성원
            - html + css + javascript
            - 개별요소
                - html5 : 구조(뼈데), 콘텐츠포함
                - css3 : 레이아웃, 디자인, 반응형, 애니메이션
                    - 부트스트랩, 머터리얼, ...
                - javascript : 인터렉션(사용자<->브라우저 상호작용), 이벤트,통신, 동적화면 구성
                    - 기존 수업 -> nodejs기반 문법 정리
                        - vscode에서 작동
                    - html, css와 연계하여 진행
                        - 브라우저에서 작동
        - 방식
            - 브라우저를 통해서 유저가 확인하는 화면의 렌더링 방식
            - 종류
                - SSR (Server Side Rendering)
                    - 유저가 보는 화면을 서버(백엔드)에서 모두 완성하여 전송
                    - 전통적인 방식
                    - 개발플랫폼
                        - springboot, nodejs, .net, ...
                - CSR (Client Side Rendering)
                    - 유저가 보는 브라우저에서 화면이 완성
                    - 렌더링 부하가 클라이언트에게 가중된다
                    - 개발플랫폼 
                        - reactjs/vuejs, ... => SPA

#HTML
    - Hyper Text Markup Language
    - 구조, 뼈대, `콘텐츠==데이터`를 가지고 있다
        - 웹
            - 구조 + 데이터세팅 => 화면처리에 기본 정보
        - 데이터
            - 구조 + 데이터 => 반정형 데이터
            - 웹스크래핑/웹크롤링 => 데이터 수집 대상
    - 각각 태그에 용도가 표시
    - html5
        -1995년 최초 고안
            - html4가 2015년 이전까지 주력 사용 -> 지금은 html5
        - 2008년 드래프트 이후 2009~2001
        - 스마트폰보급 및 확산 시기
    - 구조
        1_basic.html
    - 주요 태그
        - 기본
            - DOCTYPE : html 문서 작성 문법을 정의한 DTD(Document Type Define) 참조선언
                - 생략 가능
            - html
                - 문섯의 시작과 끝
            - head, body
                - 메타 정보, 화면에 보이는 정보 기술
        - 구조
            - div : 영역
            - table, theader, tbody, tr, td, th : 테이블 표시 ex)게시판
        - 입력
            - (*)input, select, textarea, radio, ..
            - 사용자가 데이터를 `입력`
                - form과 연계(가장 바깥쪽 경계 표현, 전송)
        - 전송
            - form
            - 서버로 `전송` 역할
        - 정보 표시
            - 텍스트
                - p(단락, 줄바꿈 존재), span(조각, 줄바꿈 x)
            - 멀티미디어
                - img, video, audio, ...
        - 이동
            - a : 링크
        - 이벤트 (트리거)
            - button
        - 외부 자원 참조 (html 내부로 적용)
            - script, style, ...
                - js/css external  방식으로 html에 참조시킬때 사용
                - js/css internal  방식으로 직접 js와 css를 구현할때 사용
        - 2D/3D 렌더링
            - canvas : 차트, 게임

# 개별기능
    - html, js 연동
        - 2_html_js.html, 2_html_js2.html
        - SSR 기준 : html에 JS와 CSS를 포함시키는 방법
            - external
                - *.js, *.css로 파일이 별개로 존재
                - <script src="xx.js">
            - internal
                - *.html만 존재
                - <script> ... </script>
            - inline
                - html 요소에 직접 적용
                - <button onclick="javascript:xxx();">로그인</button>
                - <button onclick="xxx();">로그인</button>

# (*)css selector
    - css에서 요소를 특정(찾아내는)하는 기법(방법, 표현)
    - css selector 이해(직접), 개발자 도구에서 자동으로 찾기(툴 사용)
    - 규칙 (우선 검토하는 순위)
        - (*)아이디 값
            - 문서(html)상에서 고유한 값을 가진다
            - html : <요소명 id="아이디값">
            - css selector : "#아이디값"
        - 클래스 값
            -  `.class값`
        - 요소명
        - 조합 (위의 표현)
        - 열거
        - 서열 (부모, 자식, 형제, 후손)
        - 기타
            - 의사결정
            - 속성셀렉터
    - 5_jquery_css_selector.html

# html 내에서 통신
    - 프로토콜 : 웹페이지 기준 http, https
    - html의 전송(요청)
        - (*)form 태그 -> 페이지 자체를 변경 (화면 전체가 새롭게 로딩)
            - form 전송 이동
            - 데이터 전송 방법 (method)
                - (*)get, (*)post, put, delete, ... 다수의 메소드 지원
            - 껌뻑인다
            - 2_html_js2.html
        - a 태그
            - 링크로 이동
            - 데이터 전송 방법 (method)
                - get
            - 껌뻑인다
        - 주요 메소드
            - get : 소량의 데이터 전송, 보안이 중요하지 않을 때
                - 프로토콜의 헤더에 데이터를 전달
                - 형식 + url + ? + 파라미터(키=값&키=값...)
                - http://www.naver.com/api/news?id=123456789
            - post : 대량의 데이터 전송, 보안이 중요, 파일 업로드
                - 프로토콜의 바디에 데이터를 전달
                - 바디로 데이터를 전송 -> 대량의 데이터를 쪼개서 전송이 가능하다는 뜻
                - 가변 처리가 가능하다
    - JS로 전송(요청)
        - ajax (Asynchronous JavaScript and XML)
            - 다수의 메소드 지원
            - xml 전송을 목표, 비동기처리, 백그라운드 통신 설계
                - 데이터 포맷 xml => json
            - open api 회사들은 xml, json을 모두 지원함 => restful 방식
            - txt 포맷이면 모두 지원 가능 (파일, ...)
                - 사람, 컴퓨터, 프로그램이 모두 이해할 수 있는 형식
            - 더보기 -> 데이터 불러오기 (백단으로 통신해서 데이터 로드)
            - 4_jquery.html
    - http 요청시 응답코드
        - 100~
        - 200~ : 200번은 정상응답
        - 300~
        - 400~ : 404 (해당 페이지 없음), 405 (그런 메소드는 해당 주소로 지원하지 않음) <= 클라이언트측 에러
        - 500~ : 500 <= 서버측 에러

# 차트 그리기
    - 대시보드용, 수집된(쌓여있는) 데이터 => 시각화 => 분석, 관제
    - 차트용 라이브러리
        - 유료, 무료 -> JS
        - 무료
            - chartjs
            - 3_chart.html

# 차트2
    - 유료, 무료 차트를 활용
    - 리액트와 결합
    - 대시보드, 주식차트 등등 시각화 및 업무 처리 사이트 구성 가능
        - 대부분 시각화 앱/웹은 JS로 구성

# 기본 html, css 컨셉
    - html 기본 구성 이해, 필요한 html 요소들을 사용할때 체크!!
    - css 
        - UI 구성등 -> 백엔드에서 체크, 무료 템플릿 활용(부트스트랩등...)
         - (*)css selector를 확인
            - 스타일 기본 적용
        - 반응형, 애니메이션 <- 활용
            - 생략, 무료 템플릿 제품에서 지원되면 그대로 활용
            - ex) https://getbootstrap.kr/


# jQuery
    - 자바스크립트 프레임워크
    - JS의 표현을 간결하게 대체할수 있는 제품
    - 2008/9 ~ 현재까지 계속 사용, 2015년 이전까지는 엄청난 점유을 가지고 사용
    - 활용
        - SSR 중심으로 웹서비스 구성시 활용빈도가 높다!!    
    - 실습
        - 2_html_js.html => jQuery 적용 => 간결하게 구성 : 4_jquery.html

