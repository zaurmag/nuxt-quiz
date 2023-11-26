import gsap from 'gsap'

export const gsapClearProps = (el) => {
  gsap.killTweensOf(el)
  gsap.set(el, { clearProps: 'all' })

  if (Array.isArray(el)) {
    el.forEach($item => {
      $item.removeAttribute('style')
    })
  } else {
    el.removeAttribute('style')
  }
}
