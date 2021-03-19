var elements = document.getElementsByClassName("information");

for(let i=0; i<elements.length; i++) {
elements[i].style.display="none";}

var buttons = document.getElementsByClassName("informationbutton");

for (let b = 0; b<buttons.length; b++) {
buttons[b].addEventListener("click", function(e){
e.preventDefault();

var informationelement = buttons[b].previousElementSibling;
if(informationelement.style.display === "none")
    {
    informationelement.style.display = "block";
    }
    else {
    informationelement.style.display = "none";
    }

});
}