document.write('<style type="text/css">');

var cname='AKTUALITY';

var cookies = document.cookie;

var display='none';

var pos1 = cookies.indexOf(escape(cname) + '=');

if (pos1 != -1)
{
	pos1 = pos1 + (escape(cname) + '=').length;
	pos2 = cookies.indexOf(';', pos1);
	if (pos2 == -1) 
		pos2 = cookies.length;
	
	display = cookies.substring(pos1, pos2);
}

document.write('#act-hidden { display: '+display+"; }");

document.write('</style>');

$(document).ready(function() {
  $( "#actualB" ).click(function() {
    if($("#act-hidden").css("display") != 'none')
		{
      $("#act-hidden").animate({height: '0'}, function() {$("#act-hidden").hide();});
      document.cookie='AKTUALITY='+escape('none');
		}
		else
		{
			$("#act-hidden").animate({height: '300'});
      $("#act-hidden").show();
      document.cookie='AKTUALITY='+escape('block'); 
		}
  });
});

$(function(){
   $('.slideshow img:gt(0)').hide();
   setInterval(function(){
     $('.slideshow :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.slideshow');}, 
     3000);
 });