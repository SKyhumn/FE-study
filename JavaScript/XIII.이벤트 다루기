# 13.이벤트 다루기

이벤트는 웹 브라우저와 사용자 사이에 상호작용이 발생하는 특정 시점을 의미한다.

| 구분 | 이벤트 | 설명 |
| --- | --- | --- |
| 마우스 이벤트 | onclick | 마우스로 클릭하면 발생한다. |
|  | ondblclick | 마우스로 빠르게 두 번 클릭하면 발생한다. |
|  | onmouseover | 마우스 포인터를 올리면 발생한다. |
|  | onmouseout | 마우스 포인터가 빠져나가면 발생한다. |
|  | onmousemove | 마우스 포인터가 움직이면 발생한다. |
|  | onwheel | 마우스 휠을 움직이면 발생한다. |
| 키보드 이벤트 | onkeypress | 키보드 버튼을 누르고 있는 동안 발생한다. |
|  | onkeydown | 키보드 버튼을 누른 순간 발생한다. |
|  | onkeyup | 키보드 버튼을 눌렀다가 뗀 순간 발생한다. |
| 포커스 이벤트 | onfocus | 요소에 포커스가 되면 발생한다. |
|  | onblur | 요소가 포커스를 잃으면 발생한다. |
| 폼 이벤트 | onsubmit | 폼이 전송될 때 발생한다. |
| 리소스 이벤트 | onload | 웹 브라우저의 리소스 로드가 끝나면 발생한다. |

## 이벤트 등록하기

인라인 방식으로 이벤트 등록하기

```html
<button onclick="clickEvent()">클릭</button>
<script>
    function clickEvent(){
        alert("click")
    }
</script>
```

- HTML 태그에 속성으로 이벤트를 등록하는 방법이다.
- 위 코드는 onclick 이벤트를 button 태그의 속성으로 사용한다.

```html
<form>
    <input type="text" onfocus="focusEvent()" onblur="blurEvent()">
</form>
<script>
    function focusEvent(){
        console.log("focus on");
    }
    function blurEvent(){
        console.log("focus out");
    }
</script>
```

## 프로퍼티 리스너 방식으로 이벤트 등록하기

```html
<button>클릭</button>
<script>
    const btn=document.querySelector("button");
    btn.onclick=function(){
        alert("click");
    }
</script>
```

- 요소 노드에 직접 속성으로 이벤트를 등록하는 방법이다.

## 이벤트 등록 메서드로 이벤트 등록하기

```html
<노드>.addEventListener("<이벤트 타입>", <이벤트 함수>);
```

- addEventListener() 메서드의 매개변수에 이벤트 타입과 이벤트 함수를 전달하면 된다.
- 이벤트 타입은 표에 나온 이벤트 종류에서 on만 빼면
