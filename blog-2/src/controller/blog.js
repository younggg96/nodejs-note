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

module.exports = {
    getList
}