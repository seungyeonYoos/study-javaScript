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
let aaa = document.getElementsByClassName('tab-button').length;

for ( let i =0; i < aaa; i++){
    $('.tab-button').eq(i).on('click',function(){
        $('.tab-button').removeClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').eq(i).addClass('show');
    });
}