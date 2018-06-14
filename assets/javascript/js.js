$(document).ready(function() {
$("#searchButton").on("click", function() {

    var search = $("#search").val();
    var beginDate = $("#beginDate").val();
    var endDate = $("#endDate").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&?begin_date=" + beginDate + "&?end_date=" + endDate + "&api_key=c4f930334bb1465eb77fd0b0f41cdd08";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

    var results = response.data;
    
    for (var i = 0; i < results.length; i++) {
        var articles = $("<div class='item'>");
        var headline = results[i].headline.main;
        var snippet = results[i].snippet;
        var url = results[i].web_url;
        var h = $("<p>").text(headline);
        var s = $("<p>").text(snippet);
        var u = $("<p>").text(url);
    
        topArticles.prepend(h);
        topArticles.prepend(s);
        topArticles.prepend(u);
        $("#topArticles").prepend(articles);
        }
    });
});
});