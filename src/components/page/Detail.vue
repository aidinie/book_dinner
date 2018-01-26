<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6" :offset="3">
                <img src="../../assets/logo.png" alt="">
            </el-col>
            <el-col :span="6" class="tl">
                <p class="f20 tc p10 mT10">{{foodInfo.name}}</p>
                <div class="mT20">
                    <span class="p10">价格: <span class="f20 fb"> {{foodInfo.price}}</span> 元</span>
                    <span class="p10 mL30">月销量: <span class="f20 fb"> {{foodInfo.sales}}</span> 份</span>
                </div>
                <p class="mT20 p10">
                    <span>我想购买</span>
                    <i class="fa fa-plus cursor p10" aria-hidden="true" @click="add"></i>
                     <span class="p10">{{num}}</span>
                    <i class="fa fa-minus cursor p10" aria-hidden="true" @click="reduce"></i>
                    <span class="p10">份</span>
                </p>
                <el-button type="primary" class="mT20 mL10">加入购物车</el-button>
            </el-col>

        </el-row>  
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default{
    data(){
        return{
            foodInfo : {
                name : '菜品名称',
                price : '99',
                describe : '这是商品描述哈哈哈',
                sales : '60',
            },
            num : 1,
            id : '',
        }
    },
    created(){
        this.id = this.$route.query.id;
        console.log(this.id);
    },
    methods: {
        ...mapMutations['increment','decrement'],
        add: function(){
            this.num++;
            this.$store.commit('increment',1);
            console.log(this.num);

        },
        reduce: function(){
            if(this.num>1){
                this.num--;
                this.$store.commit('decrement',1);
                console.log(this.num);
            }
            

        }
    }
}

</script>

<style scoped>

</style>