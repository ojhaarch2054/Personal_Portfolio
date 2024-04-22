//select the message button
const mesasgebtn = document.querySelector(".msgBtn")
//create a function to implement the click event
mesasgebtn.addEventListener("click", function(event){
     // Prevent the default action
     event.preventDefault();
    mesasgebtn.innerHTML = "Message sent";
    mesasgebtn.style.backgroundColor = "green"  
});

// implement message box functionality
const input = document.querySelector('.msg');
//when i click on it and start typing the onfocus event triggered
input.onfocus = function(){
    //when i click on msg box the placeholder disappear
    this.placeholder = '';
}
input.onblur = function(){
    //when i clicked on the outside of the box the placeholder will show
    this.placeholder = 'Your Message';
}



//for valid email address
/*const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    Email.value = ''; // Clear the email field after showing alert
    return;
}*/

