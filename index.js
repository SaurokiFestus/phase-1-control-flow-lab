function scuberGreetingForFeet(val){
  // Write your code here!
  if (val <= 400){
    return "This one is on me!";
  }else if (val >= 2000 && val <=2500){
    return "I will gladly take your thirty bucks."
  }else if (val >2500){
    return "No can do."
  }
  else {
    return "Pay for it now!"
  }
  
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC"){
    return "Ok, sounds good."
  }else{
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
  }
