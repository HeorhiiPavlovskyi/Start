$(function() {

$('.watchvideo').on('show.bs.modal', function (e) {
  var src = 'https://www.youtube.com/embed/XUNqWreoaBg?si=b-ifU-ltjz2KW8Pg';
  $(this).find("iframe").attr('src', src);
});
$('.watchvideo').on('hide.bs.modal', function (e) {
  $(this).find("iframe").removeAttr('src');
});

AOS.init({
duration: 2000,
disable: 'mobile'
});

Waves.attach('.wave');
  Waves.attach('.wave-2',  ['waves-light']);
  Waves.init();

 })

