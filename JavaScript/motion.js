// Scroll event
window.addEventListener("scroll",function(event){

    // Query for element
    var name = document.getElementById('name');
    var scrolled = window.pageYOffset;

    var rate = scrolled * 0.47;
    name.style.transform = 'translateY('+rate+'px)';
    
    var icons = document.querySelectorAll('.icon-col');
    for(var i = 0; i < icons.length; i++){
        var rate = scrolled * 0.47;
        icons[i].style.transform = 'translateY('+rate+'px)';
    }

});


