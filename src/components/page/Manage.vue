<template>
    <div>
        <div>后台管理</div>
        <el-table :data="foodData" stripe>
            <el-table-column prop="name" label="菜品名称" header-align="center">
                <template slot-scope="scope">
                    <el-input placeholder="请输入内容" :value="scope.row.name" v-model="scope.row.name"></el-input>
                </template>   
            </el-table-column>
            <el-table-column prop="price" label="单价" header-align="center">
                <template slot-scope="scope">
                    <el-input placeholder="请输入内容" :value="scope.row.price" v-model="scope.row.price"></el-input>
                </template>   
            </el-table-column>
            <el-table-column prop="describe" label="菜品简介" header-align="center">
                <template slot-scope="scope">
                    <el-input placeholder="请输入内容" type="textarea" :rows="3" :value="scope.row.describe" v-model="scope.row.describe"></el-input>
                </template>   
            </el-table-column>
            <!-- <el-table-column prop="num" label="数量" header-align="center">
                <template slot-scope="scope">
                    <i class="fa fa-plus cursor" aria-hidden="true" @click="add(scope.row.id)"></i>
                    <span class="m10">{{scope.row.num}}</span>
                    <i class="fa fa-minus cursor" aria-hidden="true" @click="reduce(scope.row.id)"></i>
                </template>
            </el-table-column> -->
            <el-table-column label="操作" header-align="center">
                <template slot-scope="scope">
                    <el-button @click="update(scope.row.id,scope.row.name)" type="primary" size="small" round>确定修改</el-button>
                    <el-button @click="remove(scope.row.id,scope.row.name)" type="primary" size="small" round>删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="mT20">
            <el-button  @click="add" type="primary" round>添加菜品</el-button>
        </div>
    </div>

</template>

<script>
export default{
    data(){
        return{
            foodData:[
                {
                    id: 1,
                    name: '菜品1',
                    price: 66,
                    num:1,
                    describe: '这是一段菜品描述这是一段菜品描述这是一段菜品描述这是一段菜品描述这是一段菜品描述这是一段菜品描述'
                },
                {
                    id: 2,
                    name: '菜品2',
                    price: 77,
                    num:1,
                    describe: '这是一段菜品描述'
                },
                {
                    id: 3,
                    name: '菜品3',
                    price: 99,
                    num:3,
                    describe: '这是一段菜品描述'
                },
                {
                    id: 4,
                    name: '菜品4',
                    price: 66,
                    num:1,
                    describe: '这是一段菜品描述'
                },
                {
                    id: 5,
                    name: '菜品5',
                    price: 77,
                    num:1,
                    describe: '这是一段菜品描述'
                },
                {
                    id: 6,
                    name: '菜品6',
                    price: 99,
                    num:3,
                    describe: '这是一段菜品描述'
                }
            ]
        }
    },
    methods: {
        getIndex: function(id,name){
            var index = -1;
            if(id){
                //console.log("有id");
                for(var i = 0; i < this.foodData.length; i++){
                    if(this.foodData[i].id == id){
                        index = i;
                    }   
                }
                return index;
            }else{
                //console.log('没id')
                for(var i = 0; i < this.foodData.length; i++){
                    if(this.foodData[i].name == name){
                        index = i;
                    }   
                }
                return index;

            }
        },
        update: function(id,name){
            var idx = this.getIndex(id,name);
            console.log(this.foodData[idx]);
        },
        remove: function(id,name){
            var idx = this.getIndex(id,name);
            this.foodData.splice(idx,1);

        },
        add: function(){
            var obj = {
                id: '',
                price: '',
                name: '',
                describe: ''
            }
            this.foodData.push(obj);
        }
    }
}
</script>

<style scoped>
</style>