function theme() {
  const themeButton = document.querySelector('.theme')
  const ls = window.localStorage
  const theme = ls.getItem('theme')
  if (theme === 'dark') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark')
    if (document.body.classList.contains('dark')) {
      ls.setItem('theme', 'dark')
    } else {
      ls.removeItem('theme')
    }
  })
}

export default theme
