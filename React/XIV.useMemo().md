# 14.useMemo()

## useMemo란?

연산 결과를 메모리(캐시)해 두었다가, 의존성 배열이 바뀌었을 때 다시 계산하게 하는 훅이다.

## 기본 문법

```jsx
const memoizedValue=useMemo(()=>{
	return computeSomething(a, b);// 무거운 연산(함수)
},[a,b]);// 의존성 배열
```

## 어떻게 사용할까?

```tsx
const heavyCalculation = (num: number) => {
  console.log("무거운 계산 실행...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num * 2;
  }
  return result;
};
```

여기 무거운 계산을 실행하는 함수가 있다.

```jsx
const doubleNumber = useMemo(() => heavyCalculation(number), [number]);
```

useMemo를 사용해서 계산 속도를 최적화할 수 있다.

number가 바뀔 때에만 useMemo를 실행한다.

## useMemo의 장점

- **불필요한 연산 방지**:의존성 배열이 안 바뀌면 함수가 호출되지 않는다.
- **성능 최적화**:대규모 데이터 처리 시 유용
- **UI반응성 유지**

## useMemo를 쓰지 않는다면?

- App함수를 다시 불러오는 식으로 렌더링을 함.
- 대규모의 일을 처리 시 비효율적
