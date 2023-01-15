(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "Please enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    });
    
})();



const checkbox = document.querySelector(".checkbox");
const calculator = document.querySelector(".calculator");
const check = document.querySelector(".check");
let isDark = true;
check.onclick = () => {
  calculator.classList.toggle("dark");
  checkbox.classList.toggle("active");
  isDark = !isDark;
};
