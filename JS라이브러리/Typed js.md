타이핑 효과를 내기 위한 js라이브러리이다.

## 사용법

```jsx
<script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.1.0/typed.umd.js" integrity="sha512-+2pW8xXU/rNr7VS+H62aqapfRpqFwnSQh9ap6THjsm41AxgA0MhFRtfrABS+Lx2KHJn82UOrnBKhjZOXpom2LQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

먼저 HTML문서에 cdn을 추가한다.

```jsx
var typed=new Typed(아이디or클래스or태그이름,{
    strings:[문자열,문자열...,문자열], //문자열들
    typeSpeed: , //입력 속도
    backSpeed: , //지우는 속도
    startDelay:, //시작 전 딜레이
    backDelay: , //지우기 전 딜레이
    loop: , //반복여부(true, flase)
    showCursor: , //커서 여부
    cursorChar: , //커서 문자
})
```

- 변수 선언=new Typed()형식으로 선언한다.
- 첫 번째로 글자가 들어가게 될 공간의 id, class, 태그 이름을 적는다.
- 함수처럼 중괄호를 연 뒤 속성과 속성 값들을 적는다.

### 속성

| 속성 | 설명 |
| --- | --- |
| strings | 입력할 문자열들을 배열로 받는다. |
| typeSpeed | 입력 속도를 정한다. |
| backSpeed | 지우는 속도를 정한다. |
| startDelay | 시작 전 딜레이를 정한다. |
| backDelay | 지우기 전 딜레이를 정한다 |
| loop | 반복여부 (true, false)를 정한다. |
| showCursor | 커서 여부를 정한다. |
| cursorChar | 커서 문자를 정한다. |

### 예시

```jsx
let typed=new Typed("#typed"{
	strings:['아 집가고 싶다', '어떻게 하면 맛있는 제육을 볶을 수 있을까'],
	typeSpeed:50,
	backSpeed:50,
	startDelay:100,
	backDelay:100,
	loop:true,
	showCursor:true,
	cursorChar:"|"
})
```
