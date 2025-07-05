document.getElementById('cash-out-show').addEventListener('click',function(){
    // show cash out
    document.getElementById('cash-out-form').classList.remove('hidden');

    // hide cash in

    document.getElementById('cash-in-form').classList.add('hidden');

});
// show add mone or cash in
document.getElementById('cash-in-show').addEventListener('click',function(){
    // show cash out
    document.getElementById('cash-in-form').classList.remove('hidden');

    // hide cash in

    document.getElementById('cash-out-form').classList.add('hidden');

});