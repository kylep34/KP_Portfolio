// Definition of variables for functions
let nav2 = document.querySelector('#nav2');
    
let skillBox = document.querySelector('.skillBox');
let selectorLine = document.querySelector('.selectorLine');

// Function for scrolling and navbar animation  
nav2.addEventListener('click' , scrollSkills , false);
function scrollSkills(e)
{
    skillBox.scrollIntoView({ behavior: 'smooth' });
        $(selectorLine).animate( {left: '994px'}, 1000 );
}


var modal = document.getElementById("cs3Screen1Modal");

var img = document.getElementsByClassName("cs3Screen11");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function()
{
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; 
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}







