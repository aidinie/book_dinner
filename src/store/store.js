import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        //购物车商品数量
        count : 0,
        //用户名
        userName : '聂爱迪',
        //用户Id
        userId : '',
        //用户权限 0:普通用户 1:商家
        permission : '1',
        
    },
    mutations : {
        increment(state,n){
            state.count+=n;
        },
        decrement(state,n){
            state.count-=n;
        },
        setUserName(state,name){
            state.userName = name;

        },
        removeUserName(state){
            state.userName = '';
        },
        setPermission(state,permission){
            state.permission = permission;
        },
        removePermission(state){
            state.permission = "";
        }
        
    }
})
export default store;