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
    insertCart: 'http://localhost/book_dinner_backstage/index.php/welcome/insertCart',//获取购物车菜品总数量

}, allApis, 'post')

export default allApis