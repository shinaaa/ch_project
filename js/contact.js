$(function(){
  var placeholder;
  var ph;
 /*  $("[type]").focus(function(){
      placeholder = $(this).attr('placeholder');
      //$(this).attr('placeholder',"")
  })
  $("[type]").blur(function(){
    //console.log(placeholder)
    if($(this).val()==""){
      $(this).attr('placeholder',placeholder)
    }
  })
  $("[type]").on('input',function(){
    if($(this).val()==""){
      $(this).attr('placeholder',placeholder)
    }
  }) */
  $(".rate-us li").click(function(e){
    //var i = $(".rate-us>ul>li").index(e.target);
    var i = $(e.target).index();
    console.log(i)
    $(".rate-us>ul>li:lt("+i+1+")").css({
      'background':'#339966',
      'border':'1px solid transparent'
    });
    $(".rate-us>ul>li:gt("+i+")").css({
      'background':'#fff',
      'border':'1px solid #444'
    });
  })
  $(window).scroll(function(e){
    if($(e.target).scrollTop()>400){
      $(".online").show();     
    }else{
      $(".online").hide();
      $(".online-contact").hide()
    }
  })
  $(".online").click(function(){
    $(".online-contact").slideToggle(300)
  })
  $("[data-send=sendMsg]").click(function(e){
    var uname = $("[name=uname]").val();
    var email = $("[name=email]").val();
    var subject = $("[name=subject]").val();
    var message = $("[name=message]").val()
    e.preventDefault();
    $.ajax({
      type:"post",
      url:"data/message.php",
      data:{uname:uname,email:email,subject:subject,message:message},
      dataType:"json",
      success:function(data){
        if(data.code==200){
          $("i.msgSend").css({
            "bottom":5,
            "opacity":1
          })
          setTimeout(function(){
            $("i.msgSend").css({
              "bottom":-10,
              "opacity":0
            })
          },1000)
        }
      }
    })
  })
})