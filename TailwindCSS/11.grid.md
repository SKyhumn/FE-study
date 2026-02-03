# 11.grid

## 기본 grid 선언

```html
<div className="grid"></div>
```

- `grid` 로 요소를 grid 형식으로 지정해줄 수 있다.

## 컬럼 개수 지정

```html
<div className="grid grid-col-3"></div>
```

- `grid-col-*` :몇 개의 열로 grid를 나눌지 지정한다.

## 행 개수 지정

```html
<div className="grid grid-row-3"></div>
```

- `grid-row-*` :몇 개의 행으로 row를 나눌지 지정한다.

## 간격(gap) 주기

```html
<div className="grid grid-row-3"></div>
```

- `gap-*` :요소들의 간격을 지정해줄 수 있다.

## 정렬

### 모든 아이템 정렬

```html
<div className="grid justify-items-center items-center">
```

- `justify-items-*` :가로 정렬
- `items-*` :세로 정렬

### 특정 아이템 정렬

```html
<div className="justify-self-center">나만 중앙</div>
<div className="self-end">나만 아래</div>
```

- `justify-self-*` :가로 정렬
- `self-*` :세로 정렬

### 그리드 “전체”를 컨테이너 안에서 정렬

```html
<div class="grid place-content-center">
```

```html
<div class="grid justify-content-center content-center">
```

- `place-content-*` :가로 세로 정렬 모두 가능
- `justify-content-*` :가로 정렬
- `content-*` :세로 정렬

## 요소가 차지하는 칸 지정

### 컬럼 몇 칸 차지? ⇒ `col-span-*`

```html
<div className="grid grid-cols-4 gap-4">
  <div class="col-span-1">1칸</div>
  <div class="col-span-2">2칸</div>
  <div class="col-span-1">1칸</div>
</div>
```

- `col-span-*` :요소가 열을 몇 칸 차지할 것인지 지정해준다.

### 행 몇 칸 차지? ⇒ `row-span-*`

```html
<div className="grid grid-rows-3 grid-cols-3 gap-4">
  <div className="row-span-2 col-span-2">큰 카드</div>
</div>
```

- `row-span-*` :요소가 행을 몇 칸 차지할 것인지 지정해준다.
