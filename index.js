function calculator(type, val1, val2) {
  if (type = "+") {
    return(val1 + val2);
  } else if(type = "-"){
    return(val1 - val2);
  }else if(type = "*"){
    return(val1 * val2)
  }else if (type = "/") {
    return(val1 / val2)
  }
}

calculator("*", 5, 6)