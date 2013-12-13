//connect the socket.io server
//define socket events
//attach events

var socket = io.connect('http://localhost');
    
socket.on('connect', function(message){
    //when user connects
    $('room').append('<div>User has entered room</div>')

	//when message is sent
	socket.on('message', function(message){
    	$('#room').append('<div>'+message+'</div>')
    });
 });

//display exit message when user disconnects
socket.on('disconnect', function() { 
    $('room').append('<div>User has left room</div>')
});


$(function(){
	//console.log('firing test')
	$('#message-input').on('keyup', function(e){
		$el = $(this)
		if(e.which === 13){
			//console.log('test')
			socket.emit('message', $el.val())
			$el.val('')
			}
	});
});
