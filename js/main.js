
let handleClick = () => {
    let buttonCollection = document.querySelectorAll('.button');
    for (let i = 0; i < buttonCollection.length; i++) {
    buttonCollection[i].addEventListener('click', function sayName() {return console.log(this.innerHTML)});
};
}