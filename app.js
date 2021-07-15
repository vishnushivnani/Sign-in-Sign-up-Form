const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
const log_in_btn = document.querySelector('#log-in-button');
const signUp_btn = document.querySelector('#signUp-button')
const auth = firebase.auth();

sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
  
});
log_in_btn.addEventListener('click',()=>{
  Login();
})
signUp_btn.addEventListener('click',()=>{
  SignUp()
})
function Login(){
  var email = document.getElementById("Email");
  var password = document.getElementById("Password");

  const promise = auth.signInWithEmailAndPassword(email.value,password.value)
  promise.catch(e=>alert(e.message));
  
  if(password.value==="vishnu939"&&email.value==="vishnushivnani939"){
  alert("Congratulations"+Username.value+"You Just Signed In")}
}
function SignUp(){
  var email = document.getElementById("Email2");
  var password = document.getElementById("Password2");
  var Username = document.getElementById("Username")
  const promise = auth.createUserWithEmailAndPassword(email.value,password.value)
  promise.catch(e=>alert(e.message));
  alert("Congratulations"+Username.value+"You Just Signed In")
  if(user){
 }
}
function SignOut(){
  auth.signOut();
}
auth.onAuthStateChanged(function(user){
  if(user){
  
   var email = user.email
   alert(" Active User "+email)
   location.href = "https://vishnushivnani.github.io/ThePrototype-S2/";
 auth.signOut();
 alert("Signed out")


   
  
 //  button.onclick = "location.href = 'www.yoursite.com'"
    
  setup()
  }else{
      alert("No Active User")

  }

})
