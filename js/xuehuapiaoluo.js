/*样式一*/
//背景雪花飘落特效
(function($){
  $.fn.snow = function(options){
  var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px'}).html('&#10052;'),
  documentHeight  = $(document).height(),
  documentWidth = $(document).width(),
  defaults = {
    minSize   : 20,
    maxSize   : 40,
    newOn   : 1000,
    flakeColor  : "#008B8B" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
  },
  options = $.extend({}, defaults, options);
  var interval= setInterval( function(){
  var startPositionLeft = Math.random() * documentWidth - 100,
  startOpacity = 20 + Math.random(),
  sizeFlake = options.minSize + Math.random() * options.maxSize,
  endPositionTop = documentHeight - 200,
  endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
  durationFall = documentHeight * 15 + Math.random() * 5000;
  $flake.clone().appendTo('body').css({
    left: startPositionLeft,
    opacity: startOpacity,
    'font-size': sizeFlake,
    color: options.flakeColor
  }).animate({
    top: endPositionTop,
    left: endPositionLeft,
    opacity: 1.8
  },durationFall,'linear',function(){
    $(this).remove()
  });
  }, options.newOn);
    };
})(jQuery);
$(function(){
    $.fn.snow({ 
      minSize: 20, /* 定义雪花最小尺寸 */
      maxSize: 70,/* 定义雪花最大尺寸 */
      newOn: 280  /* 定义密集程度，数字越小越密集 */
    });
});










































