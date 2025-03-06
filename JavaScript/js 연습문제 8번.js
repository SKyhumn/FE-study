document.forms[0].addEventListener("submit",function(e){
    e.preventDefault();

    const id=document.forms[0].id;
    const password=document.forms[0].password;

    if(id.value===''){
        alert("아이디를 입력해 주세요");
        id.focus();
    }
    else if(id.value.indexOf("@")===-1){
        alert("아이디는 이메일 형식으로 입력해 주세요");
        id.focus();
    }
    
    if(password.value===''){
        alert("비밀번호를 입력해 주세요.");
        password.focus()
    }
    else if(password.length<=4){
        alert("비밀번호는 5자리 이상 입력해 주세요.");
        password.focus();
    }
    
    this.submit();
})
