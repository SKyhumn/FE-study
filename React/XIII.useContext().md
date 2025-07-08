context는 컴포넌트 트리 전체에서 전역적으로 데이터를 공유할 수 있게끔 해주는 기능이다.

## context는 필요할 때만!!

- context를 사용하면 컴포넌트 재사용이 어려워진다.

## context 사용 방법

먼저 createContext를 import하고 context를 만든다.

```jsx
import { createContext } from 'react';

const UserContext=createContext();
```

Provider로 감싸서 값을 제공한다.

```jsx
function App() {
  const user={name:"최준영", age:18} //데이터
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Profile/> /*중간에 props 전달 없이*/
      </UserContext.Provider>
    </div>
  );
}
```

아래 컴포넌트는 중간 컴포넌트로 context를 받을 필요가 없다.

```jsx
function Profile(){
    return(
        <div>
            <h2>Profile</h2>
            <UserInfo/>
        </div>
    );
}
```

최종 전달 받을 컴포넌트에서 context를 사용한다.

```jsx
import {useContext} from 'react';

function UserInfo(){
    const user=useContext(UserContext);
    return(
        <p>
          이름: {user.name}, 나이: {user.age}
        </p>
    );
}
```

먼저 useContext를 import한다.

받은 context를 변수 및 상수로 만들어 할당한다.

## 외부 컴포넌트에 context 전달하는 법

```jsx
import React from 'react';
import { createContext } from 'react';
import Profile from './components/Profile.jsx';

export const UserContext=createContext();

function App() {
  const value={name:"최준영", age:17, MBTI:"ESFJ"};
  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Profile/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
```

- app.jsx에서 상수 형식으로 context를 만든다. 이때 외부 컴포넌트에 보내기 때문에 앞에 export를 붙여야 한다.
- app() 컴포넌트에서 데이터를 만들고 context명.Provider로 감싸서 외부 컴포넌트에 전달한다.

```jsx
import { useContext } from "react";
import { UserContext } from '../App.jsx';

export default function UserInfo(){
    const user=useContext(UserContext);
    return(
        <div>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
            <p>MBTI: {user.MBTI}</p>
        </div>
    );
}
```

- 이 컴포넌트는 Profile컴포넌트의 자식 컴포넌트이다.
- context를 불러올 때 훅 형식 (import { context명 } from ‘context가 만들어진 파일 경로’)으로 불러온다.
- useContext 훅도 불러와준다.
