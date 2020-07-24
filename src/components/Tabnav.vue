<template>
    <mt-tabbar v-model="selected" class="tabnav">
        <mt-tab-item id="home">
            <img slot="icon" src="../assets/img/home.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="sp">
            <img slot="icon" src="../assets/img/fl.png">
            商品
        </mt-tab-item>
        <mt-tab-item id="shoping" class="shoping">
            <img slot="icon" src="../assets/img/shoping.png">
            购物车
            <p class="p">{{this.$store.state.itemarr.length}}</p>
        </mt-tab-item>
        <mt-tab-item id="my">
            <img slot="icon" src="../assets/img/my.png">
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>
<script>
export default {
    name:'Tabnav',
    data(){
        return {
            selected:""
        }
    },
    watch:{
        selected(val){
            switch(val){
                case "home":
                    this.$router.push('/home');
                    break;
                case "sp":
                    this.$router.push('/sp');
                    break;
                case "shoping":
                    this.$router.push('/shoping');
                    break;
                case "my":
                    this.$router.push('/my');
                    break;
            }
        }
    }

}
</script>
<style scoped>
    .tabnav{
        position: fixed;
    }
    .p{
        position: absolute;
        left: 65%;
        top: 3px;
        width: 20px;
        background: red;
        border-radius: 50%;
        display: block;
        height: 20px;
        text-align: center;
        line-height: 20px;
        color: #ffffff;
    }
</style>