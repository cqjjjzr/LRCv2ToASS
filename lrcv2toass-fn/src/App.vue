<template>
  <div id="app">
    <md-app id="md-app">
      <md-app-toolbar class="md-primary">
        <span class="md-title">LRCv2 转 K轴ASS</span>
      </md-app-toolbar>

      <md-app-content>
        <md-field>
          <label>待转换文本</label>
          <md-textarea v-model="srcText" id="src-text"></md-textarea>
        </md-field>

        <md-field>
          <label for="kCmd">K轴标签</label>
          <md-select v-model="kCmd" name="kCmd" id="kCmd" md-dense>
            <md-option value="k">\k - 逐字出现（在高亮前以次要颜色与透明度填充，音节开始时立刻切换为主要颜色与透明度）</md-option>
            <md-option value="K">\K - 擦除出现（在高亮前以次要颜色与透明度填充，音节开始时以从左向右的擦除效果切换为主要颜色与透明度）</md-option>
            <md-option value="kf">\kf - 与'K'相同</md-option>
            <md-option value="ko">\ko - 与'k'相似，但在高亮前音节的边框/边线不会显示，而在音节开始时会立刻出现</md-option>
          </md-select>
        </md-field>

        <md-button class="md-raised md-primary" id="convert-btn" v-on:click="doConvert">转换</md-button>

        <md-field>
          <label>转换结果</label>
          <md-textarea v-model="convertedText" id="converted-text"></md-textarea>
        </md-field>
      </md-app-content>
    </md-app>
    <footer class="cj-footer md-toolbar md-app-toolbar md-primary md-theme-default md-elevation-4" style="height: 25px;">Made by 茶栗, Hosted by 寂听.</footer>
    <!--{{ lv.ac.cn.origind.lrcv2toassjs.convertLRCV2("[00:14.82]あ[00:15.00]れ[00:15.16]か[00:15.34]ら[00:15.53]恋[00:15.85]だ[00:16.46]っ[00:16.67]て[00:16.97]し[00:17.36]た[00:18.48]け[00:18.75]ど[00:20.01]", "k")}}-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      srcText: '',
      convertedText: '',
      kCmd: 'k',
      lv: require('./LRCv2ToASSJS.js')
    }
  },
  methods: {
    doConvert: function (evt) {
      try {
        const converted = this.lv.ac.cn.origind.lrcv2toassjs.convertLRCV2(this.srcText, this.kCmd)
        this.convertedText = converted
      } catch (ex) {
        alert("转换失败！请检查原文本是否格式错误或查看 Console 窗口！")
        console.log(ex)
      }

    }
  }
}
</script>

<style>
  #md-app {
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, .12);
  }

  #src-text, #converted-text {
    height: 350px;
    min-height: 350px;
  }

  .md-menu-content.md-select-menu {
    width: auto;
    max-width: 700px;
  }

  #convert-btn {
    width: 100%;
    margin: 8px 0;
  }

  .cj-footer {
    position: fixed !important;
    bottom: 0 !important;
    min-height: 25px !important;
    height: 25px !important;
    width: 100%;
    background-color: #448aff;
    color: white;
  }

</style>
