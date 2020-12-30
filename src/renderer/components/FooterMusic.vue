<template>
  <div class="FooterMusic">
    <div class="leftMusic">
      <img src="" class="musicImg" alt="" />
      <div class="info">
        <span>粉色星球</span>
        <span>Youngior</span>
      </div>
      <div class="iconGroup">
        <span class="iconfont">&#xe618; </span>
        <span class="iconfont">&#xe70d;</span>
      </div>
    </div>
    <div class="audioBox">
      <audio :src="musicUrl" ref="myAudio"></audio>
      <span class="iconfont lastSong">&#xe78a; </span>
      <img
        class="playImg"
        src="../assets/img/play.png"
        @click="playSong"
        alt=""
      />
      <span class="iconfont nextSong"> &#xe7a5; </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musicUrl: "",
    };
  },
  methods: {
    getMusic() {
      this.$http
        .get(this.$api + "/song/url?id=33894312")
        .then((res) => {
          this.musicUrl = res.data.data[0].url;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    playSong() {
      this.$refs.myAudio.paused
        ? this.$refs.myAudio.play()
        : this.$refs.myAudio.pause();
    },
  },
  created() {
    this.getMusic();
  },
  filters: {},
  computed: {},
};
</script>

<style  lang='scss'  scoped>

$priColor: #d81e06;
.FooterMusic {
  cursor: pointer;
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
  .leftMusic {
    width: 180px;
    height: 70px;
    border: 1px solid #e1e1e2;
    background: #f6f6f8;

    img.musicImg {
    }

    .info {
      span {
      }
    }

    .iconGroup {
      i {
      }
    }
  }

  .audioBox {
    background: #f6f6f8;
    border-top: 1px solid #e1e1e2;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    .lastSong {
      color: #fff;
      font-size: 18px;
      background-color: $priColor;
      border-radius: 50%;
      padding: 6px;
      margin: 0 12px;
    }
    .playImg {
      width: 40px;
      height: 40px;
      margin: 0 12px;
    }
    .nextSong {
      margin: 0 12px;
      color: #fff;
      font-size: 18px;
      background-color: $priColor;
      border-radius: 50%;
      padding: 6px;
    }
  }
}
</style>
