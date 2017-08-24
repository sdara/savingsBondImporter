( function() {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
	head.appendChild(script);
	
	var _init = function() {
			// ["SERIAL_NUMBER","SERIES","DENOMINATION","ISSUE_DATE"]
		var bonds = [
			[" ","EE","100","10/2005"],
			[" ","EE","100","11/2003"],
			[" ","EE","100","10/2004"],
			[" ","EE","100","12/1989"],
			[" ","EE","100","12/1989"],
			[" ","EE","100","02/1990"],
			[" ","EE","100","01/1990"],
			[" ","EE","100","03/1990"],
			[" ","EE","100","01/1991"],
			[" ","EE","100","11/1991"],
			[" ","EE","100","01/1992"],
			[" ","EE","100","05/1993"],
			[" ","EE","100","11/2002"],
			[" ","EE","100","11/2001"],
			[" ","EE","100","11/2000"],
			[" ","EE","100","09/1999"],
			[" ","EE","50","01/1998"],
			[" ","EE","50","09/1997"],
			[" ","EE","50","03/1997"],
			[" ","EE","50","02/1996"],
			[" ","EE","50","09/1995"],
			[" ","EE","50","01/1995"],
			[" ","EE","50","09/1994"],
			[" ","EE","50","12/1993"],
			[" ","EE","50","11/1993"],
			[" ","EE","50","10/1992"],
			[" ","EE","50","10/1990"],
			[" ","EE","50","12/1989"],
			[" ","EE","50","12/1989"],
			[" ","EE","50","10/1989"],
			[" ","EE","50","09/1989"],
			[" ","EE","50","01/1989"],
			[" ","EE","50","01/1989"]
		];
		
		var index = $('#bndcount').length === 0 ? 0 : parseInt( $('#bndcount').html().split( " of " )[1], 10 );
		
		if( typeof bonds[ index ] !== "undefined" ) {
			var series = bonds[ index ][ 1 ];
			var serial = bonds[ index ][ 0 ];
			var denom = bonds[ index ][ 2 ];
			var issueDate = bonds[ index ][ 3 ];
			$('select[name="Series"] option[value="'+series+'"]').prop('selected',true);
			$('select[name="Denomination"] option[value="'+denom+'"]').prop('selected',true);
			$('input[name="SerialNumber"]').val(serial);
			$('input[name="IssueDate"]').val(issueDate);
			$('input[name="btnAdd.x"]').trigger('click');
		} else {
			alert( "Bonds done." );
		}
	};
	
	var x = window.setInterval( function() {
		if( typeof jQuery !== "undefined" ) {
			_init();
			window.clearInterval( x );
		}
	}, 1000 );

} )();