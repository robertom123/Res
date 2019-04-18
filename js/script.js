/* get the ids from pizza, salid, and starter */
let ham = document.getElementById("ham");
let salad = document.getElementById("salads");
let sweets = document.getElementById("sweets");

/*get all the elements with class name of foods and eats */
let x = document.getElementsByClassName("foods");
let y = document.getElementsByClassName("eats");

/*on click, hide the descriptions and turn all li black */
ham.addEventListener("click", (e) => {
    for(let i = 0; i < x.length; i++ ){
        x[i].style.display = "none";
        y[i].style.backgroundColor = "black";
    }
    // display description for ham and turn li background red
    x[0].style.display = "block";
    y[0].style.backgroundColor = "red";
    

});

//same for the others

salad.addEventListener("click", (e) => {
    for(let i = 0; i < x.length; i++ ){
        x[i].style.display = "none";
        y[i].style.backgroundColor = "black";
    }
    x[1].style.display = "block";
    y[1].style.backgroundColor = "red";

});

sweets.addEventListener("click", (e) => {
    for(let i = 0; i < x.length; i++ ){
        x[i].style.display = "none";
        y[i].style.backgroundColor = "black";
    }
    x[2].style.display = "block";
    y[2].style.backgroundColor = "red";


});





