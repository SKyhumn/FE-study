# 10.useEffect를 이용한 fetch()사용

## useEffect란?

화면에 첫 렌더링 될 때, 다시 렌더링 될 때, 화면에서 사라질 때 특정 작업을 처리할 코드를 실행 시키고 싶을 때 쓰이는 함수이다. 

## 사용방법

useEffect에는 2가지 사용법이 있다.

```jsx
useEffect(()=>{

});
```

위 코드는 렌더링이 될 때마다 코드를 실행한다.

```jsx
useEffect(()=>{

},[value]);
```

화면에 첫 렌더링이 될 때, value 값이 바뀔 때 코드를 실행한다. 빈 배열이 전달이 된다면 화면에 첫 렌더링이 될 때 실행을 한다.

빈배열 []인 경우 마운트 될 때 딱 한 번만 실행한다.

useEffect안에선 컴포넌트 return이 절대 안된다.

## fetch()

**JavaScript**에서 주로 사용하는 **비동기 HTTP 요청 함수**로, 웹 브라우저에서 서버에 데이터를 요청하거나 받아올 때 사용된다.

## 기본 문법

```jsx
fetch(url, option)
	.then(response=>response.json()) //데이터를 json 형식으로 받음
	.then(data=>{
	}) //데이터 받았을 시 코드
	.catch(e=>{
	}); //실패시 코드
```

## POST 하는 법

```jsx
fetch('https://example.com/api/endpoint', {
  method: 'POST', //method방식을 POST로 지정
  headers: {
    'Content-Type': 'application/json', //요청의 본문이 JSON형식임을 지정
  },
  body: JSON.stringify({ //JSON.stringify는 js객체를 json 형식의 문자열로 변환할 때 사용한다.
    key1: 'value1',
    key2: 'value2',
  }),
})
```

option을 객체형식으로 정해준다.

method는 ‘POST’로 정해준다.

header는 {}를 열고 ‘Content-Type’를 ‘application/json’로 정해 요청의 본문이 JSON 형식임을 지정한다.

body는 JSON.stringify로 json 형식의 문자열로 변환해주고 그 안에 POST할 데이터를 객체 형식으로 적는다.
