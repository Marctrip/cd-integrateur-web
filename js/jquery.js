
$(document).ready(function() {

	/* intégrateur web - faire apparaitre les niveaux */
	  $("#plein" ).first().show( "slow", function showNext() {
    	$( this ).next( "#plein" ).show( "slow", showNext );
    	$( this ).next( "#vide" ).show( "slow", showNext );
  	});
  	$( "#plein2" ).delay(1000).first().show( "slow", function showNext() {
    	$( this ).next( "#plein2" ).show( "slow", showNext );
    	$( this ).next( "#vide2" ).show( "slow", showNext );
  	});

  	$( "#plein3" ).delay(800).first().show( "slow", function showNext() {
    	$( this ).next( "#plein3" ).show( "slow", showNext );
    	$( this ).next( "#vide3" ).show( "slow", showNext );
  	});

  	$( "#plein4" ).delay(400).first().show( "slow", function showNext() {
    	$( this ).next( "#plein4" ).show( "slow", showNext );
    	$( this ).next( "#vide4" ).show( "slow", showNext );
  	});

  	$( "#plein5" ).delay(1400).first().show( "slow", function showNext() {
    	$( this ).next( "#plein5" ).show( "slow", showNext );
    	$( this ).next( "#vide5" ).show( "slow", showNext );
  	});

  	$( "#plein6" ).delay(900).first().show( "slow", function showNext() {
    	$( this ).next( "#plein6" ).show( "slow", showNext );
    	$( this ).next( "#vide6" ).show( "slow", showNext );
  	});

    // HTML 5
    $( "#plein21" ).delay(1800).first().show( "slow", function showNext() {
      $( this ).next( "#plein21" ).show( "slow", showNext );
    });

    // Git
    $( "#plein22" ).delay(1400).first().show( "slow", function showNext() {
      $( this ).next( "#plein22" ).show( "slow", showNext );
    });

  	/* Langue - faire apparaitre les niveaux */
  	/* Anglais */
	$( "#plein7" ).delay(2400).first().show( "slow", function showNext() {
	    $( this ).next( "#plein7" ).show( "slow", showNext );
	    $( this ).next( "#vide7" ).show( "slow", showNext );
  	});
  	/* Allemand */
  	$( "#plein8" ).delay(2800).first().show( "slow", function showNext() {
    	$( this ).next( "#plein8" ).show( "slow", showNext );
    	$( this ).next( "#vide8" ).show( "slow", showNext );
  	});

  	/* Alsacien */
  	$( "#plein9" ).delay(2600).first().show( "slow", function showNext() {
    	$( this ).next( "#plein9" ).show( "slow", showNext );
    	$( this ).next( "#vide9" ).show( "slow", showNext );
  	});

    /* Espagnol */
    $( "#plein10" ).delay(2700).first().show( "slow", function showNext() {
      $( this ).next( "#plein10" ).show( "slow", showNext );
      $( this ).next( "#vide10" ).show( "slow", showNext );
    });

    /* Savoire faire */
    $( "#plein11" ).delay(950).first().show( "slow", function showNext() {
      $( this ).next( "#plein11" ).show( "slow", showNext );
      $( this ).next( "#vide11" ).show( "slow", showNext );
    });

    /* Savoire faire */
    $( "#plein12" ).delay(850).first().show( "slow", function showNext() {
      $( this ).next( "#plein12" ).show( "slow", showNext );
      $( this ).next( "#vide12" ).show( "slow", showNext );
    });

    $( "#plein13" ).delay(2400).first().show( "slow", function showNext() {
      $( this ).next( "#plein13" ).show( "slow", showNext );
      $( this ).next( "#vide13" ).show( "slow", showNext );
    });

    /* Savoire faire */
    $( "#plein14" ).delay(2700).first().show( "slow", function showNext() {
      $( this ).next( "#plein14" ).show( "slow", showNext );
      $( this ).next( "#vide14" ).show( "slow", showNext );
    });

    $( "#plein15" ).delay(3100).first().show( "slow", function showNext() {
      $( this ).next( "#plein15" ).show( "slow", showNext );
      $( this ).next( "#vide15" ).show( "slow", showNext );
    });

    /* Savoire faire */
    $( "#plein16" ).delay(3000).first().show( "slow", function showNext() {
      $( this ).next( "#plein16" ).show( "slow", showNext );
      $( this ).next( "#vide16" ).show( "slow", showNext );
    });

    $( "#plein17" ).delay(3400).first().show( "slow", function showNext() {
      $( this ).next( "#plein17" ).show( "slow", showNext );
      $( this ).next( "#vide17" ).show( "slow", showNext );
    });

    /* Savoire faire */
    $( "#plein18" ).delay(3600).first().show( "slow", function showNext() {
      $( this ).next( "#plein18" ).show( "slow", showNext );
      $( this ).next( "#vide18" ).show( "slow", showNext );
    });

    $( "#plein19" ).delay(3900).first().show( "slow", function showNext() {
      $( this ).next( "#plein19" ).show( "slow", showNext );
      $( this ).next( "#vide19" ).show( "slow", showNext );
    });

    /* Savoire faire */
    $( "#plein20" ).delay(4100).first().show( "slow", function showNext() {
      $( this ).next( "#plein20" ).show( "slow", showNext );
      $( this ).next( "#vide20" ).show( "slow", showNext );
    });

  /* Afficher plus de savoir faire */
  $('.plus-savoire-faire').css('display','none');
  $('#demo2').click(function() {
      $('.plus-savoire-faire').slideToggle('slow');
      $('hr,#demo3').hide('hr');
  });

	/* Afficher plus de certificats */
	$('.plus-certificat').css('display','none');
	$('#demo1').click(function() {
  		$('.plus-certificat').slideToggle('slow');
  		$('hr,#demo').hide('hr');
	});
});

$("#pop").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
   $('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
});