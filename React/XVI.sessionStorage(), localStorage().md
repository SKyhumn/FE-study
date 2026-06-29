`sessionStorage()` 와 `localStorage()` 는 데이터를 브라우저에 저장하는 기능이다.

## `sessionStorage()` vs `localStorage()`

| 기능 | sessionStorage | localStorage |
| --- | --- | --- |
| 새로고침 | ✅ 유지 | ✅ 유지 |
| 탭 닫기 | ❌ 삭제 | ✅ 유지 |
| 브라우저 종료 | ❌ 삭제 | ✅ 유지 |

## 사용 방법

### 저장: `.setItem("데이터 이름", 데이터 값)`

```jsx
sessionStorage.setItem("email", email);

localStorage.setItem("email", email);
```

### 가져오기: `.getItem("데이터 이름")`

```jsx
const email = sessionStorage.getItem("email");

const email2 = localStorage.getItem("email");
```

### 삭제: `.removeItem("데이터 이름")`

```jsx
sessionStorage.removeItem("email");

localStorage.removeItem("email");
```

### 전체 삭제: `.clear()`

```jsx
sessionStorage.clear();

localStorage.clear();
```
