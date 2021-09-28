// Definition of variables for functions
let nav2 = document.querySelector('#nav2');
let 
let skillBox = document.querySelector('.skillBox');
let selectorLine = document.querySelector('.selectorLine');

// Function for scrolling and navbar animation  
nav2.addEventListener('click' , scrollSkills , false);
function scrollSkills(e)
{
    skillBox.scrollIntoView({ behavior: 'smooth' });
        $(selectorLine).animate( {left: '994px'}, 1000 );
}








