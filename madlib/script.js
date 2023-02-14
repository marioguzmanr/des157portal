(function(){
    'use strict';
    console.log('reading js');

    const form = document.querySelector('#questions');
    let madLib = document.querySelector('#madlib');
    let template = document.querySelector('#template');

    function overlayOpen(){
        form.addEventListener('submit' , function(event){
            event.preventDefault();
            document.getElementById('madlib').className="showing";
            document.querySelector('aside').className="hidden";
        });
    
        document.querySelector('.close').addEventListener('click' , function(event){
            event.preventDefault();
            document.getElementById('madlib').className="hidden";
            document.querySelector('aside').className="background";
        });
    
        document.addEventListener('keydown' , function(event){
            if (event.key == "Escape"){
                document.getElementById('madlib').className="hidden";
            }
        });
        };


    form.addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const color = document.querySelector('#color').value.toLowerCase();
        const adj1 = document.querySelector('#adj1').value.toLowerCase();
        const adj2 = document.querySelector('#adj2').value.toLowerCase();
        const adj3 = document.querySelector('#adj3').value.toLowerCase();
        const adj4 = document.querySelector('#adj4').value.toLowerCase();
        const noun1 = document.querySelector('#noun1').value.toLowerCase();
        const noun2 = document.querySelector('#noun2').value.toLowerCase();
        const noun3 = document.querySelector('#noun3').value.toLowerCase();
        const noun4 = document.querySelector('#noun4').value.toLowerCase();
        const verb1 = document.querySelector('#verb1').value.toLowerCase();
        const verb2 = document.querySelector('#verb2').value.toLowerCase();
        const verb3 = document.querySelector('#verb3').value.toLowerCase();
        

        let myText = "";
        
        if(name == "" || color == "" || adj1 == "" || adj2 == "" || adj3 == "" || adj4 == "" || noun1 == "" || noun2 == "" || noun3 == "" || noun4 == "" || verb1 == "" || verb2 == "" || verb3 == ""){
            alert(`Please fill in all fields`);
        } else {
            myText = `<p>Once upon a time, an astronaut named <b>${name}</b> took a <b>${adj1}</b> trip to the moon on a <b>${adj2}</b> spaceship. They brought a <b>${color}</b> suit and a <b>${noun1}</b>. On their journey, they <b>${verb1}</b> past stars and planets, even avoiding a <b>${noun2}</b>. They <b>${verb2}</b> on the moon, took a <b>${noun3}</b>, and collected <b>${noun4}</b> samples. The trip was <b>${adj3}</b> and the astronaut couldn't wait to <b>${verb3}</b> back and show their <b>${adj4}</b> findings.</p>`;
            overlayOpen();
        }
    
        template.innerHTML = myText;
    });
}());
