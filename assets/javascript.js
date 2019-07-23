

var gifArray=[];

    function displayGifButtons()
    {
        
      $('#gifButtons').empty();
      for(var i=0;i<gifArray.length;i++)
      {
        $('#gifButtons').append('<span><button class="gifButtons" data-index="'+gifArray[i]+'">'+gifArray[i]+'</button></span>');
      }

        
    }


    $("#userInputButton").on("click", function(event) {
        // prevent form from submitting
        event.preventDefault();
  
        var userInput=$("#userInputField").val();
  
        if(userInput=="")
        {
          alert("Please enter a search term!");
        }
        else
        {
          gifArray.push(userInput);
          displayGifButtons();
        }
        $("#userInputField").val(" ");

      }); 



    $(document.body).on("click", ".gifButtons", function() {


    event.preventDefault();
    //name
    var gifs = $(this).attr("data-index");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifs + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    
    //testing input field

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var gifImage = $("<img id=populatedGifBubbles class=col-2 >");
                gifImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(gifImage);

                $("#gifs-appear-here").prepend(gifImage);


            }

$("#userInputField").val(" ");


        });
        

});


