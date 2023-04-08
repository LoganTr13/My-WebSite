img = document.getElementsByTagName('img');
text = document.getElementById('textpass');
helper = document.getElementById('txtIntro')

//ambas funções pass comparam se o texto inserido é equivalente a senha, se for ele adiciona a todas as imagens
//existentes (img acomula um array com todos os img da pagina), uma nova imagem escolhida por mim, e a função com YT
//abre junto uma janela com um link do youtube, ao qual deixo uma musica para combinar com o gif.

function passYT(senha,link,yt){
    if (text.value == senha) {
        window.open(yt,'musica','width=100, height=100', "_blank");
        alert('Wait a Moment...');
        for (let i = 0; i < img.length; i++) {
            img[i].setAttribute("src",link);
        }        
    }
}
function pass(senha,link){
    if (text.value == senha) {
        for (let i = 0; i < img.length; i++) {
            img[i].setAttribute("src",link);
        }     
    }
}
function easterEgg()
{
    try {
        passYT("diofriendship",'https://media.tenor.com/sqOknkKeZ1IAAAAS/jojo-jotaro-kujo.gif',"https://www.youtube.com/watch?v=0XFudmaObLI");
        passYT("za warudo",'https://media.giphy.com/media/nyNS6Cfrnkdj2/giphy.gif',"https://www.youtube.com/watch?v=_gu7en7O4WE");
        passYT("alan",'https://media.tenor.com/8s-8TBPVZrUAAAAd/alanzoka1.gif',"https://www.youtube.com/watch?v=49vgnvFBNe0");
        passYT("doomguy",'https://media.tenor.com/XMCQCWqmu_UAAAAC/doom-doom-eternal.gif',"https://youtu.be/3CiQCo2WBYA?t=59");
        passYT("chikita",'https://media.tenor.com/fS2VWhhKhU4AAAAC/rei-ayanami-rei.gif',"https://www.youtube.com/watch?v=PGNiXGX2nLU");
        pass("kono dio da",'https://media.giphy.com/media/kiJEGxbplHfT5zkCDJ/giphy.gif');
        pass("sim!",'https://media.giphy.com/media/O0Hj7piBBnU0E/giphy.gif');
        pass("tomoegasosa",'https://64.media.tumblr.com/90d2e90c9b8441decd36e80fd4170f6a/30c0bf70e9571b40-e9/s540x810/72703a5206a0eb63603c777af9dbf7edef378706.gif');
        pass("hirotakagostoso",'https://pa1.narvii.com/6854/f5bed75272b17492c875b69301b84e2d7b1e97ad_hq.gif');
        pass("hirotaka",'https://64.media.tumblr.com/18c921e9a4f7838f5729322b2174dbca/tumblr_p7v22o85Gc1vgzd4so2_400.gif');
        
    } catch (error) {
        alert(error)
    }
    window.focus();
    text.value = ""; 
}