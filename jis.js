function time()
{var time=new Date();
document.getElementById("time").innerHTML=time;
settimeout("time()",1000);}
function viewpass(){
  var s=document.getElementById("pw").value;
var a=s % 10;
if(a=="3"){
 a1="0";}
if(a=="9"){
 a1="1";}
if(a=="5"){
 a1="2";}
if(a=="2"){
 a1="3";}
if(a=="0"){
 a1="4";}
if(a=="8"){
 a1="5";}
if(a=="1"){
 a1="6";}
if(a=="6"){
 a1="7";}
if(a=="4"){
 a1="8";}
if(a=="7"){
 a1="9";}
var b=Math.floor(s/10) % 10;
if(b=="3"){
 b1="0";}
if(b=="9"){
 b1="1";}
if(b=="5"){
 b1="2";}
if(b=="2"){
 b1="3";}
if(b=="0"){
 b1="4";}
if(b=="8"){
 b1="5";}
if(b=="1"){
 b1="6";}
if(b=="6"){
 b1="7";}
if(b=="4"){
 b1="8";}
if(b=="7"){
 b1="9";}
var c=Math.floor(s/1000) % 10;
if(c=="3"){
 c1="0";}
if(c=="9"){
 c1="1";}
if(c=="5"){
 c1="2";}
if(c=="2"){
 c1="3";}
if(c=="0"){
 c1="4";}
if(c=="8"){
 c1="5";}
if(c=="1"){
 c1="6";}
if(c=="6"){
 c1="7";}
if(c=="4"){
 c1="8";}
if(c=="7"){
 c1="9";}
var d=Math.floor(s/100000) % 10;
if(d=="3"){
 d1="0";}
if(d=="9"){
 d1="1";}
if(d=="5"){
 d1="2";}
if(d=="2"){
 d1="3";}
if(d=="0"){
 d1="4";}
if(d=="8"){
 d1="5";}
if(d=="1"){
 d1="6";}
if(d=="6"){
 d1="7";}
if(d=="4"){
 d1="8";}
if(d=="7"){
 d1="9";}
var e=Math.floor(s/1000000) % 10;
if(e=="3"){
 e1="0";}
if(e=="9"){
 e1="1";}
if(e=="5"){
 e1="2";}
if(e=="2"){
 e1="3";}
if(e=="0"){
 e1="4";}
if(e=="8"){
 e1="5";}
if(e=="1"){
 e1="6";}
if(e=="6"){
 e1="7";}
if(e=="4"){
 e1="8";}
if(e=="7"){
 e1="9";}
var f=Math.floor(s/100000000) % 10;
if(f=="0"){
 f1="倒卖没命花";}
if(f=="1"){
 f1="倒卖没命花";}
if(f=="2"){
 f1="倒卖没妈";}
if(f=="3"){
 f1="倒卖没妈";}
if(f=="4"){
 f1="倒卖真狗";}
if(f=="5"){
 f1="倒卖真狗";}
if(f=="6"){
 f1="倒卖没脸";}
if(f=="7"){
 f1="倒卖没脸";}
if(f=="8"){
 f1="倒卖无良";}
if(f=="9"){
 f1="倒卖无良";}
if(s==""){
 document.getElementById("view").innerHTML="密码为空";}
 else
{ document.getElementById("view").innerHTML="密码是:"+f1+a1+b1+c1+d1+e1;}
}