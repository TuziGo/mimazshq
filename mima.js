var password=""
password=prompt('请输入访问密码','');
function custom_close()
{
window.opener=null;
window.open('','_self');
window.close();
}
if (password !='123')
{
custom_close();
alert('密码错误');
window.location.href='about:blank';
}
