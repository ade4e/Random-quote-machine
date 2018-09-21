/*$("#get-another-quote-button").on("click", function(e) {
  e.preventDefault();

  $.ajax({
    url:
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=2&callback=",
    success: function(data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      $("#quote-title").text(post.title);
      $("#quote-content").html(post.content);

      // If the Source is available, use it. Otherwise hide it.
      if (
        typeof post.custom_meta !== "undefined" &&
        typeof post.custom_meta.Source !== "undefined"
      ) {
        $("#quote-source").html("Source:" + post.custom_meta.Source);
      } else {
        $("#quote-source").text("");
      }
    },
    cache: false
  });
});
*/

$(document).ready(function () {
   $("#get-another-quote-button").hover(function () {
      $(this).toggleClass("pulse");
   });
   $("#get-another-quote-button").on("click", function () {
      $.getJSON(
         "https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json",
         function (json) {
            var quotes = json;
            var randomQuote =
               quotes[Math.floor(Math.random() * (quotes.length + 1))];
            $("#quote-content")
               .hide()
               .html(JSON.stringify(randomQuote.quote))
               .fadeIn(700);
            $("#quote-author").html(
               JSON.stringify(randomQuote.author).replace(/\"/g, "")
            );
            $("#twitter")
               .css("display", "block")
               .animate({ top: "0px" }, 400);
            $("#twitter").attr(
               "href",
               "https://twitter.com/intent/tweet?text=" +
               "'" +
               randomQuote.quote +
               "'" +
               " " +
               randomQuote.author
            );
         }
      );
   });
});
