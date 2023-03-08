$(function(){
    const zones = document.getElementsByClassName(".zone")
    console.log(zones.length)
    const zone1 = document.querySelector("#zone-1");
    const zone2 = document.querySelector("#zone-2");
    const zone3 = document.querySelector("#zone-3");
    const zone4 = document.querySelector("#zone-4");
    const zone5 = document.querySelector("#zone-5");

    const variant1 = document.querySelector("#variant-1");
    const variant2 = document.querySelector("#variant-2");
    const variant3 = document.querySelector("#variant-3");
    const variant4 = document.querySelector("#variant-4");
    const variant5 = document.querySelector("#variant-5");

    zone1.ondragover = allowDrop;
    zone2.ondragover = allowDrop;
    zone3.ondragover = allowDrop;
    zone4.ondragover = allowDrop;
    zone5.ondragover = allowDrop;
  
    variant1.ondragstart = drag;
    variant2.ondragstart = drag;
    variant3.ondragstart = drag;
    variant4.ondragstart = drag;
    variant5.ondragstart = drag;

    zone1.ondrop = drop;
    zone2.ondrop = drop;
    zone3.ondrop = drop;
    zone4.ondrop = drop;
    zone5.ondrop = drop;


    function allowDrop(e){
        e.preventDefault();
    }

    function drag(event){
        event.dataTransfer.setData('id', event.target.id)
    }
    

    function drop(event){
        let itemId = event.dataTransfer.getData('id');
        event.target.append(document.getElementById(itemId))
    }

})