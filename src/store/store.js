import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        //购物车商品数量
        count : 0,
        //用户名
        userName : '聂',
        //用户Id
        userId : '38',
        //用户权限 0:普通用户 1:商家
        permission : '',
        
    },
    mutations : {
        increment(state,n){
            state.count+=n;
        },
        decrement(state,n){
            state.count-=n;
        },
        setCount(state,num){
            state.count = num;
        },
        // setUserName(state,name){
        //     state.userName = name;

        // },
        // removeUserName(state){
        //     state.userName = '';
        // },
        // setPermission(state,permission){
        //     state.permission = permission;
        // },
        // removePermission(state){
        //     state.permission = "";
        // }
        setUserMessage(state,name,id,permission){
            state.userName = name;
            state.permission = permission;
            state.userId = id;
        },
        removeUserMessage(state){
            state.userName = '';
            state.permission = '';
            state.userId = '';
        }
        
    }
})
export default store;