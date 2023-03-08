$(function(){

    const film1 = {
        picture:"../materials/filmbyshot/leon.jpg",
        nameoffilm:"Leon"
    }

    const film2 = {
        picture:"../materials/filmbyshot/matrix.jpg",
        nameoffilm:"Matrix"
    }

    const film3 = {
        picture:"../materials/filmbyshot/Prideandprejudice.jpg",
        nameoffilm:"Pride and prejudice"
    }

    const film4 = {
        picture:"../materials/filmbyshot/avatar.jpg",
        nameoffilm:"Avatar"
    }

    const film5 = {
        picture:"../materials/filmbyshot/start.jpg",
        nameoffilm:"Inception"
    }

    const film6 = {
        picture:"../materials/filmbyshot/mindgame.jpg",
        nameoffilm:"A Beautiful Mind"
    }

    const film7 = {
        picture:"../materials/filmbyshot/poets.jpg",
        nameoffilm:"Dead Poets Society"
    }
    const film8 = {
        picture:"../materials/filmbyshot/moscow.jpeg",
        nameoffilm:"Moscow does not believe in tears"
    }
    const film9 = {
        picture:"../materials/filmbyshot/social.jpg",
        nameoffilm:"The Social Network"
    }
    const film10 = {
        picture:"../materials/filmbyshot/eternal.jpg",
        nameoffilm:"Eternal Sunshine of the Spotless Mind"
    }

    const film11 = {
        picture:"../materials/filmbyshot/truman.jpg",
        nameoffilm:"The Truman Show"
    }

    const film12 = {
        picture:"../materials/filmbyshot/rainman.jpg",
        nameoffilm:"Rain Man"
    }

    const film13 = {
        picture:"../materials/filmbyshot/dirty.jpg",
        nameoffilm:"Dirty Dancing"
    }

    const film14 = {
        picture:"../materials/filmbyshot/pulp.jpg",
        nameoffilm:"Pulp Fiction"
    }

    const film15 = {
        picture:"../materials/filmbyshot/green.jpg",
        nameoffilm:"Green Book"
    }

    const film16 = {
        picture:"../materials/filmbyshot/million.jpg",
        nameoffilm:"Million Dollar Baby"
    }

    const film17 = {
        picture:"../materials/filmbyshot/knock.jpg",
        nameoffilm:"Knockin' on Heaven's Door"
    }

    const film18 = {
        picture:"../materials/filmbyshot/lala.jpg",
        nameoffilm:"La La Land"
    }

    const film19 = {
        picture:"../materials/filmbyshot/pretty.jpg",
        nameoffilm:"Pretty Woman"
    }

    const film20 = {
        picture:"../materials/filmbyshot/romance.jpg",
        nameoffilm:"Office Romance"
    }

    const allfilms = [film1, film2, film3, film4, film5, film6, film7, film8, film9, film10, film11, film12, film13, film14, film15, film16, film17, film18, film19, film20]
    allfilms.sort(() => Math.random() - 0.5)
    const possiblefilms = allfilms.slice(5);
    console.log(possiblefilms)
    const films = $(".film img");

    for (let i = 0; i < films.length; i++){
        films.eq(i).attr("src", possiblefilms[i].picture)
        films.eq(i).attr("alt", possiblefilms[i].nameoffilm)
    }

    const choices = $('.choice');
    const names = []
    for (let i = 0; i < 5; i++){
        names.push(possiblefilms[i].nameoffilm)
    }
    names.sort(() => Math.random() - 0.5)
    for (let i = 0; i < 5; i++){
        choices.eq(i).html("<p>" + names[i] + "</p>")
    }
    const variants = $(".variant")
    let result = 0;
    let resultWidth = 0;
    $(".variant").mousedown(function(){
        let empty = 0
        for (let i = 0; i < variants.length; i++){
            if(variants.eq(i).html().trim() != '' ){
                console.log(1)
                empty++;
            }
        }
        console.log(empty)
        if (empty == 1){
            $('.send').animate({'right':'45%',"width":"120px", "height":"120px"}, 2000);
            $('.send p').animate({"opacity":"1"},2000)
        }
        $("#score2").css("width", result+"%");
    })
    let clicks = 0;
    $('.send').click(function (){
        clicks++;
        if (clicks == 1){
            checkAnswer();
            setTimeout(nextLevel,1000);
        }
    })

    function checkAnswer() {
        const answers = $('.film .choice');
        for (let i = 0; i < films.length; i++){
            if (films.eq(i).attr('alt')  == answers.eq(i).text()){
                resultWidth += 5;
                result += 1;
                answers.eq(i).css("background-color","#00FF38")
            }else{
                answers.eq(i).css("background-color","red")
            }
        }
        $("#score2").animate({"width": resultWidth +"%"}, 1000)
        
    }  

    function nextLevel(){
        $('.next h1').text("Your score is " + result + '/5');
        if (result < 2){
            $('.next p').text("You prefer other ways to spend your free time and don't watch films at all")
        }
        if (result >= 2 && result < 4){
            $('.next p').text("Watching films is a good way for you to relax")
        }
        if (result >= 4){
            $('.next p').text("You are a real expert! Maybe some years later world will see your own film!")
        }
        $('.next').animate({"top":"0","opacity":"1"}, 1500);
        $('#next').click(function(){setTimeout(change, 100)});
    }

    function change(){
        window.location.href = "../html/thirdPart.html"
    }
})