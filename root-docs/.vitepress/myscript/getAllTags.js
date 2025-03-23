export const getALLTags = (data) => {
    // 先清空数据
    // all_tags.value = []
    // 临时存放数据的数组
    let temp_arr = []
    // 遍历原始数据，把所有 tag 添加到 临时数组中
    for (let i = 0; i < data.length; i++) {



        // 先判断是否存在 信息中是否存在 tag ⭐
        if (data[i].frontmatter.tags) {
            // 获取当前文章的 tag 数组
            let now_tagarr = data[i].frontmatter.tags
            // 解构数组后，再添加到临时数组中
            temp_arr.push(...now_tagarr)
        }

    }


    // 数组去重并统计数量
    let obj = {}
    for (let i = 0; i < temp_arr.length; i++) {
        if (temp_arr[i] in obj) {
            obj[temp_arr[i]] = obj[temp_arr[i]] + 1;
        } else {
            obj[temp_arr[i]] = 1;
        }
    }

    // 补充一个总数
    // 暂时这样写，有更好的写法再说
    obj.全部文章 = data.length



    // 根据属性值排序

    const sortObj = (obj) => {
        // 降序排序value值
        let sortValue = Object.values(obj).sort((a, b) => {
            return b - a;
        })
        // 创建结果数组
        let res = {}
        // keys数组
        let keys = Object.keys(obj);
        // 给value值赋值相应keys值
        for (let i in sortValue) {
            // console.log(i);
            keys.forEach((item) => {
                if (sortValue[i] === obj[item]) {
                    res[item] = sortValue[i];
                }
            })
        }
        return res;
    }


    // 最后，把数据赋值给外部对象
    return sortObj(obj)
}


export const getALLTagsSorted = (momo) => {
    let res = getALLTags(momo)

    const { 全部文章, 修改中, 本月文章, 本周文章, ...new_res } = res

    return new_res

}