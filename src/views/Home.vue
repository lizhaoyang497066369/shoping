<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="val in listimg" :key="val.id">
          <img :src="val.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 图文混排 -->

    <div class="mui-content">
      <div class="mui-row">
          <div class="mui-col-sm-4 mui-col-xs-4">
              <img src="../assets/img/home1.png" alt="">
              <p>新闻资讯</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
              <img src="../assets/img/home2.png" alt="">
              <p>图片分享</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
              <img src="../assets/img/home3.png" alt="">
              <p>商品购买</p>
          </div>
      </div>
      <div class="mui-row">
          <div class="mui-col-sm-4 mui-col-xs-4">
              <img src="../assets/img/home4.png" alt="">
              <p>留言反馈</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
              <img src="../assets/img/home5.png" alt="">
              <p>视频专区</p>
          </div>
          <div class="mui-col-sm-4  mui-col-xs-4">
              <img src="../assets/img/home6.png" alt="">
              <p>联系我们</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    // Home
  },
  data(){
    return {
      listimg:null,
    }
  },
  mounted() {
    var that = this
    that.$axios({
      method:'get',
      url:'http://47.93.224.9/api/imglist'
    }).then(function(e){
      that.listimg = e.data.data;
    }).catch(function(err){
      console.log(err);
    })
  },
}
</script>
<style scoped>
  .home{
    height:200px;
  }
  .mint-swipe{
    margin-top: 40px;
  }
  .mint-swipe-item img{
    width:100%;
  }
  .mui-row img{
    width: 50%;
  }
  .mui-content {
    padding-top: 20px;
    background: #ffffff;
  }
  .mui-row p{
    margin: 5px 0;
  }
  .mui-row{
    margin: 15px 0;
  }
</style>
