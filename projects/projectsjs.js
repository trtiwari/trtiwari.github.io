var main = function () {
 $('.arrow').click(function () {
 var cls = "."+$(".active").attr('class').split(" ")[1];
 var num = parseInt(cls[2]);
 if ($(this).hasClass('next')) {
 var nextcls = ".p"+(num+1);
 }
 else {
 var nextcls = ".p"+(num-1);
 }
 
 console.log($(nextcls).length); 

 if ($(nextcls).length) {
  $(cls).addClass('nonActive');
  $(cls).removeClass('active');
  $(nextcls).removeClass('nonActive');
  $(nextcls).addClass('active'); 
 }
 else {
  $('.message').remove();
  $(".contentdiv").append('<div class="message"><div class="alert alert-warning"><a href="#" class="close" data-dismiss="alert" style="color:black;">&times;</a><strong>Like it? </strong>Come later to read more!.</div><div>');
 }
 });
}

$(document).ready(main);
