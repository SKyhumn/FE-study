# 14.@layer

Tailwind는 스타일을 3단 레이어로 관리한다.

```css
base → components → utilities
```

## 1. `@layer base`

**브라우저 기본 스타일 + 전역 규칙** 지정

```css
@layer base {
  html {
    font-family: system-ui, sans-serif;
  }

  body {
    @apply bg-neutral-50 text-neutral-900;
  }
}
```

### 언제 쓰냐?

- `body`, `h1`, `a`, `button` 기본값

## 2. `@layer components`

반복되는 스타일이나 의미있는 스타일을 지정할 때 사용한다.

```css
@layer components {
  .btn-primary {
    @apply inline-flex items-center
           px-4 py-2 rounded-md
           bg-blue-600 text-white
           hover:bg-blue-700;
  }
}
```

## 3. `@layer utilities`

새 유틸리티를 추가할 때 사용한다.

```css
@layer utilities {
  .text-shadow-sm {
    text-shadow: 1px 1px 2px rgb(0 0 0 / 0.25);
  }
  .유틸명-스타일 속성-속성 값{
	  css 코드
  }
}
```

- 우선순위가 가장 높다.
