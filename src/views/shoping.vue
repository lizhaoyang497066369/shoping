<template>
  <div id="shoping">
        <ul>
          <li class="shop" v-for="(val,index) in itemarr" :key="index">
              <div>
                  <input type="checkbox" v-model="isr[index]" @click="ische">
                  <img :src="val.item.image" alt="">
                  <section class="section">
                    <p>{{val.item.name}}</p>
                    <p class="fcr">{{val.item.id | upser}}</p>
                  </section>
              </div>
              <form action="">
                <input type="button" @click="aclick(val.shu,index)" value="-">
                <input type="text" class="bgf" v-model="val.shu">
                <input type="button" @click="jclick(val.shu,index)" value="+">
                <a href='javascript:;' @click="idelete(index)" >删除</a>
              </form>
          </li>
          <li class="foot">
              <p>
                总计不含运费<br />
                以勾选<span> {{chang}} </span>件商品，总共<span> {{Total}} </span>元
              </p>
              <button>去结算</button>       
          </li>
        </ul>
  </div>
</template>
<script>
export default {
  name:'shoping',
  data() {
    return {
      itemarr:[],
      isr:[true,true,true,true,true,true,true,true,true,true,],
    }
  },
  mounted(){
    this.$store.commit('cararr')
    this.itemarr = this.$store.state.itemarr
  },
  methods:{
    jclick(val,i){
      val++
      this.itemarr[i].shu = val
      this.$store.commit('ijcli',val,i)
    },
    aclick(val,i){
      if(val > 1){
        val--
      }
      this.itemarr[i].shu = val
      this.$store.commit('ijcli',val,i)
    },
    idelete(i){
      this.$store.commit('isarrdelete',i)
    },
    ische(){
      this.Total
    }
  },
  computed:{
    Total(){
      var num = 0;
      for(var i = 0; i < this.itemarr.length;i++){
        if(this.isr[i]){
          num += this.itemarr[i].item.id*this.itemarr[i].shu
        }
      }
      return num
    },
    chang(){
      var num = 0;
      for(var i = 0; i < this.itemarr.length;i++){
        if(this.isr[i]){
          num++
        }
      }
      return num
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
  #shoping{
    padding:10px 10px;
    margin-top: 40px;
  }
  ul{
    padding-left: 0;
  }
  li,ul{
    list-style: none;
  }
  .shop{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px;
  }
  .shop div{
    display: flex;
    justify-content: space-between;
  }
  .shop div input{
    width: 17px;
    height: 17px;
    margin-top: 35px;
    margin-left: 10px;
  }
  .shop div img{
    width: 80px;
    margin-left:10px;

  }
  .shop div .section{
    margin-top: 25px;
    margin-left: 7px;
    text-align: center;
  }
  .shop div p{
    text-align: left;
    margin-bottom: 0;
    font-size: 17px;
    font-weight: bolder;
    color: #000000;
  }
  .shop form{
    display: flex;
    justify-content: space-between;
  }

  .shop form input{
    width: 40px;
    height: 25px;
    margin-top: 40px;
    line-height: 20px;
    padding: 0;
    background: #f0f0f0;
    text-align: center;
  }
  .shop form a{
    margin-top: 46px;
    margin-left: 10px;
  }
  .shop form .bgf{
    background-color: #ffffff;
  }
  .shop .fcr{
    color: rgba(201, 0, 0, 0.801);
    margin-top: 3px;
    font-weight: bolder;
  }
  li{
    background-color: #ffffff;
    margin: 10px 0;
  }
  .foot{
    display: flex;
    justify-content: space-between;
    padding:20px;
  }
  .foot p{
    text-align: left;
  }
  .foot button{
    width: 80px;
    height: 45px;
    margin-top: 5px;
    background-color: blue;
    color: #ffffff;
  }
  .foot span{
    color: rgb(175, 0, 0);
    font-weight: bolder;
    margin: 0 2px;
  }
</style>