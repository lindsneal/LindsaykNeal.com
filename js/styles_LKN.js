$(document).ready(){
    .hover(function() {
      $( ".webProject" )
        .toggleClass( ".overlay" )
        .next()
          .stop( true, true )

    });
	}