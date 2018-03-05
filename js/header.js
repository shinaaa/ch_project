$(document).ready(function(){
  var path = location.pathname.split("/");
  console.log(path)
  var len = path.length;
  if(path[path.length-1]==""){
    path = "Home"
  }else{
    path = path[path.length-1].split(".")[0]
    path = path.replace(path[0],path[0].toUpperCase())
  }
  console.log(path)
  var html = '<div class="header-top"><div class="container"><div class="header-text"><span><a href="#">Sign In</a> | </span><span><a href="#">Sign Up</a></span></div></div></div><div class="header-nav"><div class="container"><div class="logo"><img src="img/logo/logo.png" alt=""></div><div class="navigation"><ul class="nav nav-tabs"><li><a href="home.html">Home</a></li><li><a href="style.html">Style</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact Us</a></li></ul></div><div class="nav-menu"><span class="list-icon glyphicon glyphicon-list"></span><ul class="nav-list"><li><a href="home.html">Home</a></li><li><a href="style.html">Style</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact Us</a></li></ul></div></div></div>'
  $(".header").html(html);
  $(".nav>li:contains("+path+")").addClass("active");
  $(".nav-list>li:contains("+path+")").addClass("active");
  $(".nav-menu").click(function(){
    $(".nav-list").slideToggle(200)
  })
  html = '<div class="container"><div class="row"><div class="col-xs-6 col-md-3"><h5>INFORMATION</h5><ul><li><a href="">Home</a></li><li><a href="">Style</a></li><li><a href="">Example</a></li><li><a href="">About</a></li></ul></div><div class="col-xs-6 col-md-3"><h5>CATEGORIES</h5><ul><li><a href="">Gallery</a></li><li><a href="">Blog</a></li><li><a href="">News</a></li><li><a href="">Contact</a></li></ul></div><div class="col-xs-6 col-md-3"><h5>MY ACCOUNT</h5><ul><li><a href="">My Account</a></li><li><a href="">My Address</a></li></ul></div><div class="col-xs-6 col-md-3"><ul><li><input class="form-inline" type="email" placeholder="Enter Your Email"><button>Submit</button></li></ul></div></div><p>Copyright © 2015.Company name All rights reserved</p></div>';
  $(".footer").html(html)
})