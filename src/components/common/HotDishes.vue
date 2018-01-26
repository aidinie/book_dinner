<template>
        <div id='hotDishes'>
            <p>热菜系列</p>
            <dinner-item :dishesList='dishesList'></dinner-item>
        </div>
        </template>
        
        <script>
        //菜品
        import DinnerItem from '@/components/common/DinnerItem'
        export default{
            data(){
                return{
                    dishesList : [
                        {
                            id : 1,
                            name : '热菜1',
                            imgPath : '../../../static/logo.png',
                            price : 66,
                        },
                        {
                            id : 2,
                            name : '热菜2',
                            imgPath : '../../../static/logo.png',
                            price : 88,
                        },
                        {
                            id : 3,
                            name : '热菜3',
                            imgPath : '../../../static/logo.png',
                            price : 77,
                        },
                        {
                            id : 1,
                            name : '热菜1',
                            imgPath : '../../../static/logo.png',
                            price : 66,
                        },
                        {
                            id : 2,
                            name : '热菜2',
                            imgPath : '../../../static/logo.png',
                            price : 88,
                        },
                        {
                            id : 3,
                            name : '热菜3',
                            imgPath : '../../../static/logo.png',
                            price : 77,
                        },
                        {
                            id : 1,
                            name : '热菜1',
                            imgPath : '../../../static/logo.png',
                            price : 66,
                        },
                        {
                            id : 2,
                            name : '热菜2',
                            imgPath : '../../../static/logo.png',
                            price : 88,
                        },
                        {
                            id : 3,
                            name : '热菜3',
                            imgPath : '../../../static/logo.png',
                            price : 77,
                        },
                        {
                            id : 1,
                            name : '热菜1',
                            imgPath : '../../../static/logo.png',
                            price : 66,
                        },
                        {
                            id : 2,
                            name : '热菜2',
                            imgPath : '../../../static/logo.png',
                            price : 88,
                        },
                        {
                            id : 3,
                            name : '热菜3',
                            imgPath : '../../../static/logo.png',
                            price : 77,
                        }
                    ]
                }
            },
            components: {
                DinnerItem,
            }
            
        }
        
        </script>
        
        <style>
        
        </style>