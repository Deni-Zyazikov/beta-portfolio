"use strict"
window.addEventListener('load', windowLoad);

function windowLoad() {
    document.addEventListener('click',documentActions);
}
function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.hasAttribute('data-goto')){
        const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
        const headerHeight = document.querySelector(`.header`).offsetHeight;

        if (gotoElement) {
            window.scrollTo({
                top: gotoElement.offsetTop - headerHeight,
                behavior: "smooth"
            });
        }
        e.preventDefault();
    }

    if (targetElement.classList.contains('item-work__button') && !targetElement.classList.contains('active')){
        const activeElement = document.querySelector(`.item-work__button.active`);
        const elements = document.querySelectorAll(`.item-work__items`);
        const elementType = targetElement.dataset.workType;

        activeElement.classList.remove('active');
        targetElement.classList.add('active');

        elements.forEach(element => {
            !elementType || element.dataset.workType === elementType ?
                element.hidden = false : element.hidden = true;
        });
    }
}