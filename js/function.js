// .HOME Slide
$(function(){

     var $slides=$('section>.home>ul>li');
     var nowIdx=0;
    
     function fadeInOut(){

        $slides.filter('.on').stop().fadeOut(600).removeClass('on');
        $slides.eq(nowIdx).stop().fadeIn(600).addClass('on');
     };  
  
     setInterval(function(){
        if(nowIdx<1){
        nowIdx++;
        }else{
        nowIdx=0;
        }
        fadeInOut();
     },2000);
});


// .NEW Slide
$(function(){

	var $indicator=$('section>.new>.slides-pagination>li>a');
	var $container=$('section>.new>.slides-container');
	var nowIdx=0;
    var intervalKey;

	var $btnPrev=$('section>.new>button.prev');
	var $btnNext=$('section>.new>button.next');
	
	function moveFn(){
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
      
      $container.stop().animate({left:-1920*nowIdx},2500);
   };
  
      $indicator.on('click',function(evt){
         clearInterval(intervalKey)
         evt.preventDefault();
         nowIdx=$indicator.index(this);
         moveFn();
      });
   
      $btnPrev.on('click',function(){
         if(nowIdx>0){
            nowIdx--;
            }else{
            nowIdx=3;
            }
         moveFn();
      },2500);
   
      $btnNext.on('click',function(){
         if(nowIdx<3){
            nowIdx++;
            }else{
            nowIdx=0;
            }
         moveFn();
      });

	      intervalKey=setInterval(function(){
            if(nowIdx<3){
            nowIdx++;
            }else{
            nowIdx=0;
            }
         moveFn();
       },3000);
  
});
	
	
// header_gnb
$(function(){
  
  var $mnu = $(".gnb a");
  var mnuIdx = 0;

  var arrTopVal = [];

  $(".cont").each(function (idx) {
    arrTopVal[idx] = $(this).offset().top-100;
  });

  function pageAni(topVal) {

    $("html,body").stop().animate({
      scrollTop: topVal
    });

  }

  $mnu.on("click", function (evt) {
    evt.preventDefault();

    mnuIdx = $mnu.index(this);//0~4

    pageAni(arrTopVal[mnuIdx]);
  });

  $(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    
    for(var i=0;i<5;i++){
      if(scrollTop >= arrTopVal[i]){
        $mnu.eq(i).parent().addClass("on").siblings().removeClass("on");
      }
    } 
  });
  
});