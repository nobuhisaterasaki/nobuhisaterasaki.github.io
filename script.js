// jqeryを変換する場合
// $('#start').on('click', function(){
//     $('#start').html('ストップ');
//     $('body').addClass('top');
// ;})

let personAry = [];
for (let j=1; j<50; j++) {
    personAry.push(j);
}
const shuffleArray = function() {
    for (var i = personAry.length -1; i > 0; i--){
        const r = Math.floor(Math.random() * (i + 1));
        const tmp = personAry[i];
        personAry[i] = personAry[r];
        personAry[r] = tmp;
    }   
};
shuffleArray();

console.log(personAry);

const updateTable = function(){
    shuffleArray();
let div = '';
personAry.forEach(function(data, i) {
    if((i+1) % 6 == 0) {
        div += '<div class="seat">'+data+'</div></div>';        
    }else if((i+1) % 6 ==1) {
        div += '<div class="table-item text-center"><div class="seat">'+data+'</div>';
    }else {
        div += '<div class="seat">'+data+'</div>';
    }
});
document.querySelector('#app').innerHTML = div;
};
document.querySelector('#start').addEventListener('click', updateTable);
updateTable();
