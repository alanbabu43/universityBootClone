// var navLinks = document.getElementById("navLinks");

// function showMenu() {
//     navLinks.style.right = "0";
// }

// function hideMenu() {
//     navLinks.style.right = "-200px";
// }
// var navlinks=document.getElementById('navLinks');


function validateForm(){
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var phone=document.getElementById("phone");
    var subject=document.getElementById("subject");
    var message=document.getElementById("message");
    
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneno = /^\d{10}$/;
    
    if(message.value=="" || name.value=="" || email.value=="" || subject.value=="" || phone.value==""){
        alert("please fill all the data");
        return false;
    }
    if(name.value.length<3){
        alert("please enter a valid name");
        return false;
    }
    if(!email.value.match(validRegex)){
        alert("email address not valid");
        return false;
    }
    if(!phone.value.match(phoneno)){
         alert("enter valid number");
         return false;
    }
    if(message.value.length<10){
        alert("message should be atleast 8 letter long");
        return false;
    }
    if(subject.value.length<10){
        alert("subject should be atleast 8 letter long");
        return false;
    }
    return true;
}
// $("#submit-form").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbyLd-ti7Mkd_l34ggJ3h9I_4NMQT7V1Na9PXQ_NaPRkqfBE8PGF4lhnp1-CZZgD0BfY/exec",
//         data:$("#submit-form").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })