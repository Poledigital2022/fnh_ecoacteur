/* CSV bouton download */
(function($) {
    $(document).ready(function() {
        
        var completeurl = $(location).attr('href');
		var total_char_url = completeurl.length;
		var start_char_url = completeurl.indexOf('#');
		var anchor = '';
		
		//manual limitation
		if(completeurl.indexOf('agriculture')>0
			|| completeurl.indexOf('transports')>0
			|| completeurl.indexOf('climat')>0){
	
			if(start_char_url>0){
				anchor = completeurl.substring(start_char_url, total_char_url);						
				$.magnificPopup.open({
					items: {
					  src: anchor
					},
					type: 'inline'
				});
			}
		}
    });   
    
})( jQuery );