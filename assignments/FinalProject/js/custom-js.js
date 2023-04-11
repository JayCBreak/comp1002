$(document).ready(function(){
    // Call Required Files
    $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });

    // Hero Slider
    $(".masthead-slider > div:gt(0)").hide();
    setInterval(function(){
        $('.masthead-slider > div:first-child')
            .fadeOut(500)
            .next()
            .fadeIn(500)
            .end()
            .appendTo(".masthead-slider");
    }, 6000);
    // Tabs
    $(".tab-list").on("click", ".tab", function(e){
        e.preventDefault();
        $(".tab").removeClass("active");
        $(".tab-content").removeClass("show");
        $(this).addClass("active");
        $($(this).attr("href")).addClass("show");
    });
});