let string = "";

const buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'c') {
            string = "";
            document.querySelector('input').value = string;
        } else {
        string += e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})