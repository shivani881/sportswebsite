let addarray = document.querySelectorAll('.count');
// console.log(add);
let count = document.getElementById('cartcount').innerText;
// console.log(count);
Array.from(addarray).forEach(function(elem){
    elem.addEventListener('click',addtocart);
    function addtocart(e){
    count++;
    document.getElementById('cartcount').innerText = count;
    
    }
})


