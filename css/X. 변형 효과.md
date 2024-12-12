# 10.변형 효과

## transform속성

```css
transform:<함수>;
```

- tranfrom 속성을 사용하면 요소에 특정 변형 효과를 지정할 수 있다.

| 함수 | 설명 |
| --- | --- |
| translate(x,y) | 요소를 현재 위치에서 x(x축)와 y(y축)만큼 이동한다. |
| translateX(n) | 요소를 현재 위치에서 n만큼 x축으로 이동한다. |
| translateY(n) | 요소를 현재 위치에서 n만큼 y축으로 이동한다. |
| scale(x,y) | 요소를 x(x축)와 y(y축)만큼 확대 또는 축소한다. |
| scaleX(n) | 요소를 n만큼 x축으로 확대 또는 축소한다. |
| scaleY(n) | 요소를 n만큼 y축으로 확대 또는 축소한다. |
| skew(xdeg,ydeg) | 요소를 x축과 y축으로 xdeg, ydeg(각도)만큼 기울인다. |
| skewX(deg) | 요소를 deg(각도)만큼 x축 방향으로 기울인다. |
| skewY(deg) | 요소를 deg(각도)만큼 y축 방향으로 기울인다. |
| rotate(deg) | 요소를 deg(각도)만큼 회전한다. |

## transform-origin속성

```css
transform-origin:<x축 위치> <y축 위치>;
```

- 회전할 때 요소의 중심을 변경할 수 있는 속성이다.
