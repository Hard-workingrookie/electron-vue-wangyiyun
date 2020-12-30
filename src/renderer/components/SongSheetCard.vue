<template>
  <div class="SongSheetCard">
    <img
      :src="src"
      alt=""
      class="SongSheetImg"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
    />
    <transition name="fade">
      <div class="playVolume" v-show="!active">
        <i class="el-icon-headset"></i>
        <span>{{ num | million }}</span>
      </div>
    </transition>
    <div class="" v-if="getPaneName == '个性推荐'">
      <transition name="fade">
        <div class="info" v-show="active">{{ info }}</div>
      </transition>
    </div>
    <div class="creator" v-if="getPaneName == '歌单'">
      <span class="creatorName">{{ creator }}</span>
    </div>

    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["src", "title", "num", "info", "creator"],
  data() {
    return {
      active: false,
    };
  },
  created() {
  
  },
  computed: {
    ...mapGetters(["getPaneName"]),
  },
  methods: {
    mouseOver() {
      this.active = true;
    },
    mouseLeave() {
      this.active = false;
    },
  },
  filters: {
    million: function (value) {
      //过万处理
      let num;
      if (value > 9999) {
        //大于9999显示x.xx万
        num = Math.floor(value / 1000) / 10 + "W";
      } else if (value < 9999 && value > -9999) {
        num = value;
      } else if (value < -9999) {
        //小于-9999显示-x.xx万
        num = -(Math.floor(Math.abs(value) / 1000) / 10) + "W";
      }
      return num;
    },
  },
};
</script>

<style  lang='scss'  scoped>
.SongSheetCard {
  margin: 8px 10px 50px 10px;
  cursor: pointer;
  width: 200px;
  .SongSheetImg {
    width: 200px;
    height: 202px;
    position: relative;
  }

  .playVolume {
    position: absolute;
    margin-top: -205px;
    margin-left: 120px;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
    padding: 0 10px;
    width: 80px;
    height: 24px;
    overflow: hidden;
    font-size: 12px;
    text-align: right;
    line-height: 24px;
    .el-icon-headset {
      color: #fff;
    }

    span {
      color: #fff;
    }
  }

  .info {
    position: absolute;
    width: 200px;
    margin-top: -205px;
    background-color: rgba($color: #5c6164, $alpha: 0.2);
    color: #fff;
    font-size: 14px;
  }
  .creator {
    position: absolute;
    margin-top: -26px;
    background-color: rgba($color: #5c6164, $alpha: 0.2);
    width: 200px;
    padding: 2px 8px;
    .creatorName {
      color: #fff;
      font-size: 14px;
    }
  }

  .title {
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-active {
  transition: opacity 1s;

  opacity: 0;
}
</style>
