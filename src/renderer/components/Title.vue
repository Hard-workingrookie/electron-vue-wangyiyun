<template>
  <div class="title">
    <span class="name">{{ title }}</span>
    <div class="more">更多></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
};
</script>

<style  lang='scss'  scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  border-bottom: 1px solid #eee;
  .name {
    line-height: 40px;
  }
  .more {
    line-height: 30px;
    font-size: 12px;
    cursor: pointer;
  }
}
</style>
