  // Callback function:
  function soap(){
    return soap;
}
function flower(){
    return flower;
}
function banana(){
    return "Banana"
}
function shop(item1, item2, func){
    console.log(item1);
    console.log(item2);
    console.log(func ());
}

shop("","Buy",banana);