$(function(){
    const film1 = {
        picture:"../materials/directorandfilm/littlewomen.jpg",
        director:"Greta Gerwig",
        hint:"<h2>Some other films</h2><p>Lady Bird</p><p>Lady Bird</p><p>Lady Bird</p>"
    }

    const film2 = {
        picture:"../materials/directorandfilm/blackswan.jpg",
        director:"Darren Aronofsky",
        hint:"<h2>Some other films</h2><p>Mother!</p><p>Requiem for a Dream</p><p>Noah</p>"
    }

    const film3 = {
        picture:"../materials/directorandfilm/stalker.jpg",
        director:"Andrew Tarkovsky",
        hint:"<h2>Some other films</h2><p>Sacrifice</p><p>Ivan's childhood</p><p>Mirror</p>"
    }

    const film4 = {
        picture:"../materials/directorandfilm/jentelmens.jpg",
        director:"Guy Ritchie",
        hint:"<h2>Some other films</h2><p>Lock, Stock and Two Smoking Barrels</p><p>Aladdin</p><p>Revolver</p>"
    }

    const film5 = {
        picture:"../materials/directorandfilm/fightclub.jpg",
        director:"David Fincher",
        hint:"<h2>Some other films</h2><p>Seven</p><p>The Girl with the Dragon Tattoo</p><p>Mank</p>"
    }

    const film6 = {
        picture:"../materials/directorandfilm/enemy.jpg",
        director:"Denis Villeneuve",
        hint:"<h2>Some other films</h2><p>Dune</p><p>Arrival</p><p>Blade Runner 2049</p>"
    }

    const film7 = {
        picture:"../materials/directorandfilm/interstellar.jpg",
        director:"Christopher Nolan",
        hint:"<h2>Some other films</h2><p>The Prestige </p><p>Dunkirk</p><p>The Dark Knight</p>"
    }

    const film8 = {
        picture:"../materials/directorandfilm/annyhall.jpg",
        director:"Woody Allen",
        hint:"<h2>Some other films</h2><p>Everyone Says I Love You</p><p>A Rainy Day in New York</p><p>To Rome with Love</p>"
    }

    const film9 = {
        picture:"../materials/directorandfilm/avatar.jpeg",
        director:"James Cameron",
        hint:"<h2>Some other films</h2><p>Titanic</p><p>The Terminator</p><p>Aliens</p>"
    }

    const film10 = {
        picture:"../materials/directorandfilm/komformist.jpg",
        director:"Bernardo Bertolucci",
        hint:"<h2>Some other films</h2><p>The Last Emperor</p><p>Last Tango in Paris</p><p>The Dreamers</p>"
    }

    const film11 = {
        picture:"../materials/directorandfilm/shining.jpg",
        director:"Stanley Kubrick",
        hint:"<h2>Some other films</h2><p>Lolita</p><p>2001:A Space Odyssey</p><p>Eyes Wide Shut</p>"
    }

    const film12 = {
        picture:"../materials/directorandfilm/lobster.jpg",
        director:"Yorgos Lanthimos",
        hint:"<h2>Some other films</h2><p>The Favourite</p><p>The Killing of a Sacred Deer</p><p>Dogtooth</p>"
    }
    const film13 = {
        picture:"../materials/directorandfilm/melanholy.jpg",
        director:"Lars von Trier",
        hint:"<h2>Some other films</h2><p>Dogville</p><p>Dancer in the Dark</p><p>The House That Jack Built</p>"
    }

    const film14 = {
        picture:"../materials/directorandfilm/brat.jpeg",
        director:"Aleksei Balabanov",
        hint:"<h2>Some other films</h2><p>Morphine</p><p>Of Freaks and Men</p><p>Cargo 200</p>"
    }
    
    const film15 = {
        picture:"../materials/directorandfilm/live.jpg",
        director:"Yuri Bykov",
        hint:"<h2>Some other films</h2><p>The Fool</p><p>The Major</p><p>The Factory</p>"
    }

    const film16 = {
        picture:"../materials/directorandfilm/eight.jpg",
        director:"Federico Fellini",
        hint:"<h2>Some other films</h2><p>he Voice of the Moon</p><p>Roma</p><p>Love in the City</p>"
    }
    
    const film17 = {
        picture:"../materials/directorandfilm/moon.jpg",
        director:"Wes Anderson",
        hint:"<h2>Some other films</h2><p>The French Dispatch</p><p>The Grand Budapest Hotel</p><p>The Darjeeling Limited</p>"
    }
    const film18 = {
        picture:"../materials/directorandfilm/mars.jpg",
        director:"Ridley Scott",
        hint:"<h2>Some other films</h2><p>Robin Hood</p><p>House of Gucci</p><p>Gladiator</p>"
    }

    const film19 = {
        picture:"../materials/directorandfilm/levi.jpg",
        director:"Andrey Zvyagintsev",
        hint:"<h2>Some other films</h2><p>The Banishment</p><p>Loveless</p><p>The Return</p>"
    }

    const film20 = {
        picture:"../materials/directorandfilm/pianist.jpg",
        director:"Roman Polanski",
        hint:"<h2>Some other films</h2><p>Macbeth</p><p>What?</p><p>The Ninth Gate</p>"
    }



    const base = [film1, film2, film3, film4, film5, film6,film7, film8, film9, film10, film11, film12, film13, film14, film15, film16, film17, film18, film19, film20]
    base.sort(() => Math.random() - 0.5)
    const films = base.slice(5);
    const directors = ['Roman Polanski',"Aleksei Balabanov","Federico Fellini","Yuri Bykov","Yorgos Lanthimos", "Steven Spielberg","Alfred Hitchcock","James Cameron","Christopher Nolan","Stanley Kubrick","Clint Eastwood","Ridley Scott","Tim Burton","Greta Gerwig","Darren Aronofsky","David Lynch","Martin Scorsese","Joel and Ethan Coen","Quentin Tarantino","Paul Thomas Anderson","Wes Anderson","Gaspar Noé","Lars von Trier","David Fincher","Guy Ritchie"]
    let round = 0;
    let queue = [0,1,2]
    change();
    let result = 0;
    let resultWidth = 0;
    $('.card').hover(function(){
        $('.front').toggleClass("hovered")
        $('.back').css("hovered")
    })
    $('.card').click(function(){
        $('.front').toggleClass('turnfront')
        $('.back').toggleClass('turnback')
    })

    $('.choice').click(function(){
        $('.choice').removeClass('clicked');
        $(this).addClass('clicked');
    })

    $('.send').click(function(){
        if($('.clicked').length == 0 && $('.correct').length == 0){
            $('.necessary').text('please, choose something').animate({"opacity":"1"},500)
        }else{
            $('.necessary').animate({"opacity":"0"},0)
            if ($('.clicked').text() === $('img').attr('alt')){
                result++;
                resultWidth += 5;
            }
            $("#score2").animate({"width": resultWidth +"%"}, 1000)
            $('.choice').removeClass('clicked');
            const possiblechoice = $('.choice');
            for (let i = 0; i < possiblechoice.length; i++){
                console.log(possiblechoice.eq(i).text())
                if($(possiblechoice.eq(i)).text() === $('img').attr('alt')){
                    $(possiblechoice.eq(i)).addClass('correct')
                }else{
                    $(possiblechoice.eq(i)).addClass('incorrect')
                }
                
            }
            round++;
            setTimeout(change, 2000);
        }
    })
    function change(){
        if (round <= 4){
            $('.choice').removeClass('correct')
            $('.choice').removeClass('incorrect')
            $('.front img').attr('src', films[round].picture);
            $('.front img').attr('alt', films[round].director);
            $('.back-content').html(films[round].hint);
            queue.sort(() => Math.random() - 0.5)
            console.log(queue)
            $('.choice').eq(queue[0]).text(films[round].director)
            directors.sort(() => Math.random() - 0.5)
            let i = 0;
            let count = 1;
            while (count != 3){
                if(directors[i] != films[round].director){
                    console.log(directors[i])
                    $('.choice').eq(queue[count]).text(directors[i]);
                    count++;
                }
                i++;
            }

        }else{
            end();
        }
    }

    function end(){
        $('.next h1').text("Your score is " + result + '/5');
        if (result < 2){
            $('.next p').text("Your choise of film never depends on director of film")
        }
        if (result >= 2 && result < 4){
            $('.next p').text("You have some favourite directors")
        }
        if (result >= 4){
            $('.next p').text("You really want to make friends with all directors and become a part of their society!")
        }

        $('.next').animate({"top":"-300px","opacity":"1"}, 2000);
        $('#next').click(function(){setTimeout(backtostart, 100)});
    }

    function backtostart(){
        window.location.href = "../html/index.html"
    }
})