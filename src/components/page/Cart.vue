<template>
    <div class="tc mT20">
        <div>我的购物车</div>
        <el-table :data="cartData" stripe>
            <el-table-column prop="dname" label="菜品名称" header-align="center">
            </el-table-column>
            <el-table-column prop="price" label="单价" header-align="center">
            </el-table-column>
            <el-table-column prop="num" label="数量" header-align="center">
                <template slot-scope="scope">
                    <i class="fa fa-plus cursor" aria-hidden="true" @click="add(scope.row.id)"></i>
                    <span class="m10">{{scope.row.num}}</span>
                    <i class="fa fa-minus cursor" aria-hidden="true" @click="reduce(scope.row.id)"></i>
                </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center">
                <template slot-scope="scope">
                    <el-button @click="remove(scope.row.id)" type="primary" size="small" round>删除</el-button>
                </template>
            </el-table-column>
         </el-table>
        <div class="box boxVc p10">
            <div class="flex1"></div>
            <el-button type="primary" class="mR20"><router-link to='/index' class="td corF">继续购物</router-link></el-button>
            <div class="mR20">总价：<span>{{ totalPrice() }}</span> 元</div>
            <el-button type="primary" class="mR20" @click="buy">立刻下单</el-button>
        </div>
        <el-dialog title="选择收货地址" :visible.sync="dialogTableVisible">
            <el-table :data="addressInfo">
                <el-table-column label="选择" width="100" center header-align="center">
                        <template slot-scope="scope">
                            <el-radio class="radio" :label="scope.$index" v-model="selectedAddressIdx">&nbsp;</el-radio>
                        </template>
                </el-table-column>
                <el-table-column property="address" label="收货地址" header-align="center"></el-table-column>
            </el-table>
            <div class="cor5" v-show="showMsg">请选择收货地址！</div>
            <el-button type="primary" class="mR20 mT20"><router-link to='/personal/address' class="td corF">添加地址</router-link></el-button>
            <el-button type="primary" class="mR20 mT20" @click='ok'>确定</el-button>
        </el-dialog>
    </div>
</template>

<script>
import {monitorApi} from '@/api/index'
import { mapMutations,mapState } from 'vuex'
export default{
    data(){
        return{
            cartData: [],
            addressInfo:[],
            dialogTableVisible: false,
            selectedAddressIdx: '',
            selectedAddress:'',
            showMsg: false,
        }
    },
    computed:{
        ...mapState(['userId','userName'])
    },
    methods:{
        ...mapMutations['increment','decrement'],
        getIndex(id){
            var index = -1;
            for(var i = 0; i < this.cartData.length; i++){
                if(this.cartData[i].id == id){
                    index = i;
                }
            }
            return index;
        },
        remove(id){
            var self = this;
            monitorApi.deleteCartById({id:id}).then(
                function(data){
                    if(data.flag == "success"){
                        var index = self.getIndex(id);
                        var n = self.cartData[index].num;
                        self.cartData.splice(index,1);
                        self.$store.commit('decrement',n);
                        self.success('删除成功');
                    }else{
                        self.error('删除失败，请重试');

                    }
                }
            )
        },
        add(id){
            var index = this.getIndex(id);
            var updatedNum = this.cartData[index].num;
            var params = {
                did : this.cartData[index].did,
                num : updatedNum + 1,
                uid : this.userId                
            }
            var self = this;
            monitorApi.updateCart(params).then(
                function(data){
                    if(data.flag == "success"){
                        self.cartData[index].num++;
                        self.$store.commit('increment',1);
                        self.success('更新成功');
                    }else{
                        self.error('更新失败，请重试');

                    }
                }
            )

        },
        reduce(id){
            var index = this.getIndex(id);
            // if( this.cartData[index].num >1){
            //     this.cartData[index].num --;
            //     this.$store.commit('decrement',1);
            // }
            var updatedNum = this.cartData[index].num;
            if(updatedNum >1){
                var params = {
                did : this.cartData[index].did,
                num : updatedNum-1,
                uid : this.userId                
            }
            var self = this;
            monitorApi.updateCart(params).then(
                function(data){
                    if(data.flag == "success"){
                        self.cartData[index].num--;
                        self.$store.commit('decrement',1);
                        self.success('更新成功');
                    }else{
                        self.error('更新失败，请重试');

                    }
                }
            )

            }
          
        },
        totalPrice(){
            var total = 0;
            for(var i = 0; i < this.cartData.length; i++){
                total += this.cartData[i].num * this.cartData[i].price;
            }
            return total;
        },
        success(msg) {
            this.$message({
            message: msg,
            type: 'success',
            duration: '1000',
            center: true
            });
        },
        error(msg) {
            this.$message({
            message: msg,
            type: 'error',
            duration: '1000',
            center: true
            });
        },
        buy(){
            if(this.selectedAddress){
                var myDate = new Date();
                var year = myDate.getFullYear();
                var month = myDate.getMonth() + 1;
                var day = myDate.getDate();
                var hour = myDate.getHours();
                var minute = myDate.getMinutes();
                var seconds = myDate.getSeconds();
                if(month < 10){
                    month = '0' + month;
                }
                if(day < 10){
                    day = '0' + day;
                }
                if(hour < 10){
                    hour = '0' + hour;
                }
                if(minute < 10){
                    minute = '0' + minute;
                }
                if(seconds < 10){
                    seconds = '0' + seconds;
                }
                var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + seconds;
                var params = {};
                params.data = this.cartData.slice(0);
                params.phone = this.addressInfo[this.selectedAddressIdx].phone;
                params.name = this.userName;
                params.time = time;
                params.total = this.totalPrice();
                params.uid = this.userId;
                params.address = this.selectedAddress;
                monitorApi.placeAnOrder(params).then((data)=>{
                    if(data.flag == 'success'){
                        this.success('下单成功，请耐心等待！');
                    }else{
                        this.error('下单失败，请重新下单！')
                    }
                })
                
            }else{
                this.dialogTableVisible = true;
            }

        },
        ok(){
            if(typeof(this.selectedAddressIdx) == 'number'){
                this.selectedAddress = this.addressInfo[this.selectedAddressIdx].address;
                this.showMsg = false;
                this.dialogTableVisible = false;
            }else{
                this.showMsg = true
            }
        }
    },
    created(){
        monitorApi.getCartDishes({uid: this.userId}).then((data) =>{
            if(data.flag == 'empty'){

            }else{
                this.cartData = data;
            }
           
        }),
        monitorApi.getAddressInfo({uid: this.userId}).then((data) =>{
            if(data.flag == 'empty'){

            }else{
                this.addressInfo = data;
            }
           
        })
    }

}

</script>

<style>

</style>