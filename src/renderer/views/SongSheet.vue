<template>
  <div class="container" style="overflow: auto">
    <div class="SongSheet">
      <div class="SongSheetList" v-for="item in SongSheet" :key="item.id">
        <SongSheetCard
          :src="item.coverImgUrl"
          :num="item.playCount"
          :title="item.name"
          :creator="item.creator.nickname"
        />
      </div>
    </div>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>
<script>
import SongSheetCard from "@/components/SongSheetCard";
export default {
  data() {
    return {
      SongSheet: [], //推荐歌单
      limit: 15,
      loading: false,
      noMore: false,
    };
  },
  components: {
    SongSheetCard,
  },
  methods: {
    getSongSheet() {
      this.$http
        .get(this.$api + "/top/playlist", {
          params: {
            limit: this.limit,
          },
        })
        .then((res) => {
          let data = [];
          data = res.data.playlists;
          this.loading = true;
          if (res.data.more) {
            setTimeout(() => {
              this.limit += 15;
              this.SongSheet = this.SongSheet.concat(data);
              this.loading = false;
            }, 200);
          } else {
            this.noMore = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getSongSheet();
  },
};
</script>

<style lang='scss' scoped>
.container {
  padding: 0 80px;
  box-sizing: border-box;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.bannersImg {
  width: 100%;
  height: 200px;
}
.SongSheet,
.MVSheet {
  display: flex;
  flex-wrap: wrap;
}
</style>
