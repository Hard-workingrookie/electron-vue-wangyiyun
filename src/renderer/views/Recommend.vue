<template>
  <div class="container">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in banners" :key="item.scm">
        <img class="bannersImg" :src="item.imageUrl" alt="" srcset="" />
      </el-carousel-item>
    </el-carousel>
    <Title title="推荐歌单" />
    <div class="SongSheet">
      <div class="SongSheetList" v-for="item in SongSheet" :key="item.id">
        <SongSheetCard
          :src="item.picUrl"
          :info="item.copywriter"
          :num="item.playCount"
          :title="item.name"
        />
      </div>
    </div>

    <Title title="独家放送" />
    <Title title="最新音乐" />
    <Title title="推荐MV" />
    <div class="MVSheet">
      <div
        class="MVList"
        v-for="item in mvData"
        :key="item.id"
        @click="goMvDetail(item.id)"
      >
        <MVCard
          :src="item.picUrl"
          :info="item.copywriter"
          :num="item.playCount"
          :title="item.name"
        />
      </div>
    </div>
    <Title title="主播电台" />
    <Title title="听听" />
    <Title title="看看" />
  </div>
</template>
<script>
import Title from "@/components/Title";
import SongSheetCard from "@/components/SongSheetCard";
import MVCard from "@/components/MVCard";
export default {
  data() {
    return {
      banners: [],
      SongSheet: [], //推荐歌单
      mvData: [],
    };
  },
  components: {
    Title,
    SongSheetCard,
    MVCard,
  },
  methods: {
    getBanner() {
      this.$http
        .get(this.$api +"/banner?type=0")
        .then((response) => {
          this.banners = response.data.banners;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getSongSheet() {
      this.$http
        .get(this.$api +"/personalized", {
          params: {
            limit: 9,
          },
        })
        .then((response) => {
          this.SongSheet = response.data.result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMVSheet() {
      this.$http
        .get(this.$api +"/personalized/mv", {
          params: {
            limit: 4,
          },
        })
        .then((response) => {
          this.mvData = response.data.result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goMvDetail(mvid) {
      this.$router.push({
        name: "MvDetail",
        params: { id: mvid },
      });
    },
  },
  created() {
    this.getBanner();
    this.getSongSheet();
    this.getMVSheet();
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
