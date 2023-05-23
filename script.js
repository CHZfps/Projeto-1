'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var classname = document.body.classname;
    if(classname == "light=theme") {
        this.textcontent = "dark";
        console.log('current class name: ' + classname);

    }
    else {
        this.textcontent = "light";
    }
});