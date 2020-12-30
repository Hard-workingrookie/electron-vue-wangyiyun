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
        <i class="el-icon-video-camera"></i>
        <span>{{ num | million }}</span>
      </div>
    </transition>
    <transition name="fade">
      <div class="info" v-show="active">{{ info }}</div>
    </transition>

    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["src", "title", "num", "info"],
  data() {
    return {
      active: false,
    };
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
  computed: {},
};
</script>

<style  lang='scss'  scoped>
.SongSheetCard {
  cursor: pointer;
  margin: 8px 4px;
  width: 280px;

  .SongSheetImg {
    width: 270px;
    height: 174px;
    position: relative;
  }

  .playVolume {
    position: absolute;
    margin-top: -178px;
    margin-left: 190px;
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
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .el-icon-video-camera {
      color: #fff;
      font-size: 16px;
      margin-right: 2px;
    }

    span {
      color: #fff;
    }
  }

  .info {
    position: absolute;
    width: 270px;
    margin-top: -178px;
    background-color: rgba($color: #3f4244, $alpha: 0.2);
    color: #fff;
    font-size: 14px;
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
