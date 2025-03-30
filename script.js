
//function to make the billing section pop up when buy now is clicked
function blury(product) {
    //add blur to the background
    const background = document.querySelector('.background');
    background.classList.add('backgroundBlur');

    //Make the billing section pop up
    const popup = document.querySelector('.EggsDown');
    popup.classList.remove('EggsDown');
    popup.classList.add('EggsUp');

    //change billing details based on the product
    if (product === '6 Eggs') {
        //Change the title
        title = document.querySelector('.billTitle');
        title.innerHTML = '6 Eggs';

        //Change the image
        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/6Eggs.jpg";

        //Change the description
        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Six Delicious free range eggs, freshly collected and cleaned.';

        //Change the price
        const price = document.querySelector('.price');
        price.innerHTML = '$3.00';

        //Change the total
        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $3.00';
    }

    else if (product === '10 Eggs') {
        //Change the title
        title = document.querySelector('.billTitle');
        title.innerHTML = '10 Eggs';

        //Change the image
        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/10Eggs.jpg";

        //Change the description
        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Ten Delicious free range eggs, freshly collected and cleaned.';

        //Change the price
        const price = document.querySelector('.price');
        price.innerHTML = '$5.00';

        //Change the total
        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $5.00';
    }

    else if (product === '12 Eggs') {
        //Change the title
        title = document.querySelector('.billTitle');
        title.innerHTML = '12 Eggs';

        //Change the image
        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/12Eggs.jpg";

        //Change the description
        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Twelve Delicious free range eggs, freshly collected and cleaned.';

        //Change the price
        const price = document.querySelector('.price');
        price.innerHTML = '$6.00';

        //Change the total
        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $6.00';
    }

    else if (product === '18 Eggs') {
        //Change the title
        title = document.querySelector('.billTitle');
        title.innerHTML = '18 Eggs';

        //Change the image
        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/18Eggs.jpg";

        //Change the description
        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Eighteen Delicious free range eggs, freshly collected and cleaned.';

        //Change the price
        const price = document.querySelector('.price');
        price.innerHTML = '$9.00';

        //Change the total
        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $9.00';
    }

    else if (product === '24 Eggs') {
        //Change the title
        title = document.querySelector('.billTitle');
        title.innerHTML = '24 Eggs';

        //Change the image
        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/24Eggs.jpg";

        //Change the description
        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Twenty Four Delicious free range eggs, freshly collected and cleaned.';

        //Change the price
        const price = document.querySelector('.price');
        price.innerHTML = '$12.00';

        //Change the total
        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $12.00';
    }

    else if (product === '30 Eggs') {
        //Change the title
        title = document.querySelector('.billTitle');
        title.innerHTML = '30 Eggs';

        //Change the image
        const imageSrc = document.getElementById('eggsImage');
        imageSrc.src = "images/30Eggs.jpg";

        //Change the description
        const description = document.querySelector('.billDescription');
        description.innerHTML = 'Thirty Delicious free range eggs, freshly collected and cleaned.';

        //Change the price
        const price = document.querySelector('.price');
        price.innerHTML = '$15.00';

        //Change the total
        const total = document.querySelector('.total');
        total.innerHTML = 'Total: $15.00';
    }
};

//function to hide the billing section
function unblury() {
    //remove background blur
    const background = document.querySelector('.background');
    background.classList.remove('backgroundBlur');

    //hide the billing section
    const popup = document.querySelector('.EggsUp');
    popup.classList.remove('EggsUp');
    popup.classList.add('EggsDown');

    //clear the name input
    const name = document.querySelector('.cardName');
    name.value = '';

    //clear the month input
    const month = document.querySelector('.month');
    month.value = '';

    //clear the year input
    const year = document.querySelector('.year');
    year.value = '';

    //clear the card number input
    const cardNum = document.querySelector('.CardNum');
    cardNum.value = '';

    //clear the cvv input
    const cvv = document.querySelector('.cvvinput');
    cvv.value = '';

    //Get rid of the error message and margin for the card name input
    const noName = document.querySelector('.noName');
    const cardNumTitle = document.querySelector('.cardNumTitle');
    cardNumTitle.classList.remove('margin');
    noName.innerHTML = '';

    //Get rid of the no expiry error message
    const noexpire = document.querySelector('.noexpire');
    noexpire.innerHTML = '';

    //Get rid of the error message and margin for the card number input
    const noNum = document.querySelector('.noNum');
    const total = document.querySelector('.total');
    total.classList.remove('margin');
    noNum.innerHTML = '';

    //Get rid of the error message for the cvv input
    const nocvv = document.querySelector('.noCvv');
    nocvv.innerHTML = '';

    //Get rid of the succes message
    const thankYou = document.querySelector('.bought');
    thankYou.innerHTML = '';
}

//function to make sure the user has entered valid billing information
function buy() {
    const Name = document.querySelector('.cardName');
    const month = document.querySelector('.month');
    const year = document.querySelector('.year');
    const cardNum = document.querySelector('.CardNum');
    const cvv = document.querySelector('.cvvinput');

    //Check that the card name is more than three characters and less than 15 characters long
    if (Name.value.length < 3 || Name.value.length > 15) {
        //Display the error message
        const errorparagraphname = document.querySelector('.noName');
        const nametitle = document.querySelector('.cardNumTitle');
        nametitle.classList.add('margin');
        errorparagraphname.innerHTML = 'Please Enter a valid name!';

        //Make sure the expiry error message is hidden
        const errorparagraphexpire = document.querySelector('.noexpire');
        errorparagraphexpire.innerHTML = '';

        //Make sure the card number error message is hidden
        const errorparagraphnumber = document.querySelector('.noNum');
        errorparagraphnumber.innerHTML = '';
    }

    //Check that the Expiry details are valid
    else if (month.value.length < 2 || month.value.length > 2 || year.value.length < 4 || year.value.length > 4) {
        //Display the error message
        const errorparagraphexpire = document.querySelector('.noexpire');
        const nametitle = document.querySelector('.cardNumTitle');
        nametitle.classList.add('margin');
        errorparagraphexpire.innerHTML = 'Please enter a valid expiry!';

        //Make sure the card name error message is hidden
        const errorparagraphname = document.querySelector('.noName');
        errorparagraphname.innerHTML = '';

        //Make sure the card number error message is hidden
        const errorparagraphnumber = document.querySelector('.noNum');
        errorparagraphnumber.innerHTML = '';
    }

    //Check that the card number is valid
    else if (cardNum.value.length != 19) {
        //Display the error message
        const errorparagraphnumber = document.querySelector('.noNum');
        const total = document.querySelector('.total');
        total.classList.add('margin');
        errorparagraphnumber.innerHTML = 'Please enter a valid number!';

        //Make sure the expiry error message is hidden
        const errorparagraphexpire = document.querySelector('.noexpire');
        const nametitle = document.querySelector('.cardNumTitle');
        errorparagraphexpire.innerHTML = '';
        nametitle.classList.remove('margin');

        //Make sure the card name error message is hidden
        const errorparagraphname = document.querySelector('.noName');
        errorparagraphname.innerHTML = '';
    }

    //Check that the cvv is valid
    else if (cvv.value.length != 3) {
            //Display the error message
            const errorparagraphcvv = document.querySelector('.noCvv');
            const total = document.querySelector('.total');
            total.classList.add('margin');
            errorparagraphcvv.innerHTML = 'Please enter a valid cvv!';

            //Make sure the card number error message is hidden
            const errorparagraphnumber = document.querySelector('.noNum');
            errorparagraphnumber.innerHTML = '';

            //Make sure the card name error message is hidden
            const errorparagraphname = document.querySelector('.noName');
            errorparagraphname.innerHTML = '';

            //Make sure the card expiry error message is hidden
            const errorparagraphexpire = document.querySelector('.noexpire');
            errorparagraphexpire.innerHTML = '';

            //Remove the margin from the card number title
            const number = document.querySelector('.cardNumTitle');
            number.classList.remove('margin');
    }

    //Display the success message
    else {
        //Display the success message
        const boughtparagraph = document.querySelector('.bought');
        boughtparagraph.innerHTML = 'Thank You for your purchase. Your eggs will be ready for pick up within 24 hours.'

        //Make sure the cvv error message is hidden
        const errorparagraphcvv = document.querySelector('.noCvv');
        const total = document.querySelector('.total');
        errorparagraphcvv.innerHTML = '';
        total.classList.remove('margin');

        //Clear the inputs
        Name.value = '';
        month.value = '';
        year.value = '';
        cardNum.value = '';
        cvv.value = '';

        //Make sure the card name error message is hidden
        const errorparagraphname = document.querySelector('.noName');
        errorparagraphname.innerHTML = '';

        //Make sure the expiry error message is hidden
        const errorparagraphexpire = document.querySelector('.noexpire');
        errorparagraphexpire.innerHTML = '';

        //Make sure the card number error message is hidden
        const errorparagraphnumber = document.querySelector('.noNum');
        errorparagraphnumber.innerHTML = '';
    }

};

//Function to change to the products page
function productsPage() {
    window.location.href = "Products.html";
}
