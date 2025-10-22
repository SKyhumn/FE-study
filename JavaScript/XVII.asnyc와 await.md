# 17.asnyc/await

`asncy` 와 `await` 는 js에서 비동기 작업을 더욱 깔끔하게 처리할 수 있게 해주는 문법이다.

## 1. asnyc

```tsx
asnyc function hello(){
	return "hello";
}

hello().then(res=>console.log(res);
```

- 함수 앞에 `asnyc` 를 붙이면 그 함수는 항상 `Promise` 를 반환한다.
- 여기서 함수는 `Promise.resolve("hello")` 를 반환한다.

## 2. await

- `await` 는 Promise가 해결될 때까지 기다리게 해주는 키워드다.
- `await` 는 항상 `async` 함수 안에서만 사용할 수 있다.

```jsx
function threeSeconds(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('OK');
        },3000)
    })
} // 3초 뒤에 작업 성공 'OK'를 반환하는 Promise 함수
async function run(){
    const result=await threeSeconds();
    console.log(result);
} // Promise 함수 결과를 받아 콘솔에 출력하는 함수

run();
```

- `await` 키워드는 Promise 함수명 앞에 사용한다.

## async/await와 fetch로 서버에서 데이터 받기

```tsx
async function fetchData(){
	try{
		const res=await fetch(경로);
		const data=await res.json();
		console.log(data);
	} catch(error){
		console.error("에러 발생",error);
	}
}

fetchData();
```

## React에서

```tsx
useEffect(()=>{
	async function fetchData(){
		try{
			const res=await fetch(경로);
			if(!res.ok)
				throw new Error(res.status);
			const data=await res.json();
		} catch(error){
			console.log(error);
		}
	}
	
	fetchData();
},[]);
```
