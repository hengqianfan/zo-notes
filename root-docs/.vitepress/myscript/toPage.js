

export const toPageWithTag = (tag) => {

    localStorage.setItem('now_tag', JSON.stringify({ token: tag }))
    router.go(`/zo-notes/zo-pages/all-articles?tag=${tag}`)
}
