$(function(){
  $(".img-box>img").hover(
    function(e){
      $(e.target).css("cursor","pointer")
      $(e.target).siblings(".desc").css("bottom",0)
    },
    function(e){
      $(e.target).siblings(".desc").css("bottom",-60)
    }
  )

  var src = [];
  $(".like").click(function(e){
    $e = $(e.target);
    var img = $e.prev();
    var idx = src.indexOf($(img).attr('src'));
    $e.toggleClass("liked").html("liked");
    if($e.hasClass("liked")){
      $e.html("liked");
      var cloneImg =$(img).clone(true);
      src.push($(img).attr('src'));
      $(cloneImg).addClass("clone-img");
      $(cloneImg).appendTo($(".wraper"));
    }else{
      $e.html("like");
      $(".clone-img[src="+"'"+src[idx]+"'"+"]").remove()
    }
    
  })
  
})