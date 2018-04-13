<template>
	<el-menu :default-active="curIndex" class="el-menu-vertical-demo">
		<router-link :to="{path:'/index/cold'}">
			<el-menu-item index="1">
				<i class="el-icon-menu"></i>
				<span>凉菜系列</span>
			</el-menu-item>
		</router-link>
		<router-link :to="{path:'/index/hot'}">
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span>热菜系列</span>
			</el-menu-item>
		</router-link>
		<router-link :to="{path:'/index/seafood'}">
			<el-menu-item index="3">
				<i class="el-icon-menu"></i>
				<span>海鲜系列</span>
			</el-menu-item>
		</router-link>
		<router-link :to="{path:'/index/drinks'}">
			<el-menu-item index="4">
				<i class="el-icon-menu"></i>
				<span>酒水系列</span>
			</el-menu-item>
		</router-link>
		<router-link :to="{path:'/index/staple'}">
			<el-menu-item index="5">
				<i class="el-icon-menu"></i>
				<span>主食系列</span>
			</el-menu-item>
		</router-link>
	</el-menu>
</template>

<script>
export default{
	data(){
		return{
			curIndex : "1",
		}
	},
	created(){
		var path = this.$route.path;
		if(path == "/index/hot"){
			this.curIndex = "2";
		}else if(path == "/index/seafood"){
			this.curIndex = "3";
		}else if(path == "/index/drinks"){
			this.curIndex = "4";
		}else if(path == "/index/staple"){
			this.curIndex = "5";
		}
	}
}

</script>

<style scoped>
a{
  text-decoration: none;
  color: black
}
.router-link-active{
  color: #409EFF
}
</style>