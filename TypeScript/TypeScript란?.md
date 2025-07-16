# TypeScript란?

타입스크립트는 자바스크립트의 상위 집합 언어다. 쉽게 말해 자바스크립트에 “타입(type)”을 추가한 언어이다.

## 쓰는 이유?

**자바스크립트의 단점을 보완**하고, **더 안전하고 효율적인 개발**을 가능하게 하기 때문이다.

- 컴파일 타임에 타입 오류를 잡아준다.
- 타입이 명시되어 있기 때문에, **협업 시 다른 사람이 코드를 이해하기 쉬움**
- 많은 파일, 많은 개발자가 동시 작업할 때 타입이 없으면 어떤 값이 오가는지 몰라서 작동이 어려움

**타입스크립트는 프로그래밍 언어인 동시에 컴파일러 역할도 해준다!!**

## TypeScript 사용 방법

1. Node js를 설치한다.
2. vs code에서 터미널 오픈 후 npm install -g typescript를 입력한다.

![image.png](attachment:338cb952-9d01-4036-acaa-4dc06d1ef73e:image.png)

1. ts파일을 하나 만든다(ex:index.ts)
2. tsconfig.json을 만든다.
    
    기본구조
    
    ```jsx
    {
      "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "strict": true,
        "outDir": "./dist",
        "rootDir": "./src"
      },
      "include": ["src/**/*"],
      "exclude": ["node_modules"]
    }
    ```
    
    tsconfig.json은 typeScript 컴파일러(`tsc`)에게 **어떤 파일을 컴파일할지**와 **어떻게 컴파일할지**를 알려주는 역할을 한다.
    
3. 만든 ts파일에 프로그래밍을 하고 tsc ‘파일경로’로 컴파일을 하면 js파일이 생긴다
    
    ![image.png](attachment:6a6ef43d-9db4-4834-97d7-b1c5d0606c80:image.png)
    
    ![image.png](attachment:1829255e-766a-4148-8b35-f9641c9f3f40:image.png)
    
4. html에서 실행시켜본다.
