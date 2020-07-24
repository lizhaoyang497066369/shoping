<template>
    <div id="sp_list">
        <div class="mui-content">
                <h3>{{datalist.name}}</h3>
            <div class="mui-row">
                <li class="mui-col-sm-6 mui-col-xs-6" v-for="(item,index) in datalist.sub" :key="item.id" @click="liclick(index)">
                    <a href="#" @click="aclicksed(item)">                        <img :src="item.image" alt="">
                        <p>{{item.name}}</p>
                        <p><span>{{item.id | upser}}</span><sub>剩余{{item.pid}}件</sub></p>
                    </a>
                </li>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'sp_list',
    data(){
        return {
            datalist:{},
        }
    },
    mounted(){
        var that = this
        that.$axios({
            method:'get',
            url:'http://47.93.224.9/api/category'
        }).then(function(e){
            that.datalist = e.data.data[that.$store.state.isp_list]
        })
    },
    methods:{
        liclick(ind){
            this.$store.commit('idetalisclick',ind)
        },
        aclicksed(val){
            this.$router.push({
                path:'/detalis',
                query:{
                    id:1,
                    i:{
                        id:val.id,
                        image:val.image,
                        name:val.name,
                        pid:val.pid,
                        sub:val.sub
                    },
                }
            })
        }
    },
    filters:{
        upser(e){
            return '￥'+e.toFixed(2)
        }
    }
}
</script>
<style scoped>
    #sp_list{
        margin-top: 40px;
    }
    .mui-content{
        margin-bottom: 40px;
    }
    h3{
        text-align: left;
        margin-left: 30px;
        color: #555555;
        line-height: 70px;
    }
    li{
        box-sizing: border-box;
        list-style:none;
    }
    li>a{
        margin: 10px 10px;
        display: block;
        border-radius: 18px;
        background: #ffffff;
        padding: 10px;
    }
    li img{
        width:70%;
    }
    li p{
        font-size: 20px;
        line-height: 25px;
        text-align: left;
        color: #333333;
        margin-left: 5px;
        margin-bottom: 0;
        font-weight: bold;
        padding-bottom: 10px ;

    }
    li p:last-child{
        font-size: 20px;
        display: flex;
        justify-content: space-between;
    }
    li p:last-child span{
        color: red;
    }
    
    li p:last-child sub{
        margin-top: 10px;
        color: #999999;
    }
    .mui-row{
    }
</style>