//API Call

var queryURL = "https://broadlistening-com-personality-insights-from-twitter-v1.p.mashape.com/blapi?user=SJosephBurns";
    // $.ajax({
    //   url: queryURL,
    //   method: 'GET'
    // }).done(function(response) {
    //   console.log(response);
    // });

    $.ajax({
  	type: 'GET',
  	beforeSend: function(request) {
    request.setRequestHeader("X-Mashape-Key", 'xO81O4dkRNmshRgvsvlymjRRkmFCp1XEQ4CjsnivY5K6rRVxu7');
  	},
  	url: queryURL,
 	 processData: false,
  	success: function(msg) {
  		var msg = JSON.parse(msg);

    console.log(msg);
  	}
	});


	


