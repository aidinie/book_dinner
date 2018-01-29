<template>
    <el-table :data='commentData' style="width:100%">
        <el-table-column prop="comment" label="评论" header-align="center">
        </el-table-column>
        <el-table-column prop="userName" label="评论人" header-align="center">
        </el-table-column>
    </el-table>
</template>

<script>
export default{
    props: ["id"],
    data(){
        return{
        //    cid : this.id
            commentData: [
                {
                    comment : '很好',
                    userName : 'liu'
                },
                {
                    comment : '不错',
                    userName : 'wang'

                },
                {
                    comment : '很好',
                    userName : 'liu'
                },
                {
                    comment : '不错',
                    userName : 'wang'

                },
                {
                    comment : '很好',
                    userName : 'liu'
                },
                {
                    comment : '不错',
                    userName : 'wang'

                }
            ]
        }
    }
}
</script>

<style scoped>

    
</style>