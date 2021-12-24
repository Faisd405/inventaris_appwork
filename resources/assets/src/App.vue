<template>
  <div id="app">
      <router-view @IsloggedIn="setUser"></router-view>
  </div>
</template>

<style src="@/vendor/styles/bootstrap.scss" lang="scss"></style>
<style src="@/vendor/styles/appwork.scss" lang="scss"></style>
<style src="@/vendor/styles/theme-corporate.scss" lang="scss"></style>
<style src="@/vendor/styles/colors.scss" lang="scss"></style>
<style src="@/vendor/styles/uikit.scss" lang="scss"></style>
<style src="./style.scss" lang="scss"></style>

<script>
export default {
  name: "app",
  metaInfo: {
    title: "Index",
    titleTemplate: "%s - Inventaris Barang",
  },
  updated() {
    // Remove loading state
    setTimeout(() => document.body.classList.remove("app-loading"), 1);
  },
  data() {
      return {
        user: null,
        isLoggedIn: false
      }
    },
    mounted() {
      this.setUser()
    },
    methods: {
      setUser() {
          this.user = JSON.parse(localStorage.getItem('user'))
          this.isLoggedIn = localStorage.getItem('token') != null

        },
        logout() {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          this.setUser()

          this.$router.push('/')
        }
    }
};
</script>
