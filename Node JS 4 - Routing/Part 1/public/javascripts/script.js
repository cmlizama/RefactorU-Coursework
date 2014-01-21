$(function(){ 


	//return the next page on button click
	$('.btn').on('click', function(e)){
		$.get('/').html(e);
	};
};