export function handleAnchorClick (event) {
    event.preventDefault()
    const link = event.currentTarget
    const anchorId = new URL(link.href).hash.replace('#', '')
    const anchor = document.getElementById(anchorId)
    if (anchor) {
        window.scrollTo({
            top: anchor.offsetTop,
            behavior: 'smooth'
        })
    }
}