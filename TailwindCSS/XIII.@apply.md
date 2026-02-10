# 13.@apply

## `@apply`

**Tailwind 유틸리티 클래스들을 CSS안에서 합쳐 쓰는 문법을 말한다.**

```css
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg;
}
```

### 언제 쓸까?

- 클래스가 **너무 길어질 때**
- 버튼, 카드 같은 **반복되는 UI 패턴**
- HTML을 좀 더 깔끔하게 두고 싶을 때
