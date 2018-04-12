$(document).ready(function() {
	// Code for code tabs
	$('#code-content-1').show();
	$('#code-content-2').hide();
	$('#code-content-3').hide();

	$('#code-tab-1').on('click', function(){
	console.log($('.code-content-1'));
		$('#code-content-1').show();
		$('#code-content-2').hide();
		$('#code-content-3').hide();

		$(this).removeClass('inactive').addClass('active');	
		$('#code-tab-2').removeClass('active').addClass('inactive');	
		$('#code-tab-3').removeClass('active').addClass('inactive');	
	});

	$('#code-tab-2').on('click', function(){
		$('#code-content-2').show();
		$('#code-content-1').hide();
		$('#code-content-3').hide();

		$(this).removeClass('inactive').addClass('active');	
		$('#code-tab-1').removeClass('active').addClass('inactive');	
		$('#code-tab-3').removeClass('active').addClass('inactive');	
	});

	$('#code-tab-3').on('click', function(){
		$('#code-content-3').show();
		$('#code-content-2').hide();
		$('#code-content-1').hide();

		$(this).removeClass('inactive').addClass('active');	
		$('#code-tab-2').removeClass('active').addClass('inactive');	
		$('#code-tab-1').removeClass('active').addClass('inactive');	
	});


	// Code for testimonial Slide show
	$('.testimonial > div:gt(0)').hide();

		setInterval(function() { 
		  $('.testimonial > div:first')
		    .fadeOut(0)
		    .next()
		    .fadeIn(1200)
		    .end()
		    .appendTo('.testimonial');
	},  4000);
});

		