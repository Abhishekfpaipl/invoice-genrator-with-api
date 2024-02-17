<template>
    <div v-if="dataReady">
        <div v-if="purchaseOrders">
            <!-- <PurchaseOrderCard :po="po" v-for="(po, index) in purchaseOrders" :key="index"></PurchaseOrderCard> -->
        </div>
        <div v-else class="">
            No Purchase Order found !
        </div>

        <router-link to="">Create New PO</router-link>
    </div>
    <div v-else class="">
        <!-- Show Progress bar here -->
    </div>
</template>

<script>
// import PurchaseOrderCard from '@/components/PurchaseOrderCard.vue';

export default {
    // components: { PurchaseOrderCard },
    data() {
        return {
            dataReady: false,
        };
    },
    mounted() {
        this.$store.dispatch('fetchPurchaseOrders').then(() => {
            this.dataReady = true;
        })


    },
    computed: {
        purchaseOrders() {
            return this.$store.getters.purchaseOrders;
        },
    },
}
</script>

<style lang="scss" scoped></style>