<template>
  <div class="">
    <el-container class="container">
      <el-container class="main" style="padding-top: 66px">
        <el-aside
          width="180px"
          style="border-right: 1px solid #e1e1e2; background: #f6f6f8"
        >
          <LeftMenu />
        </el-aside>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import LeftMenu from "@/views/LeftMenu";
import Header from "@/components/Header";
import Main from "@/views/Main";

export default {
  data() {
    return {};
  },
  components: {
    LeftMenu,
    Header,
    Main,
  },
  async mounted() {
    // let id = this.$route.query.id;
    // let self = this;
    // await this.$http.get(this.$api + "/song/url?id=" + id).then((res) => {
    //   this.$store.commit("setMusicUrl", res.data.data[0].url);
    // });
    // this.$http.get(this.$api + "/lyric?id=" + id).then((res) => {
    //   this.currentLyric = new Lyric(res.data.lrc.lyric, self.handleLyric);
    //   this.currentLyric.play();
    // });
  },
  created() {
    // this.$http
    //   .get("/api/search/hot")
    //   .then((response) => {
    //     console.log(response.data.result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style lang='scss' scoped>
.el-header {
  padding: 0 !important;
}
</style>
