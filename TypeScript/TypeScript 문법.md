# 1. TypeScript 기본 문법

## 타입 선언

예시

```tsx
let 이름:string="최준영";
```

- ‘이름’이라는 변수를 선언
- `:string` :’이름’이라는 변수엔 문자열만 들어갈 수 있도록 지정
- ‘이름’에 다른 타입의 변수를 할당할 시 오류가 생긴다.

## 타입 종류

| 타입 | 설명 | 예시 |
| --- | --- | --- |
| `string` | 문자열 | “안녕하세요” |
| `number` | 숫자(정수, 실수) | 123 |
| `boolean` | 불리언 값 | true, false |
| `null` | 값이 없음(null) | null |
| `undefined` | 정의되지 않음 | undefined |
| `bigint` | 큰 정수 | 123n |
| `symbol` | 고유한 식별자 | Symbol(’id’) |

## 선언한 변수가 배열일 땐?

타입 옆에다 []를 적는다.

예시

```tsx
let n:string[]=["최준영", "이정후", "김광현", "류현진", "박병호", "양현종", "강정호"];
```

- `string[]` :n이라는 배열엔 문자열만 들어갈 수 있다는 의미이다.
- 배열에 다른 타입의 값이 들어갈 경우 오류가 난다.

## 객체를 선언할 땐?

```tsx
let person:{name:string;age:number;favoriteFoods:string[]}={
    name:'최준영',
    age:17,
    favoriteFoods:["치킨", "피자", "스시"]
};
```

- person에 들어갈 속성들의 type을 정해주고 객체를 만든다.

## ?(선택적 타입 적용)

- 타입스크립트에서는 속성명 뒤에 `?` 로 속성이 있을 수도 있고 없을 수도 있음을 명시한다.
- 함수와 객체에서만 쓸 수 있다.

```tsx
let person:{name?:string;age:number;favoriteFoods:string[]}={
    age:17,
    favoriteFoods:["치킨", "피자", "스시"]
};
```

이렇게 name이 없어도 오류가 나지 않는다.

## 유니온 타입

유니온 타입 기호 ‘|’ 가 들어가면 타입을 여러 개 적용 시킬 수 있다.

```tsx
let abc:string|number|undefined=undefined;
```

이러면 abc에 string타입, number타입, undefined타입 중 하나가 들어갈 수 있다.

## 함수 타입 지정

함수의 파라미터 값에 타입을 지정할 수 있다.

동시에 함수의 타입도 지정해줘야한다.

```tsx
function consoleName(name:string):string{
	console.log(name);
}
consoleName("최준영");
```

파라미터 값의 타입이 여러 개일 땐 함수의 타입을 `:void`로 지정한다.

```tsx
function consoleName(name:string|number|undefined):void{
    console.log(name);
}
consoleName("최준영");
```

## Type을 변수에 담아서

```tsx
type member=[string,number,boolean];

const john:member=["John", 123456, true];
```

type 형식의 변수를 선언한 뒤 변수의 타입을 지정할 수 있다.

## 인터페이스

interface는 객체의 구조를 정의하는 문법이다.

### 쓰는 이유

- 코드의 가독성 향상⇒구조가 정리되어 이해하기 쉬움.
- json같은 객체 정보 타입 쉽게 지정

```tsx
interface user{
    name:string,
    age:number,
    phone:string,
    gender:string
    hobby:string[]
    MBTI:string
}

const me:user={
    name:"최준영",
    age:17,
    phone:"010-5858-0999",
    gender:"Male",
    hobby:["운동","SNS","게임"],
    MBTI:"ESFJ"
}
```

- user라는 interface 객체를 생성함.
- me라는 객체 변수를 만들어 user타입을 지정해주고 속성값을 입력함.
