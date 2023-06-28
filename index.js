//3.HelloUser
const HelloUser = () => {
   const name = prompt("What is your name?");
   if (name == null) {
    alert("Try Again");
   } else {
    alert(`Hello, ${name} How are you?`);
   }
} 
HelloUser()

