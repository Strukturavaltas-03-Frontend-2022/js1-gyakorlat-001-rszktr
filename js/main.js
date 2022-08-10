let buttonCollection = document.querySelectorAll('.button');

let handleClick = () => {
for (let i = 0; i < buttonCollection.length; i++) {
    buttonCollection[i].addEventListener('click', function sayName() {return console.log(this.innerHTML)});
};
}