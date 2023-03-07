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
    탭열기(e.target.dataset.id);
});

var car = ['소나타', 50000, 'white'];
console.log(car[0]);
car[0] = '아반떼';

var car2 = {name : '소나타', price : [5000, 3000, 4000]};
console.log(car2['name']);
console.log(car2.name);

document.getElementsByClassName('aaa')[0].innerHTML = car2.name;
document.getElementsByClassName('bbb')[0].innerHTML = car2['price'][0];