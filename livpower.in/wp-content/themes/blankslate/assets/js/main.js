//     document.addEventListener('DOMContentLoaded', function () {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const menu = document.querySelector('.menu');

//     menuToggle.addEventListener('click', function () {
//         menu.classList.toggle('active');
//     });
// });







// Testimonial




// Bhagwati js


 $(document).ready(function(){
    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-countto'),
          duration = parseInt($this.attr('data-duration'));

      $({ countNum: $this.find('span').text() }).animate({
        countNum: countTo
      },
      {
        duration: duration,
        easing: 'linear',
        step: function() {
          $this.find('span').text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.find('span').text(this.countNum);
        }
      });  
    });
  });