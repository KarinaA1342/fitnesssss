let a = 1;

function slide(n) {
    document.querySelector(`.slider_block-${a}`).classList.remove('slider_block_active');
    a += n;
    if (a == 4) a = 1;
    if (a == 0) a = 3;
    document.querySelector(`.slider_block-${a}`).classList.add('slider_block_active');
}