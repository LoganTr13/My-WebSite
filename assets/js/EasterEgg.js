img = document.getElementsByTagName('img');
text = document.getElementById('textpass');
helper = document.getElementById('txtIntro')

function easterEgg()
{
    try {
        if (text.value == "diofriendship") {
            window.open("https://www.youtube.com/watch?v=0XFudmaObLI",'musica','width=100, height=100', "_blank");
            alert('Wait a Moment...');
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://media.tenor.com/sqOknkKeZ1IAAAAS/jojo-jotaro-kujo.gif');
            }   
            text.value = "";     
        }

        if (text.value == "kono dio da") {
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://media.giphy.com/media/kiJEGxbplHfT5zkCDJ/giphy.gif');
            } 
            text.value = "";     
        }

        if (text.value == "za warudo") {
            alert('Wait a Moment...');
            window.open("https://www.youtube.com/watch?v=_gu7en7O4WE",'musica','width=100, height=100', "_blank");
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://media.giphy.com/media/nyNS6Cfrnkdj2/giphy.gif');
            }   
            text.value = "";     
        }

        if (text.value == "sim!") {
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://media.giphy.com/media/O0Hj7piBBnU0E/giphy.gif');
            }   
            text.value = "";     
        }

        if (text.value == "tomoegasosa") {
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://64.media.tumblr.com/90d2e90c9b8441decd36e80fd4170f6a/30c0bf70e9571b40-e9/s540x810/72703a5206a0eb63603c777af9dbf7edef378706.gif');
            }   
            text.value = "";     
        }

        if (text.value == "hirotakagostoso") {
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://pa1.narvii.com/6854/f5bed75272b17492c875b69301b84e2d7b1e97ad_hq.gif');
            }   
            text.value = "";     
        }
        
        if (text.value == "hirotaka") {
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://64.media.tumblr.com/18c921e9a4f7838f5729322b2174dbca/tumblr_p7v22o85Gc1vgzd4so2_400.gif');
            }   
            text.value = "";     
        }
        
        if (text.value == "alan") {
            window.open("https://www.youtube.com/watch?v=49vgnvFBNe0",'musica','width=100, height=100', "_blank");
            alert('Wait a Moment...');
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://media.tenor.com/8s-8TBPVZrUAAAAd/alanzoka1.gif');
            }   
            text.value = "";     
        }
        
        if (text.value == "doomguy") {
            window.open("https://youtu.be/3CiQCo2WBYA?t=59",'musica','width=100, height=100', "_blank");
            alert('Wait a Moment...');
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://media.tenor.com/XMCQCWqmu_UAAAAC/doom-doom-eternal.gif');
            }  
            text.value = "";     
        }
        
        if (text.value == "chikita") {
            window.open("https://www.youtube.com/watch?v=PGNiXGX2nLU",'musica','width=100, height=100', "_blank");
            alert('Wait a Moment...');
            for (let i = 0; i < img.length; i++) {
                img[i].setAttribute("src",'https://media.tenor.com/fS2VWhhKhU4AAAAC/rei-ayanami-rei.gif');
            }   
            text.value = "";     
        }
    } catch (error) {
        alert(error)
    }
    window.focus();
}