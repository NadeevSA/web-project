function swap(element, side){
    var left = document.getElementById('left_review_' + element).innerHTML;
    var center = document.getElementById('center_review_' + element).innerHTML;
    var right = document.getElementById('right_review_' + element).innerHTML;
    var tmp = side == 'right' ? left : right;

    document.getElementById('left_review_' + element).innerHTML = side == 'right' ? right: center;
    document.getElementById('right_review_' + element).innerHTML = side == 'right' ? center: left;
    document.getElementById('center_review_' + element).innerHTML = tmp;
}

function swapPictire(element, side){
    var left = document.getElementById('left_review_' + element).src;
    var center = document.getElementById('center_review_' + element).src;
    var right = document.getElementById('right_review_' + element).src;
    var tmp = side == 'right' ? left : right;

    document.getElementById('left_review_' + element).src = side == 'right' ? right: center;
    document.getElementById('right_review_' + element).src = side == 'right' ? center: left;
    document.getElementById('center_review_' + element).src = tmp;
}

export function right_review(){
    swap('name', 'right');
    swap('text', 'right');
    swapPictire('ava', 'right');
}

export function left_review(){
    swap('name', 'left');
    swap('text', 'left');
    swapPictire('ava', 'left');
}