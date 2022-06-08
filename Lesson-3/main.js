// Обработчик, handler, подписчик, subscriber, слушатель, listener -> function
// Handler будет вызван при наступлении события
// Handler будет вызван с аргументом ({})
// {} (сведения о произошедшем событии) -> event, ev, e, evt

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
const a = document.getElementById('a')

let count = 0;

const onClickHandler = (e) => {
    // if (e.altKey && e.ctrlKey) alert('hello!')
    // else console.log(e);
    console.log(e.currentTarget.id);
    // console.log(e.target.id);
}
const onClickHandlerSm = (e) => {
    e.stopPropagation();
    alert('yo!')
}

function anchorHandler(e) {
    // e.preventDefault();
    e.target.href = "https://google.com"
    if (e.altKey && e.ctrlKey) e.target.href = "https://learn.javascript.ru/document";
    console.log(e);
}
function anchorHandler2(e) {
    // e.preventDefault();
    e.target.href = "https://ya.ru"
    console.log(e);
}


// sm.onclick = onClickHandler;
// sm.onclick = null;
sm.addEventListener('click', onClickHandlerSm)
md.addEventListener('click', (e) => {
    console.log(e.currentTarget.id)
    e.stopPropagation();
});
a.addEventListener('click', anchorHandler);
a.addEventListener('mouseover', anchorHandler2);


