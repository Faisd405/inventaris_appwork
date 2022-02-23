<template>
  <sidenav
    :orientation="orientation"
    :class="curClasses"
    v-if="isLoggedIn"
    class="bg-info"
  >
    <!-- Inner -->
    <div
      class="sidenav-inner pallet-darken"
      :class="{ 'py-1': orientation !== 'horizontal' }"
    >
      <sidenav-header> <strong>Dashboard</strong> </sidenav-header>
      <sidenav-router-link
        icon="ion ion-ios-home"
        to="/"
        :exact="true"
        v-if="user.roles[0].name == 'admin'"
        >Home</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-ios-home"
        to="/homepengguna"
        :exact="true"
        v-if="user.roles[0].name == 'user'"
        >Home</sidenav-router-link
      >

      <sidenav-divider />
      <span v-if="user.roles[0].name == 'admin'">
        <sidenav-header> <strong>DataMaster</strong> </sidenav-header>

        <sidenav-router-link icon="ion ion-md-person" to="/users" :exact="true"
          >Management User</sidenav-router-link
        >
        <sidenav-menu icon="ion ion-md-cube">
          <template slot="link-text">
            <strong>Kategori Barang</strong>
          </template>
          <sidenav-router-link
            icon="ion ion-md-desktop"
            to="/sifat"
            :exact="true"
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
          >Jenis Buku</sidenav-router-link
        >
        <sidenav-router-link
          icon="ion ion-md-compass"
          to="/lokasi"
          :exact="true"
          >Lokasi Barang dan Buku</sidenav-router-link
        >
        <sidenav-divider />
      </span>
      <sidenav-header> <strong>Modul Inventaris</strong> </sidenav-header>
      <sidenav-router-link
        icon="ion ion-md-desktop"
        :to="{ name: 'detail-pengguna', params: { id: user.id } }"
        :exact="true"
        v-if="user.roles[0].name == 'user'"
        >Inventaris Pengguna</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-md-desktop"
        :to="{ name: 'index-pengajuan', params: { id: user.id } }"
        :exact="true"
        v-if="user.roles[0].name == 'user'"
        >Pengajuan Barang Pengguna</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-md-desktop"
        to="/pengajuan/admin/"
        :exact="true"
        v-if="user.roles[0].name == 'admin'"
        >Pengajuan Barang Admin</sidenav-router-link
      >
      <span v-if="user.roles[0].name == 'admin'">
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

        <sidenav-router-link
          icon="ion ion-md-desktop"
          to="/history"
          :exact="true"
          >Riwayat Penggunaan Barang</sidenav-router-link
        >
      </span>
      <sidenav-divider />
      <sidenav-header> <strong>Laporan</strong> </sidenav-header>
      <sidenav-router-link
        icon="ion ion-md-folder"
        to="/laporan/barang"
        :exact="true"
        >Laporan Barang</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-md-folder"
        to="/laporan/pengguna"
        :exact="true"
        >Laporan Pengguna</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-md-folder"
        to="/laporan/buku"
        :exact="true"
        >Laporan Buku</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-md-folder"
        to="/laporan/LaporanTBarangTerpakai"
        :exact="true"
        >Laporan Barang yang terpakai</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-md-folder"
        to="/laporan/LaporanTBarangTidakTerpakai"
        :exact="true"
        >Laporan Barang yang tidak terpakai</sidenav-router-link
      >
      <sidenav-router-link
        icon="ion ion-md-folder"
        to="/laporan/LaporanTHargaBarang"
        :exact="true"
        >Laporan Harga Barang</sidenav-router-link
      >
      <span v-if="user.roles[0].name == 'admin'">
      <sidenav-divider />
      <sidenav-header> <strong>Setting</strong> </sidenav-header>
      <sidenav-router-link icon="ion ion-md-settings" to="/image" :exact="true"
        >Ganti Background Login, Gambar Default dan Lampiran
        PDF</sidenav-router-link

      ></span>
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
      user: "",
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
      user: "",
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
