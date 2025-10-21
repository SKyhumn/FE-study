## fetch API를 이용한 데이터 받기(GET요청)

```jsx
fetch('url') //이 주소로 AJAX를 요청한다.
	.then(response=>response.json())//응답을 json형식으로 받는다
	.then(result=>console.log(result));//응답 성공시 콘솔에 json 출력
	.catch(error=>console.log(error));//응답 실패시 에러 출력
```

### 여기서 reponse란?

fetch() 함수는 프로미스를 반환하며, 이 프로미스가 성공하면 reponse 객체를 받는다.

### **fetch의 Response 객체 주요 메서드**

- `response.json()`: JSON 형식으로 응답을 파싱 (비동기 처리).
- `response.text()`: 텍스트 형식으로 응답을 파싱.
- `response.blob()`: 바이너리 데이터를 처리할 때 사용.
- `response.arrayBuffer()`: 로우 데이터를 버퍼로 받기.
- `response.status`: HTTP 상태 코드.
- `response.ok`: 응답이 성공적일 경우 `true` 반환.

## fetch API를 이용한 데이터 전송하기(POST요청)

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

- method를 POST로 지정해 놓는다.
- **headers**: HTTP 요청 헤더를 설정한다. 여기서는 `Content-Type`을 `application/json`으로 지정하여 서버에 보내는 데이터가 JSON 형식임을 알려준다.
- **body**: `body`는 요청 본문에 포함할 데이터이다. `JSON.stringify()`를 사용하여 객체를 JSON 문자열로 변환한 후 보낸다. 이 데이터는 서버에서 처리할 수 있는 형식이다.
- `JSON.stringify()`는 JavaScript 객체를 JSON 형식의 문자열로 변환한다.
