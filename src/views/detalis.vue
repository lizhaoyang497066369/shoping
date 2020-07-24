<template>
    <div id='detalis'>
        <div class="sec1">
            <img :src="item.image" alt="">
        </div>
        <div class="sec2">
            <p class="title">{{item.name}}</p>
            <p>定价：<span>{{item.id | upser}}</span></p>
            <form action="">
                购买数量： <input type="button" value="-" @click="aclick"><input v-model="textval" type="text" value="0"><input type="button" value="+" @click="jclick">
            </form>
            <div>
                <button @click="mai">立即购买</button><button @click="jia">加入购物车</button>
            </div>
        </div>
        <div class="sec3">
            <h4>商品参数</h4>
            <hr />
            <p>商品卖点：</p>
            <p>库存情况：{{item.pid}}</p>
            <p>上架时间：2020-7-10 20：00：00</p>
            <h5>商品详情</h5>
            <p>规格：200*140*150</p>
            <p>类型：</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'detalis',
    data(){
        return {
            item:{},
            textval:1
        }
    },
    mounted(){
        var iec = this.$route.query.i
        if(iec !== "[object Object]"){
                
            localStorage.setItem('item',JSON.stringify(iec))
        }


        this.item = JSON.parse(localStorage.getItem('item'))
 
    },
    methods:{
        jclick(){
            this.textval++;
        },
        aclick(){
            if(this.textval > 1 ){
                this.textval--;
            }
        },
        mai(){
            this.$store.commit('itemarrpush',{"item":this.item,"shu":this.textval})
            this.$router.push("/shoping")
        },
        jia(){
            this.$store.commit('itemarrpush',{"item":this.item,"shu":this.textval})
        }
    },
    filters:{
        upser(i){
            return '￥'+ i;
        }
    }
}
</script>
<style scoped>
#detalis{
    width: 100%;
    margin-top: 40px;
    padding: 15px;
}
.sec1{
    height: 200px;
    background: #ffffff;
    box-shadow: 2px 2px 2px 2px #cccccc;
}
.sec2{
    margin: 20px 0;
    padding: 10px 20px;
    background: #ffffff;
    box-shadow: 2px 2px 2px 2px #cccccc;
    
    text-align: left;
}
.sec2 p{
    font-size: 19px;
    color: #333333;
    line-height:45px;
}
.sec2 span{
    color: rgb(216, 0, 0);
    font-weight: bold;
}
.sec2 .title{
    line-height: 45px;
    padding-bottom: 10px;
    border-bottom: 1px solid #9b9b9b;
    font-size: 22px;
    color: #333;
    font-weight: bold;
}
.sec2 form input{
    width: 50px;
    font-size: 17px;
    font-weight: bolder;
    background-color: #ebebeb;
}

.sec2 form input:nth-child(2){
    width: 60px;
    text-align: center;
    height: 38px;
    background-color: #ffffff;
}
.sec2 div{
    text-align: center;
}
.sec2 div button{
    padding: 10px 15px;
    margin: 20px 5px;
    color: #ffffff;
    letter-spacing: 2px;
    font-weight: bold;
}
.sec2 div button:first-child{
    background-color: blue;
}
.sec2 div button:last-child{
    background-color: red;
}
.sec3{
    background: #ffffff;
    text-align: left;
    padding-left: 20px;
}
.sec3 h4{
    font-size: 20px;
    padding-top: 5px;
    font-weight: bolder;
    line-height: 40px;
}
.sec3 h5{
    font-size: 18px;
    font-weight: bold;
    line-height: 35px;
    color: #555555;
}
.sec3 p{
    line-height: 25px;
    color: #838383;
}
</style>