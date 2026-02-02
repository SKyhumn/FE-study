# 10.flex

## 기본 중의 기본

```html
<div className="flex"></div>
```

- className에 `flex` 를 입력해 요소를 flex로 지정할 수 있다.

## 방향 지정

```html
<div className="flex-row"></div>
<div className="flex-col"></div>
<div className="flex-row-reverse"></div>
<div className="flex-col-reverse"></div>
```

- `flex-row` :좌⇒우
- `flex-col` :상⇒하
- `flex-row-reverse` :우⇒좌
- `flex-col-reverse` :하⇒상

## 정렬

### 메인축 정렬

```css
justify-start /*시작점*/
justify-center /*가운데*/
justify-end /*끝*/
justify-between /*간격이 균일하게*/
justify-around /*아이템 밖의 둘레가 균일하게*/
justify-evenly /*양 끝의 간격이 균일하게*/
```

### 교차축 정렬

```css
items-start /*시작점*/
items-center /*가운데*/
items-end /*끝*/
items-stretch /*너비나 높이가 늘어남*/
items-baseline /*baseline을 기준으로 정렬*/
```

### 아이템 하나만 따로 정렬할 때

```css
self-start /*시작점*/
self-center /*가운데*/
self-end /*끝*/
self-stretch /*너비나 높이가 늘어남*/
```

## 줄 바꿈 관련

```css
flex-wrap /*아이템들이 컨테이너를 벗어나면 줄 바꿈*/
flex-nowrap /*아이템들이 컨테이너를 벗어나도 무시*/
flex-wrap-reverse /*아이템들이 컨테이너를 벗어나면 줄 바꿈(거꾸로)*/
```

## 크기 비율

```css
flex-1    /*남는 공간 다 먹음*/
flex-auto
flex-initial
flex-none
```

## 간격 주기(gap)

```css
gap-* /*모든 간격*/
gap-x-* /*좌우 간격*/
gap-y-* /*상하 간격*/
```
