jQuery(document).ready(function($){
  $(window).on('load', function () {
    var $preloader = $('#preload'),
        $gif_anim   = $preloader.find('.gif_anim');
    $gif_anim.delay(3950).fadeOut("fast");
    $preloader.delay(3950).fadeOut('slow');
});
});


var prikol = document.querySelector('.SettingShrift');
prikol.onclick = function (){
	alert('Какие настройки на ЭТОМ сайте!')
}

var canv = document.getElementById('canv1');
var ctx = canv.getContext('2d');

ctx.fillRect(100,50,75,75);