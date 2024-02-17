<template>
    <div class="container mt-5">
        <div v-for="(grn, index) in grns " :key="index" class="d-flex align-items-center border p-2">
            <img :src="`${publicPath}${img}`" class="rounded-circle" style="width:60px; height: 60px;">
            <div class="ms-2 flex-fill">
                <p class="mb-0">{{ grn.location.name }}</p>
                <p class="mb-0">{{ grn.created_date }}</p>
            </div> 
            <RouterLink :to="'/grn_table/' + grn.sid"
                class="d-flex align-items-center justify-content-center text-decoration-none">
                <button class="btn btn-dark">Print</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: 'img/supplier/ramesh.jpg',
        }
    },
    mounted() {
        this.$store.dispatch('fetchGrn')
    },
    computed: {
        grns() {
            return this.$store.getters.grn;
        },
    },
}
</script>
