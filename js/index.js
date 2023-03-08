
$(function(){
    const actor1 = {
        bigPicture:"../materials/actors/AdrianBroudi1.jpg",
        smallPicture:"../materials/actors/AdrianBroudi2.jpg",
        regex:/adrienbrody|эдрианброуди/
    }
    const actor2 = {
        bigPicture:"../materials/actors/AliceFreindlich1.jpg",
        smallPicture:"../materials/actors/AliceFreindlich2.jpg",
        regex:/алисафрейндлих|alicefreundlich/
    }
    const actor3 = {
        bigPicture:"../materials/actors/AndrewMironov1.jpg",
        smallPicture:"../materials/actors/AndrewMironov2.jpg",
        regex:/андреймиронов|andreymironov/
    }

    const actor4 = {
        bigPicture:"../materials/actors/AndrewMyagkov1.jpeg",
        smallPicture:"../materials/actors/AndrewMyagkov2.jpg",
        regex:/андреймягков|andreymyagkov/
    }

    const actor6 = {
        bigPicture:"../materials/actors/BenedictCumberbetch1.jpg",
        smallPicture:"../materials/actors/BenedictCumberbetch2.jpg",
        regex:/бенедикткамбербэтч|benedictcumberbatch/
    }

    const actor5 = {
        bigPicture:"../materials/actors/AnnHatuey1.jpg",
        smallPicture:"../materials/actors/AnnHatuey2.jpg",
        regex:/эннхэтэуэй|annehathaway/
    }

    const actor7 = {
        bigPicture:"../materials/actors/IrinaGorbacheva1.jpg",
        smallPicture:"../materials/actors/IrinaGorbacheva2.jpg",
        regex:/иринагорбачева|irinagorbacheva/
    }

    const actor8 = {
        bigPicture:"../materials/actors/IrinaMuraveva1.jpg",
        smallPicture:"../materials/actors/IrinaMuraveva2.jpg",
        regex:/иринамуравьева|irinamuravyeva/
    }

    const actor9 = {
        bigPicture:"../materials/actors/Jakejillinhal1.jpg",
        smallPicture:"../materials/actors/Jakejillinhal2.jpg",
        regex:/джейкджилленхол|jakegyllenhaal/
    }

    const actor11 = {
        bigPicture:"../materials/actors/JaredLeto1.jpg",
        smallPicture:"../materials/actors/JaredLeto2.jpg",
        regex:/джаредлето|jaredleto/
    }
    const actor12 = {
        bigPicture:"../materials/actors/JenniferAniston1.jpg",
        smallPicture:"../materials/actors/JenniferAniston2.jpg",
        regex:/дженниферэнистон|jenniferaniston/
    }
    const actor13 = {
        bigPicture:"../materials/actors/JenniferConnelli1.jpg",
        smallPicture:"../materials/actors/JenniferConnelli2.jpg",
        regex:/дженниферконнелли|jenniferconnelly/
    }
    const actor14 = {
        bigPicture:"../materials/actors/JuriyNikulin1.jpg",
        smallPicture:"../materials/actors/JuriyNikulin2.jpeg",
        regex:/юрийникулин|yurinikulin/
    }
    const actor15 = {
        bigPicture:"../materials/actors/KateWinslet1.jpg",
        smallPicture:"../materials/actors/KateWinslet2.jpg",
        regex:/кейтуинслет|katewinslet/
    }
    const actor10 = {
        bigPicture:"../materials/actors/JakeNikolson1.jpeg",
        smallPicture:"../materials/actors/JakeNikolson2.jpg",
        regex:/джекниколсон|jacknicholson/
    }

    const actor16 = {
        bigPicture:"../materials/actors/KeanoReevze1.jpg",
        smallPicture:"../materials/actors/KeanoReevze2.jpg",
        regex:/киануривз|keanureeves/
    }
    const actor17 = {
        bigPicture:"../materials/actors/KillianMerphy1.jpg",
        smallPicture:"../materials/actors/KillianMerphy2.jpg",
        regex:/киллианм(ё|е)рфи|cillianmurphy/
    }
    const actor18 = {
        bigPicture:"../materials/actors/KiraNaitly1.jpg",
        smallPicture:"../materials/actors/KiraNaitly2.jpg",
        regex:/киранайтли|keiraknightley/
    }
    const actor19 = {
        bigPicture:"../materials/actors/LeonardoDiKaprio1.jpg",
        smallPicture:"../materials/actors/LeonardoDiKaprio2.jpg",
        regex:/леонардодикаприо|leonardodicaprio/
    }
    const actor20 = {
        bigPicture:"../materials/actors/LiyaAhedjakova1.jpeg",
        smallPicture:"../materials/actors/LiyaAhedjakova2.jpg",
        regex:/лияахеджакова|liyaakhedzhakova/
    }

    const actor21 = {
        bigPicture:"../materials/actors/MargaritaTerehova1.jpg",
        smallPicture:"../materials/actors/MargaritaTerehova2.jpg",
        regex:/маргаритатерехова|margaritaterekhova/
    }

    const actor22 = {
        bigPicture:"../materials/actors/MarionKotiiyar1.jpg",
        smallPicture:"../materials/actors/MarionKotiiyar2.jpg",
        regex:/марионкотийяр|marioncotillard/
    }

    const actor23 = {
        bigPicture:"../materials/actors/MathewMackonahi1.jpg",
        smallPicture:"../materials/actors/MathewMackonahi2.jpg",
        regex:/мэттьюмакконахи|matthewmcconaughey/
    }

    const actor24 = {
        bigPicture:"../materials/actors/NataliPortman1.jpg",
        smallPicture:"../materials/actors/NataliPortman2.jpg",
        regex:/наталипортман|natalieportman/
    }

    const actor25 = {
        bigPicture:"../materials/actors/OdriHapbern1.jpg",
        smallPicture:"../materials/actors/OdriHapbern2.jpg",
        regex:/одрихепберн|audreyhepburn/
    }

    const actor26 = {
        bigPicture:"../materials/actors/OdriTatou1.jpg",
        smallPicture:"../materials/actors/OdriTatou2.jpg",
        regex:/одритоту|audreytautou/
    }

    const actor27 = {
        bigPicture:"../materials/actors/OlegYankovskiy1.jpg",
        smallPicture:"../materials/actors/OlegYankovskiy2.jpg",
        regex:/олегянковский|olegyankovsky/
    }

    const actor28 = {
        bigPicture:"../materials/actors/RizUizerspun1.jpg",
        smallPicture:"../materials/actors/RizUizerspun2.jpg",
        regex:/ризуизерспун|reesewitherspoon/
    }

    const actor29 = {
        bigPicture:"../materials/actors/SergeyBodrov1.jpeg",
        smallPicture:"../materials/actors/SergeyBodrov2.jpg",
        regex:/сергейбодров|sergeybodrov/
    }

    const actor30 = {
        bigPicture:"../materials/actors/TimothyShalame1.jpg",
        smallPicture:"../materials/actors/TimothyShalame2.jpg",
        regex:/тимотишаламе|timotheechalamet/
    }

    let count = 0;
    let result = 0;
    let resultWidth = 0;
    let boxes = $(".Task");
    let actors = [actor1,actor2, actor3, actor4,actor5,actor6,actor7,actor8,actor9,actor10,actor11,actor12, actor13,actor14,actor15,actor16,actor17,actor18,actor19,actor20,actor21,actor22,actor23,actor24,actor25,actor26,actor27,actor28,actor29,actor30]
    let currentTest = [];
    let elem = actors[Math.floor(Math.random()*29 + 1)];
    while (currentTest.length != 5){
        if (currentTest.indexOf(elem) == -1){
            currentTest.push(elem);
        }
        elem = actors[Math.floor(Math.random()*29 + 1)];
    }
    let bigs = $(".Task .bigPicture img");
    let smals = $(".Task .smallPicture img");
    let answers = $(".answer input");
    for (let i = 0; i<5; i++){
        $(bigs[i]).attr("src", currentTest[i].bigPicture)
        $(smals[i]).attr("src", currentTest[i].smallPicture)
    }

    let maxResult = $("#score1").css("width");
    $("#score2").css("width",0);
    $('#go').click(function(){
            newgame();
    })

    $('.start').keyup(function(e){
        if(e.keyCode === 13) {
            newgame();
        }
    })

    function newgame(){
        $('.start').animate({"top":"-2000px", "opacity":"0"}, 2000);
            let nickname = $("#nickname").val();
            $(".progress p").text("Your score, " + nickname)
    }
    let str = ""
    $(".checkanswer").click(function(){
        console.log(currentTest[count].regex)
        str = $(answers[count]).val().replace(/\s+/g, '').toLowerCase();
        if (currentTest[count].regex.test(str)){
            result += 1;
            resultWidth += 5;
            $(answers[count]).addClass('green');
            console.log(1)
            setTimeout(newResult,1000)
        }else{
            $(answers[count]).addClass('red');
            console.log(2)
        }
        setTimeout(next, 1000);
        
    })

    function next(){
        if (count < 4) {
            boxes.eq(count).animate({"right":"1500px"}, 900);
            boxes.eq(count+1).css("display","flex")
            boxes.eq(count+1).animate({"opacity":"1"},1000)
            count += 1;
        }else {
            $(".content").animate({"opacity":"0"}, 1500)
            $(".start").html("<div class ='introduction'><h1></h1><p></p><button id = 'go'>Next!</button></div>")
            $(".start h1").text("Your score is " + result + "/5");
            if (result < 2){
                $(".start p").text("You are not interested in actors and usually do not pay attention to them")
            }
            if (result < 4 && result >= 2){
                $('.start p').text("It is important for you who play main role in film and if it's one of your favourites you will watch it!")
            }

            if (result >= 4){
                $('.start p').text("actors are like your best friends! You know them very well!")
            }
            $(".start").animate({"top":"0px","opacity":"1"}, 1500);
            $('#go').click(function(){setTimeout(change, 100)});
        }
    }

    function newResult(){
        $("#score2").animate({"width": resultWidth +"%"})
    }
    function change (){
        window.location.href = "../html/secondPart.html"

    }
})

