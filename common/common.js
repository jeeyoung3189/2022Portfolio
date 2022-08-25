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
    $('.ham').toggleClass('on')
    $('.gnb').toggleClass('on')
    $('.mb_title').toggleClass('on')
  })

  $('.gnb > li').click(function(){
    $('.ham, .gnb, .mb_title').removeClass('on')
    $('.ham, .gnb, .mb_title').removeClass('mb')
  })

  // header gnb
  $('.aboutme_nav, .contact_nav').click(function(){
      $('.gnb, .ham').addClass('detail')
  })

  $('.portfolio_nav').click(function(){
    $('.gnb, .ham').addClass('mb')
})

  $('.home_nav, .portfolio_nav').click(function(){
    $('.gnb, .ham').removeClass('detail')
  })

  $('.gnb > li').click(function(){
    $('section').removeClass('on')
    $('#portfolio_con > div').removeClass('on')
    $('.wrap').css({overflow: 'hidden', width: '100vw', height: '100vh'})
  })

  $('.home_nav').click(function(){
    $('#main').addClass('on')
  })

  $('.aboutme_nav').click(function(){
    $('#aboutMe').addClass('on')
  })

  $('.portfolio_nav').click(function(){
    $('#portfolio_con, #portfolio1').addClass('on')
    $('.pf_gnb > li').removeClass('on')
    $('.pf_gnb .apple').addClass('on')
  })
  
  $('.aboutme_nav, .portfolio_nav').click(function(){
    $('.wrap').css({overflowY: 'scroll', width: 'auto', height: 'auto'})

      // 스크롤 시 header
      $('.wrap').on('scroll', function(){
        let scroll = $(this).scrollTop()
        if(scroll < 0 || scroll > 1){
          $('#hd').stop().animate({top:'-300px'}, 200)
        } else {
          $('#hd').stop().animate({top:'0px'}, 200)
        }
        if(scroll < 0 || scroll > 600){
          $('.whoami, .certificate, .career').addClass('show')
        } else {
          $('.whoami, .certificate, .career').removeClass('show')
        }
        if(scroll < 0 || scroll > 700){
          $('.skill, .keyword').addClass('show')
        } else {
          $('.skill, .keyword').removeClass('show')
        }
    });
  })

  $('.contact_nav').click(function(){
    $('#contact').addClass('on')
  })

  // portfolio nav
  let pf_gnb = $('.pf_gnb > li').click(function(){
    $('.pf_gnb > li').removeClass('on')
    $(this).addClass('on')
    let idx = pf_gnb.index(this)
    $('.portfolio').removeClass('on')
    $('.portfolio').eq(idx).addClass('on')
  })
})