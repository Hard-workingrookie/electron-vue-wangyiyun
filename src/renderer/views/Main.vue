<template>
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个性推荐" name="个性推荐">
        <Recommend />
      </el-tab-pane>
      <el-tab-pane label="歌单" name="歌单">
        <SongSheet />
      </el-tab-pane>
      <el-tab-pane label="主播电台" name="主播电台">
        <Anchor />
      </el-tab-pane>
      <el-tab-pane label="排行榜" name="排行榜">
        <RankingList />
      </el-tab-pane>
      <el-tab-pane label="歌手" name="歌手">定时任务补偿</el-tab-pane>
      <el-tab-pane label="最新音乐" name="最新音乐">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Recommend from "@/views/Recommend";
import SongSheet from "@/views/SongSheet";
import Anchor from "@/views/Anchor";
import RankingList from "@/views/RankingList";
export default {
  data() {
    return {
      activeName: "个性推荐",
    };
  },
  components: {
    Recommend,
    SongSheet,
    Anchor,
    RankingList,
  },
  methods: {
    handleClick(tab, event) {
      this.$store.commit("setPaneName", tab.paneName);
    },
  },
  created() {},
};
</script>

<style lang='scss' scoped>
</style>
