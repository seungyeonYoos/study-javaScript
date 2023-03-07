// $('.tab-button').eq(0).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').eq(0).addClass('show');
// });
// $('.tab-button').eq(1).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').eq(1).addClass('show');
// });
// $('.tab-button').eq(2).on('click',function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').eq(2).addClass('show');
// });
// let aaa = document.getElementsByClassName('tab-button').length;

// for ( let i =0; i < aaa; i++){
//     탭열기(i);
// }

function 탭열기 (aa){
    $('.tab-button').eq(aa).on('click',function(){
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(aa).addClass('orange');
        $('.tab-content').eq(aa).addClass('show');
    });
}

$('.list').on('click',function(e){
    if(e.target == document.getElementsByClassName('tab-button')[0]){
        탭열기(aa);
    }
});