$(document).ready(function () {
  // TODO: Replace jquery with vanilla JS

  $('#about').show();
  $('.tabs').on('click','a', function(event){
    event.preventDefault();
    $('.tab-content').hide();
    var hash = $(this).prop('hash');
    $('.tabs').children().removeClass('active');
    $(this).parent().addClass('active');
    $(hash).show();
    document.title = this.innerText + ' | ' + 'Dan Dobrick - Software Engineer';
  });
});
