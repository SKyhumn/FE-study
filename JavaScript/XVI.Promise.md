# 16.Promise

`Promise`는 **JavaScript에서 비동기(Asynchronous)** 작업을 처리하기 위해 사용하는 **객체**이다.

쉽게 말하면 아직 끝나지 않은 작업의 결과를 미래에 약속(promise)하는 것이다.

## Promise란?

비동기 작업의 최종 완료(또는 실패)를 나타내는 객체이다.

즉, 어떤 비동기 함수(서버 요청, 파일 읽기 등)가 언제 끝날지 모를 때, 그 결과를 다루기 위한 약속 같은 개념이다.

## Promise 사용 법

```tsx
const pr=new Promise((resolve,reject)=>{
	// code
});

pr.then();
```

- `Promise` 생성자를 호출하고  `resolve` 와 `reject` 를 쓴다.
- `then` 을 이용하여 `resolve` 값과 `reject` 값을 다룰 수 있다.

### 예시 1

```tsx
const pr=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('OK');
	}, 3000) // 3초 뒤에 OK 결과 반환
});

pr.then(result=>console.log(result))
	.catch(err=>console.log(err));
```

- 3초 뒤에 작업이 성공 처리 되는 코드이다.
- `pr.then(...)` : Promise가 fulfilled(성공)됐을 때 실행된다.
- `result` 에는 `resolve` 로 전달한 값이 들어온다.
- `.catch(...)` : Promise가 rejected(실패)됐을 때 실행된다.
- `result` 에는 `reject` 로 전달한 에러가 들어온다.

### 예시 2

```jsx
function pr1(){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res('1번 주문 완료');
		}, 3000);
	})
}
function pr2(message){
	console.log(message);
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res('2번 주문 완료');
		}, 3000);
	})
}
function pr3(message){
	console.log(message);
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			res('3번 주문 완료');
		}, 3000);
	})
}

pr1().then(res=>pr2(res))
.then(res=>pr3(res))
.then(res=>console.log(res))
.catch(err=>console.log(err));
```

- 3초 간격으로 “n번 주문 완료” 라는 문구가 나오는 코드이다.
- 함수 안에서는 Promise함수를 `return` 문을 사용해서 결과를 받을 수 있다.

## promise 내부 구조

`promise`는 객체로 `state` 속성 값과 `result` 속성 값을 가진다.

### 대기 상태

```tsx
Promise{
	[[PromiseState]]:"pending", // 대기 상태
	[[PromiseResult]]:undefined
}
```

- 대기 상태일 때는 `state` 값이 `"pending"` 이다.
- `undefined` 는 결과가 아직 받아 들여지지 않았다는 의미다.

### 작업이 성공적으로 완료

```tsx
Promise{
	[[PromiseState]]:"fulfilled", // 이행됨
	[[PromiseResult]]:value
}
```

- 작업이 성공적으로 완료가 됐다면 `state` 값은 `"fulfilled"` 가 된다.
- `result` 값에는 받은 결과가 들어간다.

### 작업이 실패했을 때

```tsx
Promise{
	[[PromiseState]]:"rejected", // 거부됨
	[[PromiseResult]]:error
}
```

- 작업이 실패했다면 `state` 값은 `"rejected"` 가 된다.
- `result` 값에는 error가 들어간다.

## 어디에 쓰이나?

- 서버에서 데이터 가져오기
- 파일 읽기
