function showDescription() {
  const card = document.querySelector('.products__container')

  if (card) {
    card.addEventListener('click', function (event) {
      if (event.target.closest('.product__image')) {
        event.target.closest('.product__image').classList.toggle('is--flipped')
      }
    })
  }
}

export default showDescription