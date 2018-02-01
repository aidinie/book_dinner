import API from '../api/index'

let allApis = {}

// http get apis
API.makeApiMethod({

}, allApis)

// http post apis
API.makeApiMethod({
	insertUser: 'http://localhost/book_dinner_backstage/index.php/welcome/register', //注册用户插入数据库
	getDishes: 'http://localhost/book_dinner_backstage/index.php/welcome/getDishes', //注册用户插入数据库
    checkExist: 'http://localhost/book_dinner_backstage/index.php/welcome/checkExist',//注册时查看手机号是否已注册
    login: 'http://localhost/book_dinner_backstage/index.php/welcome/login',//登陆验证
    getCartDishes: 'http://localhost/book_dinner_backstage/index.php/welcome/getCartDishes',//获取购物车菜品

}, allApis, 'post')

export default allApis