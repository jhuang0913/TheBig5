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
    //console.log(item);
  }


     var personalityType = {

      Defender: "this is the defender description"
    };

  $("#results").hide();


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
    var whoAreYouType = whoAreYou.type[type];
    console.log("whoAreYou.type[type]" + whoAreYouType);


    var temporantent = response.BLArchetype;
    var twitterImage = response.TwitterImage;
    var TwitterUser = response.TwitterUser;
    var TwitterFollowers = response.TwitterFollowers;
    var TwitterShares = response.TwitterShares;

    //var twitterFullName = response.
    //console.log("twitterImage" + twitterImage);
    $("#results").html("Type of Perosnality: " + whoAreYouType );
    $(".img-circle").attr("src", twitterImage);
    $('#twitterFullName').html(TwitterUser);
    $('#followers').html(TwitterFollowers);
    $('#twitterFullName').html(TwitterUser);
    $('#shares').html(TwitterShares);
    $("#results").show();


    //show famous people based off type
    //types, temporantents, personalities

    //protectors, intellectuals, visionaries,

    console.log(response);

  });//ajax


  // var searchURL = "https://api.social-searcher.com/v2/search?q=Obama&key=286ab6993019696c1f073d9c59058ff6";
 
   // var searchParams = {
  //  type: 'GET',
  //  url: searchURL
//};

        
 // $.ajax(searchParams).done(function(response) {
 // });

});// end of click submit


$("#reset").on("click", function() {

    $("#inputTwitter").empty();
    var twitterInput = "";


});

console.log(whoAreYou.type);


  $(function () {
    "use strict";

    // AREA CHART
    var area = new Morris.Area({
      element: 'revenue-chart',
      resize: true,
      data: [
        {y: '2011 Q1', item1: 2666, item2: 2666},
        {y: '2011 Q2', item1: 2778, item2: 2294},
        {y: '2011 Q3', item1: 4912, item2: 1969},
        {y: '2011 Q4', item1: 3767, item2: 3597},
        {y: '2012 Q1', item1: 6810, item2: 1914},
        {y: '2012 Q2', item1: 5670, item2: 4293},
        {y: '2012 Q3', item1: 4820, item2: 3795},
        {y: '2012 Q4', item1: 15073, item2: 5967},
        {y: '2013 Q1', item1: 10687, item2: 4460},
        {y: '2013 Q2', item1: 8432, item2: 5713}
      ],
      xkey: 'y',
      ykeys: ['item1', 'item2'],
      labels: ['Item 1', 'Item 2'],
      lineColors: ['#a0d0e0', '#3c8dbc'],
      hideHover: 'auto'
    });

    // LINE CHART
    var line = new Morris.Line({
      element: 'line-chart',
      resize: true,
      data: [
        {y: '2011 Q1', item1: 2666},
        {y: '2011 Q2', item1: 2778},
        {y: '2011 Q3', item1: 4912},
        {y: '2011 Q4', item1: 3767},
        {y: '2012 Q1', item1: 6810},
        {y: '2012 Q2', item1: 5670},
        {y: '2012 Q3', item1: 4820},
        {y: '2012 Q4', item1: 15073},
        {y: '2013 Q1', item1: 10687},
        {y: '2013 Q2', item1: 8432}
      ],
      xkey: 'y',
      ykeys: ['item1'],
      labels: ['Item 1'],
      lineColors: ['#3c8dbc'],
      hideHover: 'auto'
    });

    //DONUT CHART
    var donut = new Morris.Donut({
      element: 'sales-chart',
      resize: true,
      colors: ["#3c8dbc", "#f56954", "#00a65a"],
      data: [
        {label: "Download Sales", value: 12},
        {label: "In-Store Sales", value: 30},
        {label: "Mail-Order Sales", value: 20}
      ],
      hideHover: 'auto'
    });
    //BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chart',
      resize: true,
      data: [
        {y: '2006', a: 100, b: 90},
        {y: '2007', a: 75, b: 65},
        {y: '2008', a: 50, b: 40},
        {y: '2009', a: 75, b: 65},
        {y: '2010', a: 50, b: 40},
        {y: '2011', a: 75, b: 65},
        {y: '2012', a: 100, b: 90}
      ],
      barColors: ['#00a65a', '#f56954'],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['CPU', 'DISK'],
      hideHover: 'auto'
    });
  });




	


