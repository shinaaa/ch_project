 $(document).ready(function(){
  //轮播图
  function banner(){
    var i = 1;
    return function(){
      i++;
      $(".img-box").hide("slide",800);
      setTimeout(function(){
        $(".img-box>img").attr('src',"img/banner/banner"+i+".jpg");
        $(".img-box").show("explode",800)
        if(i==4){
          i=0
        }
      },800)
    } 
  }
  var showBanner = banner(); 
  setInterval(showBanner
  ,4000)  
  //完毕
  
  var mask = document.querySelectorAll(".design .mask");
  for(var i=0;i<mask.length;i++){
    mask[i].onmouseenter = function(){
      this.previousElementSibling.style.transform = "rotatey(90deg)";
      var self = this;
      setTimeout(function(){
        self.parentNode.firstElementChild.style.transform = "rotateY(0deg)"
      },150)
    }
    mask[i].onmouseout = function(){
      this.parentNode.firstElementChild.style.transform = "rotateY(-90deg)";
      var self = this;
      setTimeout(function(){
        self.previousElementSibling.style.transform = "rotatey(0deg)";
      },150)
    } 
  }

  mask = document.querySelectorAll(".style .mask");
  for(var i=0;i<mask.length;i++){
    mask[i].onmouseenter = function(){
      var self = this;
      setTimeout(function(){
        self.nextElementSibling.style.zIndex = 10;
      },100)
      
      this.nextElementSibling.style.left = 42+'%';
      this.style.opacity = 0.4
    }
    mask[i].onmouseout = function(){     
      this.nextElementSibling.style.left = -42+'px';
      var self = this;
      setTimeout(function(){
        self.nextElementSibling.style.zIndex = -1;
      },250)
      this.style.opacity = 0
    }
  }
 })