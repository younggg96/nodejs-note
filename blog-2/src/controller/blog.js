// 关于数据方面
const getList = (authorm, keyword) => {
    // fake data
    return [
        {
            id: 1,
            title: 'foo',
            content: 'bar',
            createTime: new Date('2021-01-05'),
            author: 'a1'
        },
        {
            id: 2,
            title: 'foo2',
            content: 'bar2',
            createTime: new Date('2021-01-04'),
            author: 'a1'
        },
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: 'foo',
        content: 'bar',
        createTime: new Date('2021-01-05'),
        author: 'a1'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个blog 对象，包含 title content 属性
    console.log('blogData.', blogData)
    return {
        id: 3
    }
}

const updateBlog = (id, blogData = {}) => {
    // blogData 是一个blog 对象，包含 title content 属性
    console.log('blogData.', blogData, id)
    return false
}

const deleteBlog = (id) => {
    // blogData 是一个blog 对象，包含 title content 属性
    console.log('id.', id)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}