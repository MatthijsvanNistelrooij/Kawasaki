var alliPhonesImg = ['kawasakilimegreen','kawasakilimegreenebony','kawasakimetallicmoon','kawasakiplasmablue'];
var imgPro = document.querySelector('.imgPro img');
var allColors = document.querySelectorAll('.allColors li');

allColors.forEach(colors => colors.addEventListener('click', function (elem) {
    for (var i = 0; i < allColors.length; i++) {
        allColors[i].classList.remove('active');
    }

    if(this.className === 'kawasakilimegreenebony') {
        imgPro.src = 'images/' +alliPhonesImg[0]+'.jpg';
        imgPro.classList.add('animate')
    }

    if(this.className === 'kawasakilimegreen') {
        imgPro.src = 'images/' +alliPhonesImg[1]+ '.jpg';
        imgPro.classList.add('animate')
    }

    if(this.className === 'kawasakimetallicmoon') {
        imgPro.src = 'images/' +alliPhonesImg[2]+ '.jpg';
        imgPro.classList.add('animate')
    }

    if(this.className === 'kawasakiplasmablue') {
        imgPro.src = 'images/' +alliPhonesImg[3]+ '.jpg';
        imgPro.classList.add('animate')
    }

//make border gray if circle is clicked
    this.classList.add('active');

    setTimeout(function() {
        imgPro.classList.remove('animate');
    },500);
}))
