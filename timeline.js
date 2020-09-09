AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  startEvent: 'load',

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


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
      AOS.refresh();
}

);
btn2.addEventListener("click",function(){
  
  for (var i=0;i<day2.length;i+=1){
    day2[i].style.display = 'block';
    
  }
  for (var i=0;i<day1.length;i+=1){
    day1[i].style.display = 'none';

  }
  AOS.refresh();
}

);
btn3.addEventListener("click",function(){
  
    for (var i=0;i<day2.length;i+=1){
      day2[i].style.display = 'block';
  
    }
    for (var i=0;i<day1.length;i+=1){
      day1[i].style.display = 'none';
  
    }
    AOS.refresh();
  }
  
  );
 
