let string ="";
// What Query selector does is it will select all the elements in the html page who has class '.buttons'
let buttons = document.querySelectorAll('.buttons');

// Make Array from these buttons and apply For-Each 
Array.from(buttons).forEach((button)=>{
    button.addeventlistener('click',(e)=>{
        console.log(e.target);
    })
})