var x = document.getElementById('head2');

x.addEventListener("mouseover", myfunction);
x.addEventListener("mouseout", my2ndFunction);

function myfunction() {
    document.getElementById('hyper').innerHTML += 'Let\'s Find Out ';
}