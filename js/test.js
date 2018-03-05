$(()=>{
  $(".shownav").click(function(){
    $(".hide").toggleClass("show")
  })
  setTimeout(()=>{
    $(".wraper").hide("explode",1000)
  },2000)
 
})