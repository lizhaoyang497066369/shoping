<template>
    <div>
        <div class="mui-content">
            <div class="mui-row">
                <div class="mui-col-sm-3 mui-col-xs-3">
                    <ul>
                        <li v-for="(val,ind) in list"  :ref="'li'+ ind"  :class="{'active' : ind == isactive }" @click="liclick(val.id)" :key="val.id">
                            <a :href="'#' + val.name">{{val.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="mui-col-sm-9 mui-col-xs-9">
                    <li v-for="(val,ind) in list" :key="val.id" @click="lcli(ind)"    :id="val.name">
                        <div class="box" ref="box"></div>
                        <h4>{{val.name}}</h4>
                        <ul class="mui-row">
                            <li class="mui-col-sm-4 mui-col-xs-4" v-for="item in val.sub" :key="item.id">
                                <router-link to='sp_list'>
                                    <img :src="item.image">
                                    <p>{{item.name}}</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'sp',
    data(){
        return {
            list:null,
            isactive:0,
            scrolls:0,
        }
    },
    mounted(){
        var that = this;
        that.$axios({
            method:"get",
            url:'http://47.93.224.9/api/category',
        }).then(function(e){
            that.list = e.data.data;
        }).catch(function(err){
            console.log(err)
        
        });
        window.addEventListener("scroll",this.hanscroll)
    },
    methods:{
        liclick(aid){
            this.isactive = aid
        },
        hanscroll(){
            if(document.documentElement.scrollTop < 400){
                this.isactive = 0;

            }else if(document.documentElement.scrollTop < 750){
                this.isactive = 1;
            }else if(document.documentElement.scrollTop < 1100){
                this.isactive = 2;
            }else if(document.documentElement.scrollTop < 1500){
                this.isactive = 3;
            }else if(document.documentElement.scrollTop < 1850){
                this.isactive = 4;
            }else if(document.documentElement.scrollTop < 2250){
                this.isactive = 5;
            }else if(document.documentElement.scrollTop < 2450){
                this.isactive = 6;
            }else{
                this.isactive = 7;
            }
        },
        lcli(ind){
            this.$store.commit('ispclik',ind)
        }
    },
    watch:{

    }
}
</script>
<style scoped>
html,
body{
    scroll-behavior: smooth;
}
.box{
    height: 40px;
    /*margin-top: ;*/
}
    ul{
        margin: 0 ;
        padding: 0;
    }
    li{
        list-style: none;
    }
    .mui-content {
        background-color: #ffffff;
        padding-top: 40px;
    }
    .mui-col-sm-3 {
        height: 100%;

    }
    .mui-col-sm-3 ul{
        position: fixed;
        background: #f5f5f5;
        width: 25%;
        padding-top: 3px;
        height: 100%;
    }
    .mui-col-sm-3 ul li{
        font-size: 13px;
        line-height: 40px;
    }
    .mui-col-sm-3 ul li a{
        color: #000000;
    }
    
    .mui-col-sm-9 {
    }
    .mui-col-sm-9 h4{
        text-align: left;
        margin: 20px 0;
        margin-left: 5px;
        font-size: 20px;
    }
    .mui-col-sm-4 img{
        width: 65%;
    }
    .active{
        background: #ffffff;
    }
</style>