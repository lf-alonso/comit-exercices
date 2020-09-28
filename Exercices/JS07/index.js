"use strict"; 
var realConfirm=window.confirm;
window.confirm=function(){
  window.confirm=realConfirm;
  return true;
}
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }
