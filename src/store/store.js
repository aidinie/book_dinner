import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        //购物车商品数量
        count : 0,
        //用户名
        userName : '',
        //用户Id
        userId : '2',
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
        setUserMessage(state,obj){
            // debugger
            state.userName = obj.name;
            state.permission = obj.permission;
            state.userId = obj.uid;
        },
        removeUserMessage(state){
            state.userName = '';
            state.permission = '';
            state.userId = '';
            state.count = 0;
        }
        
    }
})
export default store;