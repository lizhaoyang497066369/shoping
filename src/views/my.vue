<template>
    <div id="my">
        <div class="sec">
            <p>
                <a href="javascript">登陆</a>
                <a href="#">注册</a>
            </p>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'my',
}
</script>
<style scoped>
    #my{
        margin-top: 40px;
        padding: 10px 10px;
    }
    .sec{
        text-align: left;
        background: blue;
        padding: 20px;
    }
    .sec p a{
        
        font-size: 20px;
        color: #ffffff;
        margin-right: 10px;
        font-weight: bolder;
    }
</style>