<template>
  <div></div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
    data() {

    },
    methods: {

    },
    created() {
        axios.get('/api/permintaan').then((response) => {
            this.permintaan = response.data.permintaan;
        });
    },
    mounted() {

    }
}
</script>

<style>

</style>