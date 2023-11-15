function check(){
					document.getElementsByName("submit1")[0].disabled=false;
					if(document.forms[0].userName.value=="")
						document.getElementsByName("submit1")[0].disabled=true;
					if(document.forms[0].userrealName.value=="")
						document.getElementsByName("submit1")[0].disabled=true;
					if(document.forms[0].userpwd.value=="")
						document.getElementsByName("submit1")[0].disabled=true;
					if(document.forms[0].userpwdagain.value=="")
							document.getElementsByName("submit1")[0].disabled=true;
					if(document.forms[0].sex.value=="")
						document.getElementsByName("submit1")[0].disabled=true;
					if(document.forms[0].telephonenumber.value=="")
						document.getElementsByName("submit1")[0].disabled=true;
					if(document.forms[0].email.value=="")
						document.getElementsByName("submit1")[0].disabled=true;
					if(document.forms[0].address.value=="")
						document.getElementsByName("submit1")[0].disabled=true;
						
					if(document.forms[0].userpwd.value!=''&&document.forms[0].userpwdagain.value!=''&&document.forms[0].userpwd.value!=document.forms[0].userpwdagain.value){
							document.getElementsByName('submit1')[0].disabled=true;
							document.getElementsByClassName('alert_text')[0].textContent="前后两次密码不一致！请重新输入喔!"
					}else{
							document.getElementsByClassName('alert_text')[0].textContent=''
					}	
					if(document.forms[0].telephonenumber.value.length!=11){
						document.getElementsByName('submit1')[0].disabled=true,document.getElementsByClassName('alert_text')[0].textContent="电话号码请输入11位"
					}else if(document.forms[0].telephonenumber.value.length==0)
						document.getElementsByClassName('alert_text')[0].textContent=""
					var email=document.getElementById('email').value;
					
					var res=email.match('@');
					if(res!=null){
						console.log('Yes');
					}else
						if(email)
							console.log('No'),document.getElementsByClassName("alert_text")[0].textContent="邮箱输入形式错误！"
					}
						