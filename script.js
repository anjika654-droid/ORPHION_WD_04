// Smooth Scroll to Contact
function scrollToContact(){
document.getElementById("contact").scrollIntoView({
behavior:"smooth"
});
}

// Form Submit Alert
document.getElementById("contactForm").addEventListener("submit",function(e){
e.preventDefault();
alert("Message Sent Successfully!");
});

