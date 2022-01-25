<template>
  <b-navbar
    toggleable="lg"
    :variant="getLayoutNavbarBg()"
    class="layout-navbar align-items-lg-center container-p-x"
  >
    <!-- Brand -->
    <b-navbar-brand to="/">Inventaris Barang</b-navbar-brand>

    <!-- Sidenav toggle -->
    <b-navbar-nav
      class="align-items-lg-center mr-auto mr-lg-4"
      v-if="sidenavToggle"
    >
      <a
        class="nav-item nav-link px-0 ml-2 ml-lg-0"
        href="javascript:void(0)"
        @click="toggleSidenav"
      >
        <i class="ion ion-md-menu text-large align-middle" />
      </a>
    </b-navbar-nav>

    <!-- Navbar toggle -->
    <b-navbar-toggle target="app-layout-navbar"></b-navbar-toggle>
    <template v-if="isLoggedIn">
      <b-collapse is-nav id="app-layout-navbar">
        <b-navbar-nav class="align-items-lg-center collapse navbar-collapse">
          <div class="navbar-nav ml-auto">
            <b-nav-item :to="{}"
              >{{ user.name }}, Seorang {{ user.roles[0].name }}</b-nav-item
            >
            <b-nav-item @click="logout">Logout</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse></template
    >
    <template v-if="!isLoggedIn">
      <b-collapse is-nav id="app-layout-navbar">
        <b-navbar-nav class="align-items-lg-center">
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse></template
    >
  </b-navbar>
</template>

<script>
import Axios from 'axios';
export default {
  name: "app-layout-navbar",
  data() {
    return {
      user: "",
      isLoggedIn: false,
    };
  },
  props: {
    sidenavToggle: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    toggleSidenav() {
      this.layoutHelpers.toggleCollapsed();
    },

    getLayoutNavbarBg() {
      return this.layoutNavbarBg;
    },

    setUser() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.isLoggedIn = localStorage.getItem("token") != null;
    },

    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.setUser();

      this.$router.push("/login");
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
};
</script>
