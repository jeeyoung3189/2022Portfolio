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

$(function(){
  $('.ham').click(function(){
    $('.mb_title').toggleClass('on')
    $('.gnb').toggleClass('on')
    $('.ham').toggleClass('on')
  })


  // main nav
  $('.gnb > .aboutme_nav').click(function(){
    $('section').removeClass('on')
    $('#aboutMe').toggleClass('on')
  })

  $('.gnb > .contact_nav').click(function(){
    $('section').removeClass('on')
    $('#contact').toggleClass('on')
  })

  $('.gnb > .portfolio_nav').click(function(){
    $('section').removeClass('on')
    $('#portfolio1').toggleClass('on')
  })

  // about me nav
  $('.ab_nav > .home_nav').click(function(){
    $('section').removeClass('on')
    $('.main').toggleClass('on')
  })

  $('.ab_nav > .portfolio_nav').click(function(){
    $('section').removeClass('on')
    $('#portfolio1').toggleClass('on')
  })

  $('.ab_nav > .contact_nav').click(function(){
    $('section').removeClass('on')
    $('#contact').toggleClass('on')
  })

  // contact nav
  $('.ct_nav > .home_nav').click(function(){
    $('section').removeClass('on')
    $('.main').toggleClass('on')
  })

  $('.ct_nav > .aboutme_nav').click(function(){
    $('section').removeClass('on')
    $('#aboutMe').toggleClass('on')
  })

  $('.ct_nav > .portfolio_nav').click(function(){
    $('section').removeClass('on')
    $('#portfolio1').toggleClass('on')
  })

  // portfolio1 nav
  $('.pf_home').click(function(){
    $('section').removeClass('on')
    $('.main').addClass('on')
  })

  $('#portfolio1 .pf_gnb > .aquarium').click(function(){
    $('section').removeClass('on')
    $('#portfolio2').toggleClass('on')
  })

  $('#portfolio1 .pf_gnb > .letter').click(function(){
    $('section').removeClass('on')
    $('#portfolio3').toggleClass('on')
  })

  // portfolio2 nav
  $('#portfolio2 .pf_gnb > .apple').click(function(){
    $('section').removeClass('on')
    $('#portfolio1').toggleClass('on')
  })

  $('#portfolio2 .pf_gnb > .letter').click(function(){
    $('section').removeClass('on')
    $('#portfolio3').toggleClass('on')
  })

   // portfolio3 nav
   $('#portfolio3 .pf_gnb > .apple').click(function(){
    $('section').removeClass('on')
    $('#portfolio1').toggleClass('on')
  })

  $('#portfolio3 .pf_gnb > .aquarium').click(function(){
    $('section').removeClass('on')
    $('#portfolio2').toggleClass('on')
  })
})
