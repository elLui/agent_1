var myElement = document.querySelector('div:nth-child(5)');
const allElements = document.querySelector('.grid').querySelectorAll('div');


//myElement.style.background = '#f00';
myElement.classList.add('item-found');

function showFound() {
    let maxcolpos = -1, colposCount = 0;

    for(elem of allElements) {
        let l = elem.getBoundingClientRect().left;
        if (l > maxcolpos) {
            maxcolpos = l;
            if (myElement.getBoundingClientRect().left > l) colposCount ++;
        }
    }

    const columnIndex = colposCount + 1; //zero based, leave +1 if you want 0 based
    myElement.innerText = 'Column = ' + columnIndex;
}

showFound();

document.querySelector('.grid').addEventListener("click", function(e) {
    if (e.target && !e.target.matches(".grid")) {
        myElement.classList.remove('item-found');
        myElement.innerText = '';
        myElement = e.target;
        myElement.classList.add('item-found');
        showFound();
    }
});