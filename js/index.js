'use strict';

document.getElementById('menu-list').addEventListener('click', (e) => {
    let arrowElem = document.getElementById('arrow');

    // Log arrow's current position
    let curArrowPos = arrowElem.offsetLeft;

    // Check if clicked element is a list item
    if (e.target.tagName == 'A') {



        // If target is one of the last two items in the list, stop event from bubbling up.
        if(e.target.id == 'item-4' || e.target.id == 'item-5') {
            e.stopPropagation();
        }

        // Else let event bubble up and continue action
        else {
            // Prevent menu links from actually going anywhere
            e.preventDefault();

            // If there's any other menu items that are "active", remove active state
            if(document.querySelector('.menu-list__item--active') != null) {
                document.querySelector('.menu-list__item--active').classList.remove('menu-list__item--active');
            }

            //Add "active" menu class to clicked element
            e.target.classList.add('menu-list__item--active');

            // Calculate where the arrow should be moving to
            let arrowPosition = Math.floor(e.target.offsetLeft + ((e.target.getBoundingClientRect().width) / 2));

            // If position it should be moving to is the same as logged position,
            // hide arrow and remove "active" menu item class
            if ((arrowPosition - 10) == curArrowPos) {
                arrowElem.classList.remove('arrow--shown');
                e.target.classList.remove('menu-list__item--active');
            }

            // If different, move arrow to position, and show arrow if it's not currently shown.
            else {
                arrowElem.style.left = arrowPosition;
                arrowElem.classList.add('arrow--shown');
            }
        }
    }
});
