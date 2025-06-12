# 12. ref()

React 컴포넌트는 렌더링에 사용되지 않는 일부 데이터를 가지고 있을 수 있으며, 이러한 데이터를 저장하기 위해서 ref를 사용한다.

useRef Hook은 함수 컴포넌트에서 이러한 ref를 참조할 수 있게 해 준다.

## 사용방법

```jsx
import { useRef } from 'react';
```

useRef를 import한다.

```jsx
const myRef=useRef(0);
```

변수를 선언해서 useRef값을 대입한다.

ref는 하나의 오브젝트이므로 콘솔에 출력하면 이런 결과가 나온다.

```jsx
{current:0}
```

그러므로 변수에 접근하기 위해선 객체 형식으로 접근 해야한다.

```jsx
myRef.current
```

## Ref특징

ref는 수정을 해도 컴포넌트를 다시 렌더링에는 영향을 끼치지 않는다.

그러므로 ref를 증가시키는 함수를 만들면 ref  자체는 증가되지만 렌더링은 되지 않는다.

DOM이 마운트 될 때 ref값이 바뀐다.

변수와 다르게 아무리 컴포넌트가 렌더링이 되도 값이 변하지 않는다.

## Ref를 쓰는 이유?

컴포넌트에 자주 바뀌는 값을 state에 집어 넣으면 렌더링도 자주 반복하기 때문에 성능에 안 좋은 영향을 끼치기 때문이다.

## DOM에 접근하는 법

```jsx
const myRef=useRef();

useEffect(()=>{
  myRef.current.focus();
},[]);
```

ref를 만들고 useEffect로 ref를 포커스한다.

```html
<input type="text" placeholder="username" ref={myRef}></input>
```

태그에 ref속성을 넣고 속성 값으로 자기가 만든 ref를 넣는다.
