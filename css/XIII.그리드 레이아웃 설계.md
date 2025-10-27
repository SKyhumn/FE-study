# 13.그리드 레이아웃 설계

## 구성요소

![image.png](https://thebook.io/img/080313/290.jpg)

- 행(row):그리드 레이아웃에서 가로줄을 의미한다.
- 열(column):그리드 레이아웃에서 세로줄을 의미한다.
- 그리드 셀(grid cell):행과 열이 만나 이루어지는 하나의 공간을 나타낸다.
- 그리드 아이템(grid item):그리드 셀 안에서 표현되는 콘텐츠를 의미한다.
- 그리드 라인(grid line):그리드 행과 열을 그리는 선을 의미한다.
- 그리드 넘버(grid number):그리드 라인에 붙는 번호이다.
- 그리드 컨테이너(grid container):그리드 레이웃의 전체 내용을 담고 있는 최상위 부모 요소이다.

## display속성

```jsx
display:grid;
```

- 해당 속성이 지정된 요소는 그리드 컨테이너가 되고, 자식 요소는 그리드 아이템이 된다.

## grid-template-columns와 grid-template-rows속성

```css
grid-template-columns:<1열값> <2열값>;
grid-template-rows:<1행값> <2행값>;
```

- 그리드 컨테이너의 기본 구성 요소는 행과 열이다.
- 열은 grid-temple-columns속성, 행은 grid-template-rows속성으로 생성한다.
- 값을 auto값으로 지정하면 크기가 컨테이너에 맞춰 자동으로 지정된다.

## row-gap, column-gap속성

```css
row-gap:<크기>;
column-gap:<크기>;
```

- 그리드 셀 사이의 간격을 지정한다.

## align-item, align-self속성

```css
align-item:<속성값>;
align-self:<속성값>;
```

- 그리드 아이템을 각 그리드 셀의 세로 방향으로 정렬할 수 있다.

| 속성값 | 설명 |
| --- | --- |
| stretch | 그리드 아이템이 그리드 셀을 꽉 채우도록 크기를 늘린다. |
| start | 그리드 아이템이 그리드 셀의 맨 위에 배치한다. |
| center | 그리드 아이템을 그리드 셀의 세로 방향 중간에 배치한다. |
| end | 그리드 아이템을 그리드 셀의 맨 아래에 배치한다. |
- 그리드 아이템을 각각 정렬하고 싶다면 align-self 속성을 사용한다.

## justify-items, justify-self속성

```css
justify-self:stretch;
```

- 그리드 아이템을 각 그리드 셀의 가로 방향으로 정렬할 수 있다.

| 속성값 | 설명 |
| --- | --- |
| stretch | 그리드 아이템을 그리드 셀이 꽉 차도록 늘린다. |
| start | 그리드 아이템을 그리드 셀의 왼쪽 끝에 배치한다. |
| center | 그리드 아이템을 그리드 셀의 가로 방향 중간에 배치한다. |
| end | 그리드 아이템을 그리드 셀의 오른쪽 끝에 배치한다. |
- 그리드 아이템을 각각 정렬하고 싶다면 justify-self속성을 사용한다.

## place-items, place-self속성

```css
place-items:<align-items> <justify-items>;
place-self:<align-self> <justify-itmes>;
```

- place-items는 align-items와 justify-items 속성을 한 번에 사용할 수 있는 단축 속성이다.
- place-self는 align-self와 justify-self 속성을 한 번에 사용할 수 있는 단축 속성이다.

## grid-template-area, grid-area속성

```css
grid-template-area:"이름 이름...이름"
grid-area:<행과 열 이름>
```

- grid-template-area 속성은 그리드 레이아웃의 행과 열을 이름으로 지정할 수 있다.
- grid-area속성으로 이름을 그리드 아이템에 배치할 수 있다.

예시

```html
<style>
        .container{
            background-color:grey;
            display:grid;
            grid-template-columns:20% 40% 40%;
            grid-template-rows: 200px 1000px 200px;
            grid-template-areas:
            "header header header"
            "sidebar content content"
            "footer footer footer";
        }
        header{
            grid-area:header;
            background-color:red;
        }
        nav{
            grid-area:sidebar;
            background-color:yellow;
        }
        content{
            grid-area:content;
            background-color:green;
        }
        footer{
            grid-area:footer;
            background-color:blue;
        }
    </style>
</head>
<body>
    <div class="container">
        <header></header>
        <nav></nav>
        <content></content>
        <footer></footer>
    </div>
</body>
```

## grid-column-start, grid-column-end, grid-row-start, grid-row-end속성

```css
grid-column-start:n;
grid-column-end:n;
grid-row-start:n;
grid-row-end:n;
```

- 그리드 넘버를 이용해 그리드 아이템의 열, 행 시작 위치와 종료 위치를 지정한다.

## grid-column, grid-row속성

```css
grid-column:<start>/span <열 개수>;
grid-row:<start>/span <행 개수>;
```

- grid-column은 grid-column-start, grid-column-end의 단축 속성이다.
- grid-row는 grid-row-start, grid-row-end의 단축 속성이다.
