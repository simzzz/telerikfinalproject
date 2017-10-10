import{templates}from"templates";import{UserRequester}from"userRequester";const registerController=function(){templates.getPage("register",{}).done(()=>{$("#dropdownMenuLink").click(()=>{$("#dropdownMenu").hasClass("hidden")?$("#dropdownMenu").removeClass("hidden"):$("#dropdownMenu").addClass("hidden")}),$("#title").html("Sign Up"),$("#subtitle").html("And start using our platform right away!");const e=$("#btn-register"),r=$("#tb-username"),t=$("#tb-email"),s=$("#tb-password");e.on("click",()=>{if(t.val()&&s.val()){const e=new UserRequester;e.createUserWithEmailAndPassword(t.val(),s.val()).catch(function(e){const r=e.code,t=e.message;toastr.error(`There was an error: ${r} - ${t}\n                        Please try again.`)}).then(t=>{e.currentUser.updateProfile({displayName:r.val(),photoURL:"images/default-user.jpg"}).then(()=>{toastr.success(`You have successfully registered as ${r.val()}`),location.hash="/home",location.reload()})})}else toastr.error("Fill all the fields!")})})};export{registerController};