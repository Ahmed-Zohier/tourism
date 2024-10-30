function copyText() {
    // الحصول على عنصر النص
    var textToCopy = document.getElementById("textToCopy");

    // تحديد النص ونسخه
    textToCopy.select();
    document.execCommand("copy");

    // إظهار رسالة alert عند النسخ
    alert("تم نسخ النص بنجاح!");
}

var log = ("looo")


log.onclick=function(){
document.getElementById("loin").innerHTML
}

document.getElementById("log").onclick = function() {
    var formDiv = document.getElementById("loin");
    formDiv.style.display = formDiv.style.display === "none";
};

var x = document.getElementsByClassName("btn-close")

x.onclick=function (){
    style.display = "none";
}