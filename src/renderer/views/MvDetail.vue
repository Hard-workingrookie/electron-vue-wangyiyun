<template>
  <div class="MvDetail">
    <video :src="mvUrl" controls="controls" height="538" width="862"></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.history.current.params.id,
      mvUrl: "",
    };
  },
  methods: {
    getVideo() {
      this.$http
        .get(this.$api +"/mv/detail", {
          params: {
            mvid: this.id,
          },
        })
        .then((response) => {
          //   this.mvData = response.data.result;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getVideoUrl() {
      this.$http
        .get(this.$api +"/mv/url", {
          params: {
            id: this.id,
          },
        })
        .then((response) => {
          //   this.mvData = response.data.result;
          this.mvUrl = response.data.data.url;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    // console.log(this.$router.history.current.params.id);
    this.getVideo();
    this.getVideoUrl();
  },

  computed: {},
};
</script>

<style  lang='scss'  scoped>
</style>
