<template>
  <div id="app">
    <div class="stage">
      <div class="lang">
        <span @click="changeLang('ch')">中</span>
        <span @click="changeLang('en')">English</span>
      </div>
      <VueGithubCorners :repoUrl="repoUrl" :catColor="catColor" :bgColor="bgColor"></VueGithubCorners>
      <div class="logo">
        <img width="230" alt="Vue-baberrage logo" src="./assets/logo.png">
      </div>
      <div class="slide">
      </div>
      <div class="slide slide-2">
      </div>
      <div class="slide slide-3">
      </div>
      <vue-baberrage
        :isShow= "barrageIsShow"
        :barrageList = "messageList"
        :loop = "barrageLoop"
        :maxWordCount = "60"
        >
      </vue-baberrage>
      <div class="demo-control">
        <div class="inside">
          <input type="text" style="float:left"  v-model="msg" />
          <button type="button" style="float:left" @click="addToList">LAUNCH</button>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>{{$t("message.introduce")}}</h1>
      <img alt="" src="https://img.shields.io/badge/vueBaberrage.js-2.1.2-green.svg">
      <img alt="" src="https://img.shields.io/badge/vue.js-2.5.22-brightgreen.svg">
      <img alt="" src="https://img.shields.io/badge/minified size-20kB-blue.svg">
      
      <div class="button-group">
        <a :href="repoUrl" target="_blank">{{$t("message.start")}}</a>
        <a :href="repoUrl" target="_blank" class="fan">{{$t("message.doc")}}</a>
      </div>

      <div class="box-container">
        <div class="box">
          <h2>{{$t("message.title1")}}</h2>
          <p>{{$t("message.content1")}}</p>
        </div>
        <div class="box">
          <h2>{{$t("message.title2")}}</h2>
          <p>{{$t("message.content2")}}</p>
        </div>
        <div class="box">
          <h2>{{$t("message.title3")}}</h2>
          <p>{{$t("message.content3")}}</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
      MIT Licensed | Copyright @ 2019 SevensChan (<a href="https://www.chenhaotaishuaile.com">Homepage</a>)
      </div>
    </div>
  </div>
</template>

<script>
import 'es6-promise/auto'
import { mapState, mapActions } from 'vuex'
import { VueGithubCorners } from 'vue2-github-corners'
import { MESSAGE_TYPE } from 'vue-baberrage'
import paper from './paper.json'
import { setInterval, clearInterval } from 'timers';

export default {
  name: 'app',
  components: {VueGithubCorners},
  computed: mapState({
    messageList: state => state.baberrage.messageList
  }),
  data () {
    return {
      msg: 'Hello World! Vue-baberrage 3.0.2!',
      repoUrl: 'https://github.com/superhos/vue-baberrage',
      catColor: '#025d63',
      bgColor: '#FFF',
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: false,
      barrageList: []
    }
  },
  mounted () {
    let id = 0
    let amount = paper.length
    let intervalId = setInterval(() => {
      if (id >= amount) {
        clearInterval(intervalId)
        return
      }
      this.addMessage(paper[id++])
    }, 1000)
  },
  methods: {
    ...mapActions('baberrage', [
      'addMessage'
    ]),
    removeList () {
      this.barrageList = []
    },
    addToList () {
      this.addMessage({
        id: ++this.currentId,
        avatar: 'https://github.com/superhos/vue-baberrage/blob/master/static/avatar.jpg?raw=true',
        msg: this.msg,
        time: 15,
        type: MESSAGE_TYPE.NORMAL
      })
      // this.barrageList.push({
      //   id: ++this.currentId,
      //   avatar: 'https://github.com/superhos/vue-baberrage/blob/master/static/avatar.jpg?raw=true',
      //   msg: this.msg,
      //   time: 15,
      //   type: MESSAGE_TYPE.NORMAL
      // })
    },
    changeLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

.stage {
  height: 300px;
  width: 100%;
  background: #025d63;
  position: relative;
  overflow: hidden;
}

.lang {
  position: absolute;
  left: 0;
  top: 0;
  color: #66aabb;
  padding: 5px 10px;
  font-size: 15px;
  z-index: 998;
}

.lang span{
  margin-right: 8px;
  cursor: pointer;
}

.lang span:hover {
  color: #FFF;
}

.logo {
  position: relative;
  z-index: 99;
}

.github-corners {
  position: absolute;
  top: 0;
  right: 0;
  height: 100px;
  width: 100px;
  z-index: 9999;
}

.slide {
  width: 100%;
  height: 150px;
  background: #02676d;
  position: absolute;
  left: 0%;
  z-index: 1;
  transform: rotate(-45deg);
}

.slide-2 {
  width: 100%;
  height: 60px;
  left: -120px;
  z-index:80;
}

.slide-3 {
  width: 100%;
  height: 40px;
  left: 205px;
  z-index:1;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.content {
  margin-top:3em;
  padding-bottom:3em;
}

.content h1 {
  margin:0;
  margin-bottom: 20px;
}

.content img {
  margin-right: 5px;
}

.content .button-group {
  margin-top: 15px;
}

.content .button-group a{
  position: relative;
  height: 50px;
  width: 10em;
  background: #00686e;
  border: 1px solid #00686e;
  color: #FFF;
  border-radius: 50px;
  margin: 1em 0;
  letter-spacing: 0.1em;
  min-width: 8em;
  text-align: center;
  margin-right: 1em;
  display: inline-block;
  font-size: 1.2em;
  line-height: 2.7em;
  font-weight: 100;
  cursor: pointer;
  text-decoration: none;
}

.content .button-group a.fan {
  background: #FFF;
  border:1px solid #00686e;
  color: #00686e;
}

.baberrage-stage {
  top: 0;
  z-index:5;
}

.baberrage-stage .baberrage-item.normal{
  color:#FFF;
}

.top{
  border:1px solid #66aabb;
}

.demo-control {
  width: 100%;
  box-sizing: border-box;
  height: 58px;
  margin: 0 auto;
  position: absolute;
  bottom: 30px;
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 99;
}

.demo-control .inside{
  background: rgba(0, 0, 0, 0.6);
  padding: 15px 5px;
  border-radius: 5px;
  border: 2px solid #8ad9ff;
  width: 400px;
  align-items: center;
  display: flex;
  justify-content: center;
}

.demo-control input, .demo-control button, .demo-controlselect{
  height:35px;
  padding:0;
  float:left;
  background:#00f3d8;
  border:1px solid #71daff;
  color:#008e97;
  border-radius:0;
  width:15%;
  box-sizing: border-box;
  outline: none;
}

.demo-control button{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 0;
}

.demo-control button:hover{
  color:#00f3d8;
  background:#008e97;
  cursor: pointer;
}

.demo-control input{
  width: 75%;
  height: 35px;
  background: rgba(0,0,0,.7);
  border: 1px solid #8ad9ff;
  padding-left: 15px;
  color: #FFF;
}

.box-container {
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: 0 auto;
  border-top: 1px solid #e3e3e3;
  margin-top: 15px;
  padding-top: 15px;
}

.box-container .box {
  flex: 1;
  padding: 5px 10px;
}

.footer {
  padding: 1em 0;
  color: #767676;
  justify-content: center;
  text-align: center;
  width: 100%;
  display: flex;
}

.footer div {
  width: 60%;
  border-top: 1px solid #e3e3e3;
  padding-top: 1em;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .box-container {
    flex-direction: column;
  }
}
</style>
