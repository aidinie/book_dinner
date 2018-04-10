import API from '../api/index'

let allApis = {}

// http get apis
API.makeApiMethod({

}, allApis)

// http post apis
API.makeApiMethod({
	insertUser: 'http://localhost/book_dinner_backstage/index.php/welcome/register', //注册用户插入数据库
    getDishes: 'http://localhost/book_dinner_backstage/index.php/welcome/getDishes', //通过category获取菜品
    dishDetail: 'http://localhost/book_dinner_backstage/index.php/welcome/dishDetail', //通过id获取菜品详情
    checkExist: 'http://localhost/book_dinner_backstage/index.php/welcome/checkExist',//注册时查看手机号是否已注册
    login: 'http://localhost/book_dinner_backstage/index.php/welcome/login',//登陆验证
    getCartDishes: 'http://localhost/book_dinner_backstage/index.php/welcome/getCartDishes',//获取购物车菜品
    getCartDishesNum: 'http://localhost/book_dinner_backstage/index.php/welcome/getCartDishesNum',//获取购物车菜品总数量
    insertCart: 'http://localhost/book_dinner_backstage/index.php/welcome/insertCart',//插入或更新购物车
    updateCart: 'http://localhost/book_dinner_backstage/index.php/welcome/updateCart',//更新购物车商品数量
    deleteCartById: 'http://localhost/book_dinner_backstage/index.php/welcome/deleteCartById',//根据id删除某条记录
    insertReceiptInfo: 'http://localhost/book_dinner_backstage/index.php/welcome/insertReceiptInfo',//插入收货信息
    getAddressInfo: 'http://localhost/book_dinner_backstage/index.php/welcome/getAddressInfo',//查询收货信息
    updateAddressInfo: 'http://localhost/book_dinner_backstage/index.php/welcome/updateAddressInfo',//更新收货信息
    deleteAddressInfo: 'http://localhost/book_dinner_backstage/index.php/welcome/deleteAddressInfo',//更新收货信息
    placeAnOrder: 'http://localhost/book_dinner_backstage/index.php/welcome/placeAnOrder',//下单
    getOrder: 'http://localhost/book_dinner_backstage/index.php/welcome/getOrder',//获取订单列表
    getOrderDetail: 'http://localhost/book_dinner_backstage/index.php/welcome/getOrderDetail',//获取订单列表
    addComment: 'http://localhost/book_dinner_backstage/index.php/welcome/addComment',//添加评论


}, allApis, 'post')

export default allApis