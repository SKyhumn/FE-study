# 11. 노드 추가

노드 추가 메서드

| 구분 | 메서드 | 설명 |
| --- | --- | --- |
| 노드 생성 | createElement() | 요소 노드를 생성한다 |
|  | createTextNode() | 텍스트 노드를 생성한다. |
|  | createAttribute() | 속성 노드를 생성한다. |
| 노드 연결 | <기준 노드>.appendChild(<자식 노드>) | 기준 노드에 자식 노드를 연결한다. |
|  | <기준 노드>.setAttributeNode(<속성 노드>) | 기준 노드에 속성 노드를 연결한다. |

## 노드 추가하는 법

```html
<script>
    const a=document.createElement("a");//a 요소노드 추가
    document.body.appendChild(a);//문서에 넣기
    const link=document.querySelector("a");//querySelector로 접근

    const text=document.createTextNode("네이버로 가기");//텍스트 노드 추가
    link.appendChild(text);//querySelector로 접근한 a에 text 넣기
        
    const naver=document.createAttribute("href");//속성 추가
    naver.value="https://www.naver.com/";//속성값 지정
    link.setAttributeNode(naver);//querySelector로 접근한 a에 속성값 넣기
</script>
```

## 노드 삭제하는 법

```jsx
<부모 노드>.removeChild.(<자식 노드>);
```

```jsx
//노드 만들기
const a=document.createElement("a");
document.body.appendChild(a);
const link=document.querySelector("a");
(중략)
//노드 삭제하기
link.parentNode.removeChild(link);
```
