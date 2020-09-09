var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var day1=document.getElementsByClassName("day1");
var day2=document.getElementsByClassName("day2");
btn1.addEventListener("click",function(){
    for (var i=0;i<day2.length;i+=1){
        day2[i].style.display = 'none';

      }
      for (var i=0;i<day1.length;i+=1){
        day1[i].style.display = 'block';

      }
  
}

);
btn2.addEventListener("click",function(){
  
  for (var i=0;i<day2.length;i+=1){
    day2[i].style.display = 'block';

  }
  for (var i=0;i<day1.length;i+=1){
    day1[i].style.display = 'none';

  }
}

);
btn3.addEventListener("click",function(){
  
    for (var i=0;i<day2.length;i+=1){
      day2[i].style.display = 'block';
  
    }
    for (var i=0;i<day1.length;i+=1){
      day1[i].style.display = 'none';
  
    }
  }
  
  );