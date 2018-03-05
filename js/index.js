document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("display").value = "";
});

document.getElementById("one").addEventListener("click", function() { digit(1); });
document.getElementById("two").addEventListener("click", function() { digit(2); });
document.getElementById("three").addEventListener("click", function() { digit(3); });
document.getElementById("four").addEventListener("click", function() { digit(4); });
document.getElementById("five").addEventListener("click", function() { digit(5); });
document.getElementById("six").addEventListener("click", function() { digit(6); });
document.getElementById("seven").addEventListener("click", function() { digit(7); });
document.getElementById("eight").addEventListener("click", function() { digit(8); });
document.getElementById("nine").addEventListener("click", function() { digit(9); });
document.getElementById("zero").addEventListener("click", function() { digit(0); });
document.getElementById("minus").addEventListener("click", function() { digit("-"); });
document.getElementById("plus").addEventListener("click", function() { digit("+"); });
document.getElementById("multiplication").addEventListener("click", function() { digit("*"); });
document.getElementById("division").addEventListener("click", function() { digit("/"); });
document.getElementById("equals").addEventListener("click", function() { display.value = eval(display.value); })


function digit(val) {
    document.getElementById("display").value += val;
}


