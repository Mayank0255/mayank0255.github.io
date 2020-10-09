function closeMenu(e){document.getElementsByClassName("menu-wrap")[0].getElementsByClassName("toggler")[0].checked=!1}function validate(){var e=document.getElementById("name").value,n=document.getElementById("subject").value,t=document.getElementById("email").value,o=document.getElementById("message").value,a=document.getElementById("error_message")
  a.style.padding="10px"
  var l
  return e.length<5?(l="Please Enter valid Name",a.style.background="#C20D20",a.innerHTML=l,a.style.marginTop="15px",!1):n.length<10?(l="Please Enter Correct Subject",a.style.background="#C20D20",a.innerHTML=l,!1):-1==t.indexOf("@")||t.length<6?(l="Please Enter valid Email",a.style.background="#C20D20",a.innerHTML=l,a.style.marginTop="15px",!1):o.length<=100?(l="Please Enter More Than 100 Characters",a.style.background="#C20D20",a.innerHTML=l,a.style.marginTop="15px",!1):(l="Your Email Has Been Sent",a.style.background="#4BB543",a.innerHTML=l,a.style.marginTop="15px",!0)}function media1000(){x.matches?document.getElementById("message").rows="3":document.getElementById("message").rows="4"}var $header_top=$(".header-top")
$("#fullpage").fullpage({sectionSelector:".vertical-scrolling",slideSelector:".horizontal-scrolling",navigation:!0,navigationPosition:"left",scrollingSpeed:800,autoScrolling:!0,scrollHorizontally:!0,fitToSection:!0,recordHistory:!0,dragAndMove:!0,slidesNavigation:!0,controlArrows:!1,anchors:["home","about","skills","projects","contact"],menu:"#menu",afterSlideLoad:function(e,n,t,o){"fourthSection"==e&&1==o&&($.fn.fullpage.setAllowScrolling(!1,"up"),$header_top.css("background","transparent"),$nav.css("background","transparent"),$(this).css("background","#374140"),$(this).find("h2").css("color","white"),$(this).find("h3").css("color","white"),$(this).find("p").css({color:"#DC3522",opacity:1,transform:"translateY(0)"}))},onSlideLeave:function(e,n,t,o){"fourthSection"==e&&1==t&&($.fn.fullpage.setAllowScrolling(!0,"up"),$header_top.css("background","rgba(0, 47, 77, .3)"),$nav.css("background","rgba(0, 47, 77, .25)"))}})
const scrollDown=document.getElementById("scrollDown"),scrollUp=document.getElementById("scrollUp")
window.onload=function(){switch(location.hash){case"#home":scrollDown.style.transform="translateY(0%)"
  break
  case"":scrollDown.style.transform="translateY(0%)"
    break
  default:scrollDown.style.transform="translateY(180%)"}},window.onhashchange=function(){switch(location.hash){case"#home":scrollDown.style.transform="translateY(0%)"
  break
  default:scrollDown.style.transform="translateY(180%)"}},document.getElementById("menu-links").addEventListener("click",closeMenu,!1)
var x=window.matchMedia("(max-width: 1000px)")
media1000(x),x.addListener(media1000)
