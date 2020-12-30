<template>
  <div id="app">
    <Header />
    <router-view />
    <FooterMusic />
  </div>
</template>

<script>
import Header from "@/components/Header";
import FooterMusic from "@/components/FooterMusic";
export default {
  name: "ele-vue",
  components: {
    Header,
    FooterMusic,
  },
};
</script>

<style>
/* CSS */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
