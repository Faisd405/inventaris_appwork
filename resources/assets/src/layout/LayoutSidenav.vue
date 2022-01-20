<template>
  <sidenav :orientation="orientation" :class="curClasses" v-if="isLoggedIn">
    <!-- Inner -->
    <div
      class="sidenav-inner"
      :class="{ 'py-1': orientation !== 'horizontal' }"
    >
      <sidenav-header> <strong>Dashboard</strong> </sidenav-header>
      <sidenav-router-link icon="ion ion-ios-home" to="/" :exact="true"
        >Home</sidenav-router-link
      >

      <sidenav-divider />
      <sidenav-header> <strong>DataMaster</strong> </sidenav-header>

      <sidenav-router-link icon="ion ion-md-person" to="/users" :exact="true"
        >Management User</sidenav-router-link
      >
      <sidenav-menu icon="ion ion-md-cube">
        <template slot="link-text">
          <strong>Kategori Barang</strong>
        </template>
        <sidenav-router-link icon="ion ion-md-desktop" to="/sifat" :exact="true"
          >Sifat Barang</sidenav-router-link
        >
        <sidenav-router-link
          icon="ion ion-md-desktop"
          to="/kategori"
          :exact="true"
          >Kategori Barang</sidenav-router-link
        >
      </sidenav-menu>
      <sidenav-router-link icon="ion ion-md-desktop" to="/jenis" :exact="true"
        >Kategori Buku</sidenav-router-link
      >
      <sidenav-divider />
      <sidenav-header> <strong>Modul Inventaris</strong> </sidenav-header>
      <sidenav-menu icon="ion ion-md-cube">
        <template slot="link-text">
          <strong>Inventaris Barang</strong>
        </template>
        <sidenav-router-link
          icon="ion ion-md-list-box"
          to="/barang"
          :exact="true"
          >Daftar Barang</sidenav-router-link
        >
        <sidenav-router-link
          icon="ion ion-md-person"
          to="/pengguna"
          :exact="true"
          >PIC Barang</sidenav-router-link
        >
      </sidenav-menu>
      <sidenav-menu icon="ion ion-md-cube">
        <template slot="link-text">
          <strong>Inventaris Buku</strong>
        </template>
        <sidenav-router-link icon="ion ion-md-book" to="/buku" :exact="true"
          >Daftar Buku</sidenav-router-link
        >
        <sidenav-router-link
          icon="ion ion-md-person"
          to="/pengguna"
          :exact="true"
          >PIC Buku</sidenav-router-link
        >
      </sidenav-menu>

      <sidenav-router-link icon="ion ion-md-compass" to="/lokasi" :exact="true"
        >Lokasi Barang</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-desktop" to="/history" :exact="true"
        >Riwayat Penggunaan Barang</sidenav-router-link
      >
      <sidenav-divider />
      <sidenav-header> <strong>Laporan</strong> </sidenav-header>
      <sidenav-router-link icon="ion ion-md-dekstop" to="/laporan/barang" :exact="true"
        >Laporan Total Barang</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-dekstop" to="/laporan/pengguna" :exact="true"
        >Laporan Total Pengguna</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-dekstop" to="/laporan/buku" :exact="true"
        >Laporan Total Buku</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-dekstop" to="/laporan/LaporanTBarangTerpakai" :exact="true"
        >Laporan Total Barang yang terpakai</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-dekstop" to="/laporan/LaporanTBarangTidakTerpakai" :exact="true"
        >Laporan Total Barang yang tidak terpakai</sidenav-router-link
      >
      <sidenav-router-link icon="ion ion-md-dekstop" to="/laporan/LaporanTHargaBarang" :exact="true"
        >Laporan Harga Barang</sidenav-router-link
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
    SidenavDivider
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
  },
};
</script>
