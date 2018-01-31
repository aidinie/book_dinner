import API from '../api/index'

let allApis = {}

// http get apis
API.makeApiMethod({

}, allApis)

// http post apis
API.makeApiMethod({
	insertUser: 'http://localhost/book_dinner_backstage/index.php/welcome/register', //注册用户插入数据库
	getDishes: 'http://localhost/book_dinner_backstage/index.php/welcome/getDishes', //注册用户插入数据库

}, allApis, 'post')

export default allApis