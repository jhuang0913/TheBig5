//example chart:

var data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 0]
  ]
};

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
var options = {
  width: 300,
  height: 200
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object. As a third parameter we pass in our custom options.
new Chartist.Line('.ct-chart', data, options);

$("#submit").on("click", function() {
    event.preventDefault();

    var twitterInput = $("#inputTwitter").val().trim();

    var queryURL = "https://broadlistening-com-personality-insights-from-twitter-v1.p.mashape.com/blapi?user=" + twitterInput;

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

        },
    })
});


$("#reset").on("click", function() {

    $("#inputTwitter").empty();
    var twitterInput = ""


});

console.log(whoAreYou.type);


