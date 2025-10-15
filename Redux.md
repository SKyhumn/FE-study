# Redux

**Redux**는 자바스크립트 애플리케이션에서 **상태(state)**를 관리하기 위한 라이브러리다.

## 쓰는 이유?

- 애플리케이션 규모가 커질 수록 컴포넌트 간 데이터를 주고 받는 과정이 복잡해지게 됨.
- Redux는 상태를 하나의 중앙 저장소(store)에 모아서 관리 가능
- props drilling이 필요 없어지게 된다.

## 설치 방법

```bash
npm install @reduxjs/toolkit react-redux
```

## Redux의 기본 구조

- **Store**
    - 앱 전체 상태를 담고 있는 **단일 저장소**
    - React 컴포넌트 어디서든 접근 가능
    - 여러 slice의 상태를 합쳐 관리
- **Slice (Reducer + Action)**
    - **State + State를 바꾸는 함수**를 한 곳에서 정의
    - Slice 하나가 보통 하나의 기능 단위(예: 카운터, 유저 정보 등)를 담당

## 사용 방법

### **1. src폴더에 ‘store’라는 리덕스 폴더를 만든다.**

```bash
src/
 ├─ store/
 │   
 │          
 ├─ App.tsx
 └─ main.tsx
```

### **2. slice 만들기**

예시:state 증감 slice

```tsx
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState{
    value:number;
}

const initialState:CounterState={
    value:0
}

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase:(state)=>{state.value+=1},
        decrease:(state)=>{state.value-=1},
        incrementByAmount:(state, action:PayloadAction<number>)=>{
            state.value+=action.payload;
        }
    }
});

export const { increase, decrease, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

- **slice 만드는 법**
    
    ### 1. createSlice, PayloadAction 타입 import 하기
    
    ```jsx
    import { createSlice, PayloadAction } from "@reduxjs/toolkit";
    ```
    
    - `createSlice` :slice를 쉽게 만드는 변수
    - `PayloadAction` :**a**ction에 payload 타입을 지정할 때 사용
    
    **※ payload를 쓰는 이유??**
    
    action에서 여러 state의 타입을 정해주기 편하다.
    
    ### 2. state 타입 정의
    
    ```jsx
    interface CounterState {
      value: number;
    }
    ```
    
    - TS를 쓰면 state의 타입을 지정 해줄 수 있다.
    
    ### 3. 초기 state 정의
    
    ```jsx
    const initialState:CounterState={
        value:0
    }
    ```
    
    ### 4. createSlice 사용
    
    ```jsx
    const counterSlice = createSlice({
      name: "counter", // slice 이름
      initialState,     // 초기 상태
      reducers: {       // state를 변경하는 함수들
        increase: (state) => {
          state.value += 1; // Redux Toolkit은 immer 내장이라 state 직접 변경 가능
        },
        decrease: (state) => {
          state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
          state.value += action.payload;
        },
      },
    });
    ```
    
    ```jsx
    const counterSlice = createSlice({
    ```
    
    - `counterSlice` 라는 변수를 선언하고 `createSlice` 를 호출함
    - 이 변수에는 reduce와 action가 포함됨
    
    ```jsx
    name:"counter",
    ```
    
    - slice의 이름을 `"counter"` 로 지정
    
    ```jsx
    initialState, 
    ```
    
    - slice가 관리할 state의 초기값 설정
    - state를 초기화 할 `initialState` 를 사용
    
    ```jsx
    reducers: {       // state를 변경하는 함수들
      increase: (state) => {
        state.value += 1; // Redux Toolkit은 immer 내장이라 state 직접 변경 가능
      },
      decrease: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
    },
    ```
    
    - `reducer` 안에서 state를 변경할 함수들을 정의할 수 있다.
    - `PayloadAction<number>`를 사용해서 **payload 타입을 숫자**로 지정
    
    ### 4. 액션과 리듀서 보내기
    
    ```jsx
    export const { increase, decrease, incrementByAmount } = counterSlice.actions;
    export default counterSlice.reducer;
    ```
    
    ```jsx
    // 형식
    export const {action명들}=리듀서명.actions;
    export default 리듀서명.reducer;
    ```
    
    - `action` 을 export하면 컴포넌트에서 dispatch 호출 가능
    - `reducer`를 export하면 `store`에서 합칠 수 있음

### 3. store 만들기

```tsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice.ts";

export const store=configureStore({
    reducer:{
        counter:counterReducer,
    },
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
```

- **store 만드는 법**
    
    ### 1. configureStore와 리듀서를 import 하기
    
    ```jsx
    import { configureStore } from "@reduxjs/toolkit";
    import 리듀서명 from 파일 경로;
    ```
    
    - `configureStore`: Redux store를 만드는 함수
    - `createSlice` 로 만든 reducer를 불러온다.
    
    ### 2. store 생성
    
    ```jsx
    export const 변수명=configureStore({
        reducer:{
            counter:리듀서명,
        },
    });
    ```
    
    - 변수 선언 후 `configureStore` 호출
    - `reducer: { counter: counterReducer }` : `counter` 라는 이름의 상태를 import한 리듀서로 관리한 다는 의미
    - 즉 store의 구조는 이런 상태가 된다.
    
    ```tsx
    state = {
      counter: { value: 0 }
    }
    ```
    
    ### 3. RootState, AppDispatch 보내기
    
    ```tsx
    export type RootState=ReturnType<typeof store.getState>;
    export type AppDispatch=typeof store.dispatch;
    ```
    
    - `RootState`
        - `store.getState` :현재 전체 상태의 객체를 반환한다.
        - `ReturnType<typeof store.getState>` :이 상태의 객체 타입을 가져온다.
        - `RootState` =Redux store 전체 상태의 타입
    - `AppDispatch`
        - `dispatch` = Redux에서 액션(action)을 보내는 함수
        - `typeof store.dispatch` : `store.dispatch` 의 타입을 가져오는 것
        - `AppDispatch` = Redux store에서 사용하는 ****dispatch 타입

### 4. main.tsx에서 App컴포넌트 Provider로 감싸기

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
```

- `provider` 를 import해서 App컴포넌트를 감싼다.
- 만든 store를 import해서 `Provider` 태그 안에 `store={store이름}` 으로 속성 값을 부여한다.

### 5. 컴포넌트에서 사용하기

```tsx
import './App.css';
import { increase,decrease,incrementByAmount } from './store/slice';
import type { RootState,AppDispatch } from './store/store';
import { useSelector,useDispatch } from 'react-redux';

function App() {
  const count=useSelector((state:RootState)=>state.counter.value);
  const dispatch=useDispatch<AppDispatch>();

  return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increase())}>+1</button>
        <button onClick={() => dispatch(decrease())}>-1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>        
      </div>
  )
}

export default App
```

- 만든 slice 파일에서 action들을 불러온다.
- 만든 store 파일에서 `RootState` 와 `AppDispatch`  타입을 불러온다.
- `useSelector` 와 `useDispatch` 를 불러온다.
- `useSelector` :Redux store의 상태(state)를 가져오는 Hook
- `useDispatch` :Redux store에 액션(action)을 보내는 Hook

### useSelector 사용법

```tsx
const 변수명=useSelector((state:RootState)=>state.store에 등록한 slice명.slice가 관리하는 속성 이름);
```

### useDispatch 사용법

```tsx
const 변수명=useDispatch<AppDispatch>;
```

### actions 사용법

```tsx
dispatch변수명(action명())
```
