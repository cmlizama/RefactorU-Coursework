//scripts.js
$(function(){

    $('#myForm').submit(function(e){
        e.preventDefault()
        
        $.post('/', $(this).serialize(), function(data){
            console.log("Successful")
	        console.log(data)
	        if(data){console.log("Successful")}
    	})
    })
});