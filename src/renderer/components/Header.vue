<template>
  <div
    class="container"
    style="-webkit-app-region: drag; -webkit-user-select: none"
  >
    <div class="left" style="-webkit-app-region: no-drag">
      <div class="logo">
        <span class="iconfont">&#xe650;</span>
        <span class="logoIcon">网易云音乐</span>
      </div>
      <div class="backGo">
        <i class="back el-icon-arrow-left" @click="goBack"></i>
        <i class="go el-icon-arrow-right"></i>
      </div>
      <div class="search">
        <input
          class="searchInput"
          type="text"
          placeholder="搜索音乐、视频、歌词、电台"
        />
        <span class="iconfont">&#xe612;</span>
      </div>
    </div>
    <div class="right" style="-webkit-app-region: no-drag">
      <div class="login">
        <div class="username">
          <span class="usernameIcon iconfont">&#xe6b6; </span>
        </div>
        <span class="usernameText">未登录</span>
        <span class="downIcon iconfont">&#xe638;</span>
      </div>
      <span class="openingVip">开通VIP</span>
      <span class="shirt iconfont">&#xe686;</span>
      <span class="email iconfont"> &#xe63a;</span>
      <span class="setting iconfont">&#xe9cb;</span>
      <div class="tool">
        <span class="iconfont" @click="send('min')">&#xe61c; </span>
        <span class="iconfont max" @click="send('max')">&#xe7bf;</span>
        <span class="iconfont" @click="send('close')">&#xe6dc;</span>
      </div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer: ipc } = require("electron");

export default {
  data() {
    return {};
  },
  methods: {
    send(type) {
      ipc.send(type);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style  lang='scss'  scoped>
.iconfont {
    color: #fff !important;
}

.container {
  background: #c62f2f;
  height: 66px;
  width: 100vw;
  color: #fff !important;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 0 12px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 999;
  .left {
    flex: 7;
    display: flex;
    align-items: center;
    .logo {
      .logoIcon {
        color: #fff !important;
      }
    }

    .backGo {
      margin-left: 76px;
      height: 24px;
      display: flex;
      align-items: center;
      padding: 6px 12px;
      color: #fff !important;
      .back {
      }

      .go {
      }
    }

    .search {
      width: 270px;
      height: 28px;
      border-radius: 30px;
      background: #a82828;
      color: #fff;
      display: flex;
      align-items: center;
      border: none;
      .iconfont {
        padding: 0 12px;
      }
      .searchInput {
        margin-left: 6px;
        padding: 0 12px;
        flex: 1;
        background: #a82828;
        border: none;
        color: #fff;
        outline: none;
      }
    }
  }

  .right {
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    cursor: pointer;
    .login {
      display: flex;
      align-items: center;

      .username {
        width: 30px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e1e3e4;
        border-radius: 50%;
        margin-right: 8px;
        .usernameIcon.iconfont {
        }
      }

      .usernameText {
        color: #fff !important;
      }
      .downIcon.iconfont {
        margin-left: 10px;
      }
    }
    .openingVip {
      margin-left: 14px;
      color: #fff;
      margin-right: 16px;
    }
    .shirt.iconfont {
      margin-right: 32px;
    }

    .email {
      margin-right: 24px;
    }

    .setting.iconfont {
      margin-right: 22px;
    }
    .tool{
      .iconfont{
        color: #DB7A7A;
        font-size: 14px;
        margin: 0 4px;
      }
      .max{
        font-size: 12px;
      }
    }
  }
}
</style>
