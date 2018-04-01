
// $(window).load(function() {
// 	$('.code-tab-1').addClass('tab-highlighted');
// });


$(document).ready(function() {

	$('.tab-muted').on('click', function() {
		$('.tab-highlighted').addClass('tab-muted');
		$('.tab-highlighted').removeClass('tab-highlighted');
		$(this).removeClass('tab-muted');
		$(this).addClass('tab-highlighted');
		// $(this).addClass('content-highlighted').siblings().removeClass('content-highlighted');


		if ($(this).hasClass('code-tab-1')) {
			$('.code-content-1').removeClass('content-muted');
			$('.code-content-1').addClass('content-highlighted');
			$('.code-content-2').addClass('content-muted');
			$('.code-content-2').removeClass('content-highlighted');
			$('.code-content-3').addClass('content-muted');
			$('.code-content-3').removeClass('content-highlighted');
		} else if ($(this).hasClass('code-tab-1')) {
			$('.code-content-1').addClass('content-muted');
			$('.code-content-1').removeClass('content-highlighted');
			$('.code-content-2').removeClass('content-muted');
			$('.code-content-2').addClass('content-highlighted');
			$('.code-content-3').addClass('content-muted');
			$('.code-content-3').removeClass('content-highlighted');
		} else {
			$('.code-content-1').addClass('content-muted');
			$('.code-content-1').removeClass('content-highlighted');
			$('.code-content-2').addClass('content-muted');
			$('.code-content-2').removeClass('content-highlighted');
			$('.code-content-3').removeClass('content-muted');
			$('.code-content-3').addClass('content-highlighted');
		}
	});
});