export const getIconUrl = (momo) => {
    if (momo == null || momo == undefined) {
        return `/icon/png/logo.png`


    }
    return `/icon/png/${momo}.png`
}

export const getCoverUrl = (momo) => {
    if (momo == null || momo == undefined) {
        return `/cover/momo.png`


    }
    return `/cover/${momo}.png`
}

// export const getLifeArticle = (momo) => {
//     return `/posts/${momo}`
// }
