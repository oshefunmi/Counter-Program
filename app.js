const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

const numberValue = document.getElementById("number");

let number = 0;
 
increaseBtn.addEventListener('click', () => {
    number++;
    numberValue.innerText = number;
}
);
 
decreaseBtn.addEventListener('click', () => {
    number--;
    numberValue.innerText = number;
}
);
 
resetBtn.addEventListener('click', () => {
    number = 0;
    numberValue.innerText = number;
}
);
