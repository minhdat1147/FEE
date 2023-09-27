$(document).ready(function(){
  $('#newquote').click(function(){
    getRandomQuote();
  });
  function getRandomQuote(){
    $.ajax({
      url: 'http://quotes.stormconsultancy.co.uk/random.json',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
  	    var quote=data.quote;
  	    var author=data.author;
  			$('.quote #data').html('"'+quote+'"');
  			$('.quote p').html("-"+author+"-");
        $('#twitter').attr('href',"https://twitter.com/intent/tweet?text="+quote+"   "+author);
  		},
      error: function(err) {
        $('.quote #data').html("Oops something went wrong!, Please try again.");
      }
    });
  }
});
