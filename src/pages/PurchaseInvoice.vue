<template>
    <div class="container mt-5">
        <div v-for="(po, index) in pos " :key="index" class="d-flex align-items-center border p-2">
            <!-- <img :src="`${publicPath}${po.supplier.image}`" class="rounded-circle" style="width:60px; height: 60px;"> -->
            <img :src="`${publicPath}${img}`" class="rounded-circle" style="width:60px; height: 60px;">
            <div class="ms-2 flex-fill">
                <p class="mb-0">{{ po.supplier.name }}</p>
                <p class="mb-0">{{ po.invoice_no }}</p>
                <p class="mb-0">{{ po.total }}</p>
            </div>
            {{ po.stock }}
            <RouterLink :to="'/sales_table/' + po.sid"
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
        this.$store.dispatch('fetchPurchaseInvoice')
    },
    computed: {
        pos() {
            return this.$store.getters.purchaseInvoice;
        },
    },
}
</script>
