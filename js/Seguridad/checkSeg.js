function checkSeg(data) {
  var arr = ["<", ">", "'", "/", "*", "=", "!", "#", "{", "}", "+", "%", "&", "(", ")", "$"];
  for (var i = 0; i < arr.length; i++) {
    if(data.includes(arr[i])){
      return true;
    }else{
      return false;
    }
  }
}

function session(){
  if(!(localStorage.getItem('1drDS4U0C'))){
    window.location ="login.html";
  }
}

function unset(){
  localStorage.removeItem('1drDS4U0C');
}