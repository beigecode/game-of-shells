// jshint devel:true
(function() {

  $(document).ready(function() {
    play();

    $('button.shuffle').click(function() {
      $(this).text('Shuffling...');
      setTimeout(function(){
         play();
      }, 2000);
    });


    $('.cup').click(function(e) {
      check_win(e);
    })

  })

  var shuffle_it = function (e) {
    $('.cup').removeClass('winner');
    var shuffle = _.sample( [ "75px", "275px", "475px" ] );
    $('.shell').css("left", shuffle); // move the shell
    return shuffle;
  }

  var play = function() {
    var shuffle = shuffle_it();

    if (shuffle === '75px') {
      $('.cup.one').addClass('winner');

    } else if (shuffle === '275px') {
        $('.cup.two').addClass('winner');

    } else {
        $('.cup.three').addClass('winner');
    }

    $('button.shuffle').text('Go!');
  }

  var check_win = function(e) {
    if ( $(e.currentTarget).hasClass('winner') ) {
      alert("You Win!");
    } else {
      alert("You Lose!");
    }
  }


}());
