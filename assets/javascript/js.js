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

var introvert = "Introverts get their energy by spending time in small groups, seeking depth instead of breadth of friendships. Many confuse introverts as being quiet in isolation when really it means that someone is getting affirmation in their goal achievement with self-acknowledgement.";
var intuitive = "Intuitive people live in the past in order to predict the future. They like to take in information with an inclination to use their pattern recognition to classify their “here and now” environments so that they may have an idea of what to expect in the future. We are Intuitive when we: Come up with a new way of doing things Think about future implications for a current action Perceive underlying meaning in what people say or do See the big picture";
var judging = "Judging has to do with how people live their lives. They like to have plans confirmed and set in advance of completing a task and see that their life has structure. We are using Judging when we: Make a list of things to do Schedule things in advance Form and express judgments Bring closure to an issue so that we can move on"




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

   $(function() {
            $('[data-toggle="tooltip"]').tooltip({ trigger: 'manual' }).tooltip('show');
        });

        // $( window ).scroll(function() {   
        // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
        $(".progress-bar").each(function() {
            each_bar_width = $(this).attr('aria-valuenow');
            $(this).width(each_bar_width + '%');
        });

        //  }  
        // });
          var temporantent = response.BLArchetype;
          var twitterImage = response.TwitterImage;
          var TwitterUser = response.TwitterUser;
          var TwitterFollowers = response.TwitterFollowers;
          var TwitterShares = response.TwitterShares;
          var NJScoreE = response.NJScoreE;
          var NJScoreI = response.NJScoreI;
          var NJScoreJ = response.NJScoreJ;
          var socialCap = response.TwitterSocialCapitalPercentile;
          var followMe = $('#followme').attr('href', "https://twitter.com/" + TwitterUser );

  
          var counter = 0;

          for (var i = 0; i < 5; i++) {
              var interactUN = response.TwitterInteractsWith[i][0];
              counter++;
              $('#interactun' + counter).html(interactUN);

              var img = $('<img>')
              var twitterInteractionImg = "<a href='https://twitter.com/'" + interactUN + ">" + "<img src = 'https://twitter.com/" + interactUN + "/profile_image?size=original' height='90' width='90' style='display: -webkit-box;'/></a>"

              $('#top_int_image' + counter).html(twitterInteractionImg);


              console.log("interacts with:  " + response.TwitterInteractsWith[i][0]);
          }




          $(function() {
              "use strict";


              //DONUT CHART
              var donut = new Morris.Donut({
                  element: 'sales-chart',
                  resize: true,
                  colors: ["#3c8dbc", "#f56954", "#00a65a"],
                  data: [
                      { label: "Introvert", value: NJScoreE },
                      { label: "Extrovert", value: NJScoreE },
                      { label: "Judging", value: NJScoreJ }
                  ],
                  hideHover: 'auto'
              });
              //BAR CHART
              var bar = new Morris.Bar({
                  element: 'bar-chart',
                  resize: true,
                  data: [
                      { y: '2006', a: 100, b: 90 },
                      { y: '2007', a: 75, b: 65 },
                      { y: '2008', a: 50, b: 40 },
                      { y: '2009', a: 75, b: 65 },
                      { y: '2010', a: 50, b: 40 },
                      { y: '2011', a: 75, b: 65 },
                      { y: '2012', a: 100, b: 90 }
                  ],
                  barColors: ['#00a65a', '#f56954'],
                  xkey: 'y',
                  ykeys: ['a', 'b'],
                  labels: ['CPU', 'DISK'],
                  hideHover: 'auto'
              });
          });
         




          //var twitterFullName = response.
          //console.log("twitterImage" + twitterImage);
          $("#results").html("Type of Perosnality: " + whoAreYouType);
          $(".img-circle").attr("src", twitterImage);
          $('#twitterFullName').html(TwitterUser);
          $('#followers').html(TwitterFollowers);
          $('#twitterFullName').html(TwitterUser);
          $('#shares').html(TwitterShares);
          $('#photoName').html(TwitterUser);
          $('#socialCap').attr("aria-valuenow", socialCap);
          $('#socialCap').attr("width", socialCap + "%");
          $('#socialCapTitle').attr("socialCapTitle", socialCap + "%");
          //show famous people based off type
          //types, temporantents, personalities

          //protectors, intellectuals, visionaries,

          console.log(response);

}); //ajax


  $.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
     options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
  });

  var searchURL = "https://api.social-searcher.com/v2/search?q=" + twitterInput + "&type=photo&network=twitter&limit=5&key=286ab6993019696c1f073d9c59058ff6";
  
   $.ajax({
            url: searchURL,
            method: "GET",
            dataType: "json"
          })
          .done(function(response) {
            var images = 0;



          for (var i = 0; i < 5; i++){
            var image = response.posts[i].image;
            console.log("image" + image);
            images++;

            var photo = $('#photo'+ images).attr("src", image);



          }





            console.log(response);


            console.log("posts" + response.posts[0].image);




            console.log(response);



          });

  // Klout API URL
var kloutSearch = "http://api.klout.com/v2/identity.json/twitter?screenName=" + twitterInput + "&key=nqfmhgm6t56scc8csdfmz9wy";

$.ajax({
        method: "GET",
        url: kloutSearch,
      
})
.done(function(klout) {
        console.log (klout);
        console.log(klout.id);
        });


var kloutId = "http://api.klout.com/v2/user.json/" + + "score?key=nqfmhgm6t56scc8csdfmz9wy";




});// end of click submit


$("#reset").on("click", function() {

    $("#inputTwitter").empty();
    var twitterInput = "";


});

console.log(whoAreYou.type);





  


