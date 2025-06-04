# 11.Custom Hook

Custom Hook은 사용자가 직접 만든 hook을 말한다.

`useState`, `useEffect` 같은 내장 Hook을 조합해 **공통 로직을 재사용**할 수 있다.

## Custom Hook 제작하기

외부에서 jsx파일을 만든다.

```jsx
export default function 함수(변수){
	
	return 변수;
}
```

변수도 return 해줘야한다.

예시

```jsx
import { useState, useEffect } from 'react';

export default function useFetch(url){
    let [pitchers, setPlayers]=useState([]);

  useEffect(()=>{
    fetch(url)
      .then(response=>response.json())
      .then(data=>setPlayers(data))
      .catch(e=>console.log(e))
  },[url])

  return pitchers;
}
```

## 메인 파일에서 Custom Hook 불러오기

먼저 훅을 불러온다.

```jsx
import useFetch from './hooks/useFetch.jsx';
import 이름 from 파일경로;
```

그리고 Hook에다 값을 넣고 그것을 변수, 상수를 만들어 대입을 하면 훅에서 return한 값이 변수, 상수에 들어간다.

```jsx
const dt=useFetch('http://localhost:8000/pitcher');
```
