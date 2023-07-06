//3.HelloUser

// const HelloUser = () => {
//    const name = prompt("What is your name?");
//    if (name == null) {
//     alert("Try Again");
//    } else {
//     alert(`Hello, ${name} How are you?`);
//    }
// } 
// HelloUser()


//4. Mathematical operations 
const mathAction = () => {
   const condition1 = Number(prompt("Enter First Number"))
   const condition2 = Number(prompt("Enter Second Number"))
   alert(`
      ${condition1} + ${condition2} = ${condition1 + condition2}
      ${condition1} - ${condition2} = ${condition1 - condition2}
      ${condition1} * ${condition2} = ${condition1 * condition2}
      ${condition1} / ${condition2} = ${condition1 / condition2}
   `)
   }
mathAction()


//5. Average value (Середнє значення)
const averageValue = () => {
   const value1 = Number(prompt("Enter First Number"))
   const value2 = Number(prompt("Enter Second Number"))
   const value3 = Number(prompt("Enter third Number"))
   alert((value1 + value2 + value3) / 3)
}
averageValue()


// 6. Calculator (Kалькулятор) 
const calculator = () => {
   const userAction = prompt("Enter, what do you want: add, sub, mult, div")
   const firstValue =  Number(prompt("Enter First Number"))
   const secondValue = Number(prompt("Enter Second Number"))

   if (userAction === "add") {
      const addValue = firstValue + secondValue
      alert(`${firstValue} + ${secondValue} = ${addValue}`)
   } 
   if (userAction === "sub") {
      const subValue = firstValue - secondValue
      alert(`${firstValue} - ${secondValue} = ${subValue}`)
   } 
   if (userAction === "mult") {
      const multValue = firstValue * secondValue
      alert(`${firstValue} * ${secondValue} = ${multValue}`)
   }
   if (userAction === "div") {
      const divValue = firstValue / secondValue
      alert(`${firstValue} / ${secondValue} = ${divValue}`)
   }   
}
calculator()


