12.폼 조작하기
예시 폼
<form name="frm1">
    <input type="text" placeholder="hasdfl">
</form>
<form name="frm2">
    <input type="text">
</form>
<form name="frm3">
    <input type="text">
</form>
​
form속성 사용하기
document.forms//모든 form 요소 노드의 정보가 담겨 있다.
document.forms[n]//인덱스를 이용해 form 요소 노드에 하나씩 접근할 수 있다.
​
name속성 사용하기
document.frm1//form 태그의 name 속성값이 frm1인 노드
document.frm2//form 태그의 name 속성값이 frm2인 노드
document.frm3//form 태그의 name 속성값이 frm3인 노드
​
폼 요소 선택하기
예시 폼
<form name="frm1">
    <label for="uname">이름</label>
    <input type="text" id="uname" name="uname"><br>
    <label for="uname">나이</label>
    <input type="text" id="age" name="age"><br>
    <label for="uname">성별</label>
    <select id="gender" name="gender">
        <option value="male">male</option>
        <option value="famale">female</option>
    </select>
    <button type="submit">전송</button>
</form>
​
접근 방법
document.frm1.elements[0];
document.frm1.elements['uname']);
​
document.폼이름.element[]방식으로 폼 요소에 접근할 수 있다.
document.frm1.uname;
document.frm1.age;
document.frm1.gender;
​
또한 elments 속성을 생략하고 name 속성값으로 바로 접근해도 된다.
폼 요소의 입력값 다루기
document.frm1.uname.value;
​
document.폼이름.name속성값.value로 폼 요소의 입력값에 접근할 수 있다.
체크박스 다루기
체크박스에 체크 표시가 있는지는 checked 속성으로 확인할 수 있다.
체크박스 노드에 접근한 뒤에 checked 속성이 있는지 확인할 수 있다.
const checkbox=document.querySelectorAll("[type='checkbox']");//체크박스 노드에 접근
checkbox.forEach(i=>{
    i.checked=true;//모두 체크표시
})
​
라디오버튼 다루기
라디오버튼은 체크박스와 같은 방식으로 값을 다루기 때문에 체크박스처럼 checked 속성으로 라디오버튼이 선택됐는지 확인하고 value 속성으로 값을 가져오면 된다.
const checkbox=document.querySelectorAll("[type='radio']");//라디오버튼 노드에 접근
checkbox.forEach(i=>{
    if(i.value=='apple'){
        i.checked=true;//value가 apple인것만 체크
    }
})
​
콤보박스 다루기
체크박스나 라디오버튼에서 checked 속성으로 선택 항목을 확인할 수 있는 것처럼 콤보박스에서는 selected 속성으로 선택 항목을 확인할 수 있다.
const option=document.querySelectorAll("option");//콤보박스 노드에 접근
for(let i=0;i<option.length;i++){
    if(option[i].selected==true){
        console.log(option[i].value);//선택된것 콘솔창에 출력
    }
}
​
파일 업로드 요소 다루기
const files=document.frm.upload.files;
​
document.폼이름.input태그의 name속성값.files를 사용하여 리스트형식으로 접근할 수 있다.
다음과 같은 여러 정보를 가져올 수 있다.
files[0].name; //파일 이름
files[0].size; //파일 크기
files[0].type; //파일 타입
files[0].lastModifiedDate; //파일 마지막 수정일
​
폼 요소 관련 기타 메서드
메서드
설명
submit()
폼 요소의 값을 전송(submit)한다.
focus()
폼 요소에 포커스(커서)를 이동한다.
