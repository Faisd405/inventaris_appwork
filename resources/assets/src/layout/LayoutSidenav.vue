<template>
  <sidenav :orientation="orientation" :class="curClasses" v-if="isLoggedIn">
    <!-- Inner -->
    <div
      class="sidenav-inner"
      :class="{ 'py-1': orientation !== 'horizontal' }"
    >
      <sidenav-router-link icon="ion ion-ios-home" to="/" :exact="true"
        >Home</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-desktop" to="/barang" :exact="true"
        >Barang</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-desktop" to="/jenis" :exact="true"
        >Jenis Barang</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-desktop" to="/lokasi" :exact="true"
        >Lokasi Barang</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-md-desktop"
        to="/kategori"
        :exact="true"
        >Kategori Barang</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-desktop" to="/sifat" :exact="true"
        >Sifat Kategori</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-person" to="/users" :exact="true"
        >Users</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-book" to="/buku" :exact="true"
        >Buku</sidenav-router-link
      >
    </div>
  </sidenav>
</template>

<script>
import {
  Sidenav,
  SidenavLink,
  SidenavRouterLink,
  SidenavMenu,
  SidenavHeader,
  SidenavBlock,
  SidenavDivider,
} from "@/vendor/libs/sidenav";

export default {
  data() {
    return {
      user: null,
      isLoggedIn: false,
    };
  },
  name: "app-layout-sidenav",
  components: {
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider,
  },

  props: {
    orientation: {
      type: String,
      default: "vertical",
    },
  },
  data() {
    return {
      user: null,
      isLoggedIn: false,
      loginType: "",
    };
  },
  mounted() {
    this.setUser();
  },
  watch: {
    $route() {
      this.setUser();
    },
  },

  computed: {
    curClasses() {
      let bg = this.layoutSidenavBg;

      if (
        this.orientation === "horizontal" &&
        (bg.indexOf(" sidenav-dark") !== -1 ||
          bg.indexOf(" sidenav-light") !== -1)
      ) {
        bg = bg
          .replace(" sidenav-dark", "")
          .replace(" sidenav-light", "")
          .replace("-darker", "")
          .replace("-dark", "");
      }

      return (
        `bg-${bg} ` +
        (this.orientation !== "horizontal"
          ? "layout-sidenav"
          : "layout-sidenav-horizontal container-p-x flex-grow-0")
      );
    },
  },

  methods: {
    isMenuActive(url) {
      return this.$route.path.indexOf(url) === 0;
    },

    isMenuOpen(url) {
      return (
        this.$route.path.indexOf(url) === 0 && this.orientation !== "horizontal"
      );
    },

    toggleSidenav() {
      this.layoutHelpers.toggleCollapsed();
    },

    setUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.isLoggedIn = localStorage.getItem("token") != null;
    },
  }
};
</script>
