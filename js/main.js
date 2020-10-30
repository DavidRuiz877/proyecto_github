$(document).ready(main);

var contador = 1;

function main(){
    $('.icon-list').click(function(){
        if(contador ==1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        }
        else{
            contador = 1
            $('nav').animate({
                left:'-100%'
            });
        }
    });
    $('.submenu').click(function(){
        $('.submenu').children(".children").slideToggle();
    })
}