export const getIconUrl = (momo) => {
    if (momo == null || momo == undefined) {
        return `/icon/png/logo.png`


    }
    return `/icon/png/${momo}.png`
}
