function get()
{
    var Rusername=document.getElementById("Rusrname").value;
    var Rpassword=document.getElementById("Rpwd").value;
    var conpwd=document.getElementById("conpwd").value;
    if(Rpassword==conpwd)
    {
        window.location.assign("Login.html")
    }
}
function check()
{
    var username=document.getElementById("usrname").value;
    var password=document.getElementById("pwd").value;
    if(username=="karthi2002"||username=="ragav2002"||username=="jawa2002"||username=="naveen2002")
    {
        if(password=="123456")
        {
            window.location.assign("Home.html")
        }
    }
    else
    {
        alert("Account not found");
    }
}
