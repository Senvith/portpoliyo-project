
var icon = document.getElementById("icon");

icon.onclick = function(){

    document.body.classList.toggle('change-theme');

    if(document.body.classList.contains("change-theme")){
        icon.src = "./images/contrast.png";
        github.src ="./images/githubc.png";
        twitter.src ="./images/twitterc.png";
       
    }

    else{
       icon.src = "./images/moon.png";
       github.src ="./images/github-sign.png";
       twitter.src ="./images/twitter.png";
 
    }
}


