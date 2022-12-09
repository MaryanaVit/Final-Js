let chas = + document.querySelector('.vidlic-Dec').textContent
let vch = +document.querySelector('.vidlic-Chyl').textContent
let startvidlic
let chack = true;
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let check = true;

function checkresultat(){
    for(let i=0; i<$('.second-dr').length; i++){
        if($('.second-dr').eq(i).attr("value") != numbers[i]){
            console.log ($('.second-dr').eq(i).attr("value"))
            check = false;
            break;
        }
    }
    if(check){
        $('.modal').css({
            display:'block',
            zIndex: 3})
        $('.stage2').css('display', 'none')
        $('.stage3').css('display', 'block')
        $('.stage1').css({
            zIndex: -1})
            $('.btn-stop').attr('disabled', 'disabled');
    }
    else{
        $('.modal').css({
            display:'block',
            zIndex: 3})
        $('.stage2').css('display', 'none')    
        $('.stage4').css('display', 'block')
        $('.stage1').css({
            zIndex: -1})
            $('.btn-stop').attr('disabled', 'disabled');
    }
    check = true;

}


function vidlic() {
    $('.vidlic-Dec').text(+chas)
    if (vch == "00") {
        vch = 59
        chas = 00
        if (chas < 10) chas = '0' + chas;
    }
    else vch = vch - 1

    if (vch < 10) vch = '0' + vch;

    if (chas == 00 & vch == 00) { 
        clearInterval(startvidlic)
        checkresultat();
         }

    $('.vidlic-Dec').text(chas)
    $('.vidlic-Chyl').text(vch)
}

if (chas == 00 & vch == 45) { 
    clearInterval(startvidlic)
    checkresultat();
     }

$(function sort1() {
    let divs = $('.first ').children();
    while (divs.length) {
        $('.first ').append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    $('.kv ').css({
        left: '0px',
        top: '0px'
    })
});
console.log ($('.first ').children())

function taimerstart() {
    $('.vidlic-Dec').text('01');
    $('.vidlic-Chyl').text('00');
    startvidlic = setInterval(vidlic, 1000);
    $('.btn-stop').removeAttr('disabled');
    $('.btn-stop').removeClass('disabled');
    $('.btn-start').attr('disabled', 'disabled');
    $('.btn-start').addClass('disabled')
    chack = false;
}

function taimerstop() {
    clearInterval(startvidlic)
    $('.btn-start').removeAttr('disabled');
    $('.btn-start').removeClass('disabled');
    $('.modal').css({
        display:'block',
        zIndex: 3})
    $('.stage2').css('display', 'block')
    $('.stage1').css({
        zIndex: -1})
}
console.log($('div .first .kv').length)

function newgame() {
    clearInterval(startvidlic);
    $('.btn-start').removeAttr('disabled');
    $('.btn-start').removeClass('disabled');
    $('.btn-stop').attr('disabled', 'disabled');
    $('.btn-stop').addClass('disabled');
    $('.vidlic-Dec').text('01');
    $('.vidlic-Chyl').text('00');
    $(function sort2() {
        let divs = $('.first ').children();
        while (divs.length) {
            $('.first ').append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
        $('.kv ').css({
            left: '0px',
            top: '0px'
        })
    });
}

function stageclose(){
    startvidlic = setInterval(vidlic, 1000);
    $('.btn-stop').removeAttr('disabled');
    $('.stage2').css('display', 'none')
    $('.stage3').css('display', 'none')
    $('.stage4').css('display', 'none')
    $('.modal').css({
        display:'none',
        zIndex:-1})

    $('.stage1').css({
        backgroundColor: 'white',
        zIndex: 3})
}
function stageclose1(){
    clearInterval(startvidlic);
    // $('.vidlic-Dec').text('01');
    // $('.vidlic-Chyl').text('00');
    $('.btn-start').removeAttr('disabled');
    $('.btn-start').removeClass('disabled');
    $('.btn-stop').attr('disabled', 'disabled');
    $('.btn-stop').addClass('disabled');
    $('.stage2').css('display', 'none')
    $('.stage3').css('display', 'none')
    $('.stage4').css('display', 'none')

    $('.modal').css({
        display:'none',
        zIndex:-1})

    $('.stage1').css({
        backgroundColor: 'white',
        zIndex: 3})
}


$( ".first .kv" ).draggable({
    // containment: '.second',
    grid: [100,100],
            
    start: function(event, ui){
        if (chack) {
            $('.btn-start').attr('disabled', 'disabled');
            $('.btn-start').addClass('disabled');
            $('.btn-stop').removeAttr('disabled');
            $('.btn-stop').removeClass('disabled');
                if (chack) {
                    startvidlic = setInterval(vidlic, 1000);
                    chack = false;
                    }
                }
                console.log('start', event, ui);
            }
    });

    $( ".second-dr" ).droppable({
        drop:  function (e, ui) {
            let m = $(ui.draggable).attr("value")
            console.log (m)
            $(this).attr("value", m)
            console.log (this)
        }
    })
    
    // $( ".second-dr" ).droppable("enable")

