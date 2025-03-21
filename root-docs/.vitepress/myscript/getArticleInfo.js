export const getArticleOutline = (data) => {
    const removeExtraContent = (content) => {
        // 移除标签代码
        content = content.replace(/<[^>]+>/g, "");
        // 移除标点符号
        content = content.replace(/[`:_.~!@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~！@#￥%……&*（）—— \+ ={}|《》？：“”【】、；‘’，。、]/g,
            '');
        return content
    }
    return removeExtraContent(data)
}