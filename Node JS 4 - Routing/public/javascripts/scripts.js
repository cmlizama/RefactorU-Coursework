var currentLanding = 1;

$(function(){
	$('.btn').on('click', function() {
		//currentLanding++;
	

	$.get('/travelOn',{landing:currentLanding}, function(data){
		console.log('yay');
		$('h1').text(data.name);
		$('p').text(data.info);
		currentLanding = data.next;
		if (currentLanding === "end") {
			$('.btn').hide();
		}
		});
		return false;
	});
});