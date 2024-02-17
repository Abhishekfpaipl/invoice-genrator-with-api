<template>
    <div class="container mt-5">
        <div v-for="(po, index) in pos " :key="index" class="d-flex align-items-center border p-2">
            <!-- <img :src="`${publicPath}${po.supplier.image}`" class="rounded-circle" style="width:60px; height: 60px;"> -->
            <img :src="`${publicPath}${img}`" class="rounded-circle" style="width:60px; height: 60px;">
            <div class="ms-2 flex-fill">
                <p v-if="po.supplier" class="mb-0">{{ po.supplier.name }}</p>
                <p class="mb-0">{{ po.amount }}</p>
            </div>
            {{ po.stock }}
            <!-- <RouterLink :to="'/update_po/' + po.sid"
                class="d-flex align-items-center justify-content-center text-decoration-none">
                <button class="btn btn-dark me-2" v-if="po.locked === 0">Edit</button>
                <div v-if="po.status">
                    <button class="btn btn-dark me-2" v-if="(po.status.pending === 1) && (po.locked === 1)">Complete</button>
                </div>
            </RouterLink> -->


            <div v-if="po.status">
                <router-link :to="'/update_po/' + po.sid" class="btn btn-primary me-2"
                    v-if="po.status.stage == 'pending' && !po.locked">Edit</router-link>
                <button @click="lockPo(po.sid)" class="btn btn-danger me-2"
                    v-if="po.status.stage == 'pending' && !po.locked">Lock</button>
                <button @click="markCompleted(po.sid)" class="btn btn-success me-2"
                    v-if="po.status.stage == 'pending' && po.locked">Mark Completed</button>
                <div class="btn btn-dark me-2" v-if="po.status.stage == 'completed' && po.locked">Completed</div>
            </div>



            <RouterLink :to="'/purchaseOrder/' + po.sid"
                class="d-flex align-items-center justify-content-center text-decoration-none">
                <button class="btn btn-dark">Print</button>
            </RouterLink>
        </div>
        <router-link to="/createNew_po" class="">
            <button class="btn btn-dark mt-3">Add New PO</button>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    // props: ['po'],
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: 'img/supplier/ramesh.jpg',
        }
    },
    mounted() {
        this.$store.dispatch('fetchPurchaseOrders')
    },
    computed: {
        pos() {
            return this.$store.getters.purchaseOrders;
        },
    },
    methods: {
        async lockPo(sid) {
            // Find the PO by sid
            const po = this.pos.find(po => po.sid === sid);

            if (po) {
                // Update the status.stage property
                po.status = 'locked';

                // Send the updated PO to the server
                try {
                    const response = axios.put('http://192.168.1.133:8003/api/purchaseorders/' + sid, po);
                    this.$set(this.pos, this.pos.indexOf(po), response.data.data);
                    console.log("data", response.data.data);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        },
        async markCompleted(sid) {
            // Find the PO by sid
            const po = this.pos.find(po => po.sid === sid);

            if (po) {
                // Update the status.stage property
                po.status = 'completed';

                // Send the updated PO to the server
                try {
                    const response = axios.put('http://192.168.1.133:8003/api/purchaseorders/' + sid, po);
                    this.$set(this.pos, this.pos.indexOf(po), response.data.data);
                    console.log("data", response.data.data);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        },
    }
}
</script>
