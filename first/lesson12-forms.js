// var text = document.getElementById('text');
// console.log('text inside tag is: ',text.innerHTML);
// console.log('Id is: ', text.id);
// text.title ='New title';
// text.style.fontStyle='italic';


// var my_tag = document.getElementsByTagName('span');
// console.log(my_tag);

// for (let i of my_tag) {
//     console.log(i.innerHTML);
// }


// var my_class = document.getElementsByClassName("forspan");
// console.log(my_class);

// for (let i of my_class) {
//     console.log(i.innerHTML);
//     i.style.color='red';
// }



// HTML Form
document.getElementById('main-form').addEventListener("submit", CheckForm);

// function CheckForm(form) {
function CheckForm(event) {
    event.preventDefault(); //отключаем стандартное поведение событий

    let form = document.getElementById('main-form');

    let name = form.name.value;
    let password = form.password.value;
    let password2 = form.password2.value;
    let sex = form.sex.value;

    // console.log(name);
    // console.log(password);
    // console.log(password2);
    // console.log(sex);

    let message = '';

    if (password == password2 && name.length > 0 && password.length > 0 && sex!='') {
        console.log("Valid data");
    } else {
        console.log("not valid data");
        message = 'fill all fields correctly';
    }

    if (message!="") {
        document.getElementById('error').innerHTML = message;
    } else {
        alert('All data is correct!');
        window.location = "https://images.google.com/";
    }
}