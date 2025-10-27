# 11.웹 폰트와 아이콘 폰트

## 웹 폰트 적용하기

- font-family 속성에서 글꼴을 지정할 때 시스템에 없는 글꼴도 많기 때문에 웹 폰트 방식으로 추가해서 폰트를 사용한다.

### 대표적인 웹 폰트 사이트 구글 폰트 사용하기

![image.png](./img/스크린샷9)

1.폰트를 찾았으면 ‘Get font ‘버튼을 누른다.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b71c3dad-f980-4ed0-8708-034050be882c/9154e185-a7df-49e1-896f-202ebee2a46c/image.png)

2.’Get embed code’버튼을 누른다.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b71c3dad-f980-4ed0-8708-034050be882c/ea3488e5-4f40-4cfa-a69a-2999db83a2b9/image.png)

3.’import’를 선택하고 @import문 코드와 그 아래에 있는 css코드를 복사해 <style>태그 안에 넣어준다

### 코드

```html
<style>
    @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
	  .black-han-sans-regular {
        font-family: "Black Han Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
</style>
```

## 아이콘 폰트 적용하기

- 다양한 아이콘을 웹 폰트를 사용하는 것처럼 간단하고 쉽게 사용하는 기술이다.
- 다양한 아이콘을 이미지 파일이 아니라 css를 적용하는 방식으로 간단하게 사용할 수 있다.

### cdnjs, font-awesome으로 아이콘 폰트 적용하기

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b71c3dad-f980-4ed0-8708-034050be882c/aa22e256-bbed-450b-8e08-7e246eb547d0/image.png)

1.cdnjs사이트에서 font-awesome을 검색하고 ‘</>’를 눌러 코드를 복사한 뒤 html 파일의 head 태그 안에 붙여 넣는다.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b71c3dad-f980-4ed0-8708-034050be882c/3ee6014d-c955-4f5f-b73c-0c36afc4d502/image.png)

2.font-awesome사이트에서 원하는 아이콘 찾기

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b71c3dad-f980-4ed0-8708-034050be882c/3c63fef9-b32c-4c10-83b6-2a1fff624a56/image.png)

3.코드를 복사하고 html 문서에 붙여 넣으면 된다.

### 코드

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--font-awesome라이브러리 주소-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
		<i class="fa-brands fa-apple"></i>
    <i class="fa-brands fa-facebook"></i>
</body>
```
