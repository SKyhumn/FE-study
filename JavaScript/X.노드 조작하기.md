# 10.노드 조작하기

## 콘텐츠 조작하기

선택한 노드의 타입이 요소 노드라면 다음 표에 정의된 속성을 사용해 콘텐츠를 조작할 수 있다.

| 속성 | 설명 |
| --- | --- |
| textContent | 요소 노드의 모든 텍스트에 접근한다. |
| innerText | 요소 노드의 텍스트 중 웹 브라우저에 표시되는 텍스트에만 접근한다. |
| innerHTML | 요소 노드의 텍스트 중 HTML 태그를 포함한 텍스트에만 접근한다. |

※ id와 css query메서드만 적용할 수 있다.

## 스타일 조작하기

```jsx
<노드>.style.<css 속성명>=<속성값>;
```

```jsx
const title=document.querySelector(".title");
title.style.backgroundColor="blue";
```

- 선택된 노드의 타입이 요소 노드라면 style 속성으로 요소에 스타일을 지정할 수 있다.
- 여러개의 같은 태그의 스타일을 바꾸고 싶다면 forEach()를 쓰면 된다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            color:white;
            background-color:blue;
            width:max-content;
        }
    </style>
</head>
<body>
    <p>텍스트1</p> <!--바꿀거-->
    <p>텍스트2</p> <!--바꿀거-->
</body>
</html>
```

```jsx
const text=document.querySelectorAll("p");
text.forEach(t=>{
    t.style.backgroundColor="red";//배경색을 파란색으로 변경
    t.innerHTML=`<h1>텍스트</h1>`;//p태그를 h1태그로 변경
})
```

## 클래스 속성 조작하기

| <노드>.classList.add(”class 속성값”) | 추가 |
| --- | --- |
| <노드>.classList.remove(”class 속성값”) | 삭제 |
| <노드>.classList.toggle(”class 속성값”) | 추가와 삭제 반복 |

※ querySelector, querySelectorAll로 접근한 노드만 가능하다.

```html
 		<style>
        .title{
            color:white;
            background-color:red;
            width:max-content;
        }
    </style>
		(중략)
    <h1 class="title">타이틀</h1>
    <p>텍스트1</p>
    <p>텍스트2</p>
    <script>
        const p = document.querySelectorAll("p");//노드 선택하기
            p.forEach(element => {
            element.classList.add("title");//p태그에 title 클래스 추가하기
        });
        const title=document.querySelector(".title");//노드 선택하기
        title.classList.remove("title");//h1태그의 title 클래스 삭제하기
    </script>
```

## 메서드로 속성 조작하기

| <노드>.getAttribute(”속성명”); | 속성값을 가져온다. |
| --- | --- |
| <노드>.setAttribute(”속성명”, “속성값”); | 속성값을 설정한다. |
| <노드>.removeAttribute(”속성명”); | 속성을 삭제한다. |
