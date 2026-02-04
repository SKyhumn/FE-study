# 12.반응형 디자인

## Tailwind 기본 브레이크포인트

Tailwind는 **mobile-first**로 기본 크기 클래스가 모바일 기준이다.

```html
sm: 640px 이상
md: 768px 이상
lg: 1024px 이상
xl: 1280px 이상
2xl: 1536px 이상
```

- `base` :스마트폰
- `sm` :큰 스마트폰(iPhone Pro Max, 갤럭시 Ultra 등)
- `md` :태블릿(iPad, 갤럭시 Tab 등)
- `lg` :노트북, 데스크탑
- `xl` :큰 데스크탑(FHD화면)
- `2xl` :아주 큰 화면(QHD, 4k)

## 기본 사용법

```html
<p className="text-red-500 md:text-blue-500 lg:text-yellow-500">안녕하세요</p>
```

- tailwind css는 모바일 기준으로 스타일이 적용된다.
- 화면 크기가 `lg` 일 시 노란색, `md` 일 시 파란색, 모바일 크기에서 빨간색으로 색이 적용된다.
- 화면이 커질수록 **작은 클래스**에서 **큰 클래스** 순서로 스타일을 적용시킨다. `sm` ⇒ `md` ⇒ `lg`

## 크기 기준을 마음대로 정하는 법

### @theme 사용!!

**@theme에서 쓸 수 있는 카테고리**

| **카테고리명** |
| --- |
| `--breakpoint` |

### 사용 방법

```css
@import "tailwindcss";

@theme{
  --breakpoint-md: 768px;
  --breakpoint-layout: 1024px;
  --breakpoint-wide: 1440px;
}
```

```html
<div className="md:flex layout:grid wide:max-w-7xl">
```
