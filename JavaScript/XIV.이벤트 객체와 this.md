# 14.이벤트 객체와 this

## 이벤트 객체 사용하기

지금까지 사용하지는 않았지만, 사실 이벤트가 발생하면 실행되는 함수에는 내부적으로 이벤트 객체가 매개변수로 전달된다. 다음 코드는 addEventListener() 메서드로 이벤트를 등록하는 코드이다.

```jsx
const btn=document.querySelector("button");
btn.addEventListener("click", function(event){
    console.log(event);
})
```

매개변수를 사용해 이벤트 객체를 받으면 이벤트 객체를 활용할 수 있게 된다.

### PointEvent 객체의 주요 속성

| 속성 | 설명 |
| --- | --- |
| clientX | 마우스가 클릭된 x좌표(수평 스크롤 포함 X) |
| clientY | 마우스가 클릭된 y좌표(수직 스크롤 포함 X) |
| pageX | 마우스가 클릭된 x좌표(수평 스크롤 포함 O) |
| pageY | 마우스가 클릭된 y좌표(수직 스크롤 포함 O) |
| screenX | 모니터의 왼쪽 위 모서리를 기준으로 마우스가 클릭된 x좌표 |
| screenY | 모니터의 왼쪽 위 모서리를 기준으로 마우스가 클릭된 y좌표 |

```jsx
const btn = document.querySelector("button");
btn.addEventListener("click", function(event){
    console.log(`clientX: ${event.clientX}`);
    console.log(`clientY: ${event.clientY}`);
    console.log(`pageX: ${event.pageX}`);
    console.log(`pageY: ${event.pageY}`);
    console.log(`screenX: ${event.screenX}`);
    console.log(`screenY: ${event.screenY}`);
    console.log();
})
```

위 코드는 이벤트 객체를 이용해 표에 정리한 속성 값을 출력하는 코드이다.

### KeyboardEvent 객체의 주요 속성

| 속성 | 설명 |
| --- | --- |
| keyCode | 키보드에서 눌린 키의 유니코드 값을 반환한다. |
| ctrlKey |  ctrl 키가 눌렸으면 true, 그렇지 않으면 false를 반환한다. |
| altKey | alt 키가 눌렸으면 true, 그렇지 않으면 false를 반환한다. |
| shiftKey | shift 키가 눌렸으면 true, 그렇지 않으면 false를 반환한다. |

```jsx
const btn = document.querySelector("input");
btn.addEventListener("keydown", function(event){
    console.log(`keyCode: ${event.keyCode}`);
    console.log(`ctrlKey: ${event.ctrlKey}`);
    console.log(`altKey: ${event.altKey}`);
    console.log(`shiftKey: ${event.shiftKey}`);
    console.log();
})
```

- 위 코드는 KeyboardEvent 객체의 속성을 출력하는 코드이다.
- 실행결과를 보면 d는 유니코드가 68임을 알 수 있다. 이런 식으로 사용자가 어떤 키를 입력했는지 알 수 있다.

## 이벤트 취소하기

- HTML 태그 중 일부는 기본으로 이벤트가 적용되어 있다. (a태그, form태그)
- preventDefault() 메서드를 사용하면 태그에 기본으로 연결된 이벤트를 취소할 수 있다.

```jsx
const links=document.querySelectorAll("a");
links.forEach(i=>{
    i.addEventListener("click", function(e){
        e.preventDefault();
    });
})
```

위 코드는 모든 a태그에 연결된 클릭 이벤트를 취소하는 코드다.

## this 키워드 사용하기

이벤트 함수 내부에서 this 키워드를 사용하면 이벤트가 발생한 요소 노드를 바로 가리킬 수 있다.

```jsx
const texts=document.querySelectorAll("p");
texts.forEach(i=>{
    i.addEventListener("click", function(){
        if(this.style.color=="red"){
            this.style.color="black";
        }
        else{
            this.style.color="red"
        }
    });
})
```

위 코드는 p태그를 클릭할 때마다 텍스트 색상이 빨간색과 검은색으로 번갈아 바꾸는 코드다.

※ 화살표 함수로 작성하면 this의 범위가 달라져서 this가 이벤트 발생 노드를 가리키지 않는다.
