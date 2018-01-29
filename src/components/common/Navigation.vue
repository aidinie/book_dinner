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