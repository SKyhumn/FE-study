# 14.미디어 쿼리

미디어 쿼리는 반응형 웹을 만드는 주요 기술 중 하나이다.

## 뷰포트

![image.png](https://images.velog.io/images/ken1204/post/1c96a90f-b135-42b9-a2dd-57a8829aff4a/image.png)

- 뷰포트란 웹 페이지가 접속한 기기에서 보이는 실제 영역의 크기를 의미한다.
- HTML문서는 어떤 기기에서 접속하더라도 기본으로 980px 크기를 기준으로 보여 주게 설정되어 있다.

## 미디어 쿼리의 기본 문법

```css
@media <not|only> <mediatype> and (<media feature>) <and|or|not> (<media feature>){
	/*css코드*/
}
```

### not/only

- not 뒤에 오는 모든 조건을 부정한다.
- only 미디어 쿼리를 지원하는 기기만 미디어 쿼리를 해석하라는 의미이다.

### mediatype

- 미디어 쿼리가 적용될 미디어 타입을 명시한다.
- 생략 가능하며, 생략할 경우 all로 인식된다.
- 생략하지 않으면 반드시 다음에 and 연산자가 와야 한다.

미디어 타입 종류

| 속성 | 설명 |
| --- | --- |
| all | 모든 기기 |
| print | 인쇄 장치 |
| screen | 컴퓨터 화면 당치 또는 스마트 기기  |
| speech | 스크린 리더기 같은 보조 프로그램으로 웹 페이지를 소리 내어 읽어 주는 장치 |

### media feature

- 미디어 쿼리가 적용될 미디어 조건을 적는다.

미디어 조건 종류

| 조건 | 값 | 설명 |
| --- | --- | --- |
| min-width | <화면 너비> | 미디어 쿼리가 적용될 최소 너비 |
| max-width | <화면 너비> | 미디어 쿼리가 적용될 최대 너비 |
| orientation | portrait | 세로 모드, 뷰포트의 세로 높이가 가로 너비보다 큰 경우 |
| orientation | landscape | 가로 모드, 뷰포트의 가로 너비가 세로 높이보다 큰 경우 |
