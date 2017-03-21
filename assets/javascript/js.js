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

  $("#results").hide();



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


//var target = document.getElementById('submit')
//var spinner = new Spinner(opts).spin(target);
//var spinner = new Spinner().spin()
//target.appendChild(spinner.el)


var whoAreYou = {
    type: {
        ESTJ: "Overseer",
        ESFJ: "Supporter",
        ISTJ: "Examiner",
        ISFJ: "Defender",
        ESTP: "Persuader",
        ESFP: "Entertainer",
        ISTP: "Craftsman",
        ISFP: "Artist",
        ENTJ: "Chief",
        ENTP: "Originator",
        INTJ: "Strategist",
        INTP: "Engineer",
        ENFJ: "Mentor",
        ENFP: "Advocate",
        INFJ: "Confidant",
        INFP: "Dreamer",
    }

};


for (var item in whoAreYou.type) {
    console.log(item);
}


var customer = {

    ESTJ: [{
        type: "home", // this index is zero
        number: "212 555-1234"
    }, {
        type: "fax",
        number: "646 555-4567"
    }]
};



$("#submit").on("click", function() {
    event.preventDefault();

    var twitterInput = $("#inputTwitter").val().trim();

    var queryURL = "https://broadlistening-com-personality-insights-from-twitter-v1.p.mashape.com/blapi?user=" + twitterInput;



    var params = {
        type: 'GET',
        url: queryURL,
        processData: false,
        beforeSend: function(request) {
            request.setRequestHeader("X-Mashape-Key", 'xO81O4dkRNmshRgvsvlymjRRkmFCp1XEQ4CjsnivY5K6rRVxu7');
        },
    };


    $.ajax(params).done(function(response) {
        var response = JSON.parse(response);
        console.log(response.NJType);


        var type = response.NJType;
        whoAreYou.type[type];
        console.log("whoAreYou.type[type]" + whoAreYou.type[type]);
        var temporantent = response.BLArchetype;
        //var twitterImage = ;
        var whoAreYouObj = whoAreYou.type;
        console.log("whoAreYouObj: " + whoAreYouObj);

        //console.log("whoAreYou.type[i]: " + whoAreYou.type[i]);

        //   i//f (whoAreYou.type[].indexOf(type) > -1){

        // $('#results').html("this is the result: " + whoAreYou.description[i])

        //console.log("type listed for our person: " + type);
        //console.log("type: " + type);
        //console.log("index: " + [i]);
        //console.log("descindex: " + whoAreYou.description[i]);

        // }


        //show famous people based off type
        //types, temporantents, personalities

        //protectors, intellectuals, visionaries,

        console.log(response);

    }); //ajax

}); // end of click submit


$("#reset").on("click", function() {

    $("#inputTwitter").empty();
    var twitterInput = ""


});

console.log(whoAreYou.type);
	



