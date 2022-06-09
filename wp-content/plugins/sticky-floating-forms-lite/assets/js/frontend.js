(function($){
"use strict";
	/**
	 * Changes class to desired HTML div on user actions
	 * 
	 */ 
	function sff_active_class_div( $action = 'toggle' ){
		var open_type = sff_data.open_type;
		
		if( $action == 'add' ){
			
			if( open_type == 'modal' ){
			$('.cww-sff-wrapp').addClass('active');	
			}else{
				$('.cww-sff-inner').addClass('active');	
			}
			if( open_type != 'chat-style' ){		
				$('body').addClass('cww-sff-overlay');
			}

		}else{

			if( open_type == 'modal' ){
			$('.cww-sff-wrapp').toggleClass('active');	
			}else{
				$('.cww-sff-inner').toggleClass('active');	
			}	
			if( open_type != 'chat-style' ){			
				$('body').toggleClass('cww-sff-overlay');
			}
			
		}
	}


	$('body').on('click','.cww-ssf-toggle,.cww-sff-wrapp i', function(){
		sff_active_class_div();
	});


})(jQuery);