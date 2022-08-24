



// 메인 배경
let stars=800;
let $stars=$(".stars");
let r=800;
for(let i=0;i<stars;i++){
  let $star=$("<div/>").addClass("star");
  $stars.append($star);
}
$(".star").each(function(){
  let cur=$(this);
  let s=0.2+(Math.random()*1);
  let curR=r+(Math.random()*300);
  cur.css({ 
    transformOrigin:"0 0 "+curR+"px",
    transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
  })
})

// about me skill
function showEx(evt, exList) {
  let i, tabmenu, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i=0; i<tabcontent.length; i++){
      tabcontent[i].style.display = "none";
  }

  tabmenu = document.getElementsByClassName("tabmenu");
  for (i=0; i<tabmenu.length; i++){
      tabmenu[i].className = tabmenu[i].className.replace(" on", "");
  }
  
  document.getElementById(exList).style.display = "flex";
  evt.currentTarget.className += " on";
}



$(function(){
  $('.ham').click(function(){
    $('.mb_title').toggleClass('on')
    $('.gnb').toggleClass('on')
    $('.ham').toggleClass('on')
  })

  // gnb
  $('.aboutme_nav, .contact_nav').click(function(){
      $('.gnb').addClass('detail')
  })

  $('.home_nav, .portfolio_nav').click(function(){
    $('.gnb').removeClass('detail')
  })

  $('.home_nav').click(function(){
    $('section').removeClass('on')
    $('#portfolio_con > div').removeClass('on')
    $('#main').addClass('on')
    $('.wrap').css({overflow: 'hidden', width: '100vw', height: '100vh'})
  })

  $('.aboutme_nav').click(function(){
    $('section').removeClass('on')
    $('#portfolio_con > div').removeClass('on')
    $('#aboutMe').addClass('on')
    $('.wrap').css({overflowY: 'auto', width: 'auto', height: 'auto'})
  })

  $('.portfolio_nav').click(function(){
    $('section').removeClass('on')
    $('#portfolio_con > div').removeClass('on')
    $('#portfolio_con, #portfolio1').addClass('on')
    $('.pf_gnb > li').removeClass('on')
    $('.pf_gnb .apple').addClass('on')
    $('.wrap').css({overflowY: 'auto', width: 'auto', height: 'auto'})
  })

  $('.contact_nav').click(function(){
    $('section').removeClass('on')
    $('#portfolio_con > div').removeClass('on')
    $('#contact').addClass('on')
    $('.wrap').css({overflow: 'hidden', width: '100vw', height: '100vh'})
  })

  // portfolio1 nav
  let pf_gnb = $('.pf_gnb > li').click(function(){
    $('.pf_gnb > li').removeClass('on')
    $(this).addClass('on')

    let idx = pf_gnb.index(this)

    $('.portfolio').removeClass('on')
    $('.portfolio').eq(idx).addClass('on')
  })



  // 스크롤 시 header
  var lastScrollTop = 0, delta = 15;

  $('#aboutMe').on('scroll', function(){
      // let scrollTop = $(this).scrollTop()
      // if(Math.abs(lastScrollTop - scrollTop) <= delta)
      // return;
      // if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
      //     $("#hd").css("top","-100%");
      // } else {
      //     $("#hd").css("top","0px");
      // }
      // lastScrollTop = scrollTop;

      let scroll = $(this).scrollTop()
      console.log(scroll)
  });



})