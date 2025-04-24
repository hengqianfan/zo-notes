export const formatDate = (momo) => {


    let year = momo.slice(0, 2)
    let month = momo.slice(2, 4)
    let day = momo.slice(4, 6)
    return `⏰20${year}年${month}月${day}日`
}


export const formatDate2 = (momo) => {
    let year = momo.slice(0, 2)
    let month = momo.slice(2, 4)
    let day = momo.slice(4, 6)
    return `20${year}/${month}/${day}`
}