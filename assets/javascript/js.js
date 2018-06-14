$("#search").on("click", function() {

    var search = $("#search").val();
    var beginDate = $("#beginDate").val();
    var endDate = $("#endDate").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&?begin_date=" + beginDate + "&?end_date=" + endDate + "&api_key=c4f930334bb1465eb77fd0b0f41cdd08"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
})