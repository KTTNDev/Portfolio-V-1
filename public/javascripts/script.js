function validation(){
    let username = "fluke";
    let password = "123";

    let UserName = document.getElementById('username').value;
    let passWord = document.getElementById('password').value;

    if((username == UserName) && (password == passWord)) {
       swal("รหัส ถั่วต้วมมมม!", "You clicked the button!", "success");
}else{
   swal("รหัส เผียดดดด!", "You clicked the button!", "error");
}
}