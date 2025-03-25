function confirmSubmit() {
    const messageInputElement = document.querySelector('#message-input');
    const emailInputElement = document.querySelector('#email-input');

    if (emailInputElement.value === '') {
        alert('Please enter a valid email!')
    }

    else {
        alert('Form submitted')
        messageInputElement.value = '';
        emailInputElement.value = '';
    }
};

function blury(product) {
    const background = document.querySelector('.background');
    background.classList.add('backgroundBlur');

    const popup = document.querySelector('.EggsDown');
    popup.classList.remove('EggsDown');
    popup.classList.add('EggsUp');

    if (product === '6 Eggs') {
        title = document.querySelector('.billTitle');
        title.innerHTML = '6 Eggs';

        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/6Eggs.jpg";

        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Six Delicious free range eggs, freshly collected and cleaned.';

        const price = document.querySelector('.price');
        price.innerHTML = '$3.00';

        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $3.00';
    }

    else if (product === '10 Eggs') {
        title = document.querySelector('.billTitle');
        title.innerHTML = '10 Eggs';

        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/10Eggs.jpg";

        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Ten Delicious free range eggs, freshly collected and cleaned.';

        const price = document.querySelector('.price');
        price.innerHTML = '$5.00';

        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $5.00';
    }

    else if (product === '12 Eggs') {
        title = document.querySelector('.billTitle');
        title.innerHTML = '12 Eggs';

        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/12Eggs.jpg";

        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Twelve Delicious free range eggs, freshly collected and cleaned.';

        const price = document.querySelector('.price');
        price.innerHTML = '$6.00';

        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $6.00';
    }

    else if (product === '18 Eggs') {
        title = document.querySelector('.billTitle');
        title.innerHTML = '18 Eggs';

        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/18Eggs.jpg";

        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Eighteen Delicious free range eggs, freshly collected and cleaned.';

        const price = document.querySelector('.price');
        price.innerHTML = '$9.00';

        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $9.00';
    }

    else if (product === '24 Eggs') {
        title = document.querySelector('.billTitle');
        title.innerHTML = '24 Eggs';

        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/24Eggs.jpg";

        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Twenty Four Delicious free range eggs, freshly collected and cleaned.';

        const price = document.querySelector('.price');
        price.innerHTML = '$12.00';

        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $12.00';
    }

    else if (product === '30 Eggs') {
        title = document.querySelector('.billTitle');
        title.innerHTML = '30 Eggs';

        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/30Eggs.jpg";

        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Thirty Delicious free range eggs, freshly collected and cleaned.';

        const price = document.querySelector('.price');
        price.innerHTML = '$15.00';

        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $15.00';
    }
};

function unblury() {
    const background = document.querySelector('.background');
    background.classList.remove('backgroundBlur');

    const popup = document.querySelector('.EggsUp');
    popup.classList.remove('EggsUp');
    popup.classList.add('EggsDown');

    const name = document.querySelector('.cardName');
    name.value = '';

    const month = document.querySelector('.month');
    month.value = '';

    const year = document.querySelector('.year');
    year.value = '';

    const cardNum = document.querySelector('.CardNum');
    cardNum.value = '';

    const cvv = document.querySelector('.cvvinput');
    cvv.value = '';

    const noName = document.querySelector('.noName');
    const cardNumTitle = document.querySelector('.cardNumTitle');
    cardNumTitle.classList.remove('margin');
    noName.innerHTML = '';

    const noexpire = document.querySelector('.noexpire');
    noexpire.innerHTML = '';

    const noNum = document.querySelector('.noNum');
    const total = document.querySelector('.total');
    total.classList.remove('margin');
    noNum.innerHTML = '';

    const nocvv = document.querySelector('.noCvv');
    nocvv.innerHTML = '';

    const thankYou = document.querySelector('.bought');
    thankYou.innerHTML = '';
}


function buy() {
    const Name = document.querySelector('.cardName');
    const month = document.querySelector('.month');
    const year = document.querySelector('.year');
    const cardNum = document.querySelector('.CardNum');
    const cvv = document.querySelector('.cvvinput');

    if (Name.value.length < 3) {
        const errorparagraphname = document.querySelector('.noName');
        const nametitle = document.querySelector('.cardNumTitle');
        nametitle.classList.add('margin');
        errorparagraphname.innerHTML = 'Please Enter a valid name!';

        const errorparagraphexpire = document.querySelector('.noexpire');
        errorparagraphexpire.innerHTML = '';

        const errorparagraphnumber = document.querySelector('.noNum');
        errorparagraphnumber.innerHTML = '';
    }

    else if (month.value.length < 2 || month.value.length > 2 || year.value.length < 4 || year.value.length > 4) {
        const errorparagraphexpire = document.querySelector('.noexpire');
        const nametitle = document.querySelector('.cardNumTitle');
        nametitle.classList.add('margin');
        errorparagraphexpire.innerHTML = 'Please enter a valid expiry!';

        const errorparagraphname = document.querySelector('.noName');
        errorparagraphname.innerHTML = '';

        const errorparagraphnumber = document.querySelector('.noNum');
        errorparagraphnumber.innerHTML = '';
    }

    else if (cardNum.value.length != 19) {
        const errorparagraphnumber = document.querySelector('.noNum');
        const total = document.querySelector('.total');
        total.classList.add('margin');
        errorparagraphnumber.innerHTML = 'Please enter a valid number!';

        const errorparagraphexpire = document.querySelector('.noexpire');
        const nametitle = document.querySelector('.cardNumTitle');
        errorparagraphexpire.innerHTML = '';
        nametitle.classList.remove('margin');

        const errorparagraphname = document.querySelector('.noName');
        errorparagraphname.innerHTML = '';
    }

    else if (cvv.value.length != 3) {
            const errorparagraphcvv = document.querySelector('.noCvv');
            const total = document.querySelector('.total');
            total.classList.add('margin');
            errorparagraphcvv.innerHTML = 'Please enter a valid cvv!';

            const errorparagraphnumber = document.querySelector('.noNum');
            errorparagraphnumber.innerHTML = '';

            const errorparagraphname = document.querySelector('.noName');
            errorparagraphname.innerHTML = '';

            const errorparagraphexpire = document.querySelector('.noexpire');
            errorparagraphexpire.innerHTML = '';

            const number = document.querySelector('.cardNumTitle');
            number.classList.remove('margin');
    }

    else {
        const boughtparagraph = document.querySelector('.bought');
        boughtparagraph.innerHTML = 'Thank You for your purchase. Your eggs will be ready for pick up within 24 hours.'

        const errorparagraphcvv = document.querySelector('.noCvv');
        const total = document.querySelector('.total');
        errorparagraphcvv.innerHTML = '';
        total.classList.remove('margin');

        Name.value = '';
        month.value = '';
        year.value = '';
        cardNum.value = '';
        cvv.value = '';

        const errorparagraphname = document.querySelector('.noName');
        errorparagraphname.innerHTML = '';

        const errorparagraphexpire = document.querySelector('.noexpire');
        errorparagraphexpire.innerHTML = '';

        const errorparagraphnumber = document.querySelector('.noNum');
        errorparagraphnumber.innerHTML = '';
    }

};
