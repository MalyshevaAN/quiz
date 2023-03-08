$(function(){
    function newgame(){
        $('.start').animate({"top":"-2000px", "opacity":"0"}, 2000);
            let nickname = $("#nickname").val();
            $(".progress p").text("Your score, " + nickname)
    }

    newgame();
})