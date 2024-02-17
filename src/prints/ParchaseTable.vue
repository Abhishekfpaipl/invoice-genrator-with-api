<template>
    <div class="page position-relative">
        <div class="d-flex flex-column h-100">
            <div class="d-flex justify-content-between mb-3">
                <div class="px-2">
                    <h1 class="mb-2 fw-bold">Monaal Creation</h1>
                    <p class="mb-0">B-74,Basment and Ground Floor <br>
                        Okhla Industrial Area Phase-II <br>
                        South East,Delhi-110020</p>
                    <p class="mb-0">GSTIN/UIN: 07GRGPS5476F1Z8<br>
                        <!-- GSTIN/UIN: 07GRGPS5476F1Z8<br> -->
                        State Name : Delhi, Code : 07</p>
                </div>
                <div class="">
                    <p class="fs-4 fw-light mb-2" style="font-weight: 100;">Consignee (Ship to)</p>
                    <p class="fs-4 fw-light mb-2" style="font-weight: 500;">AM Fabrics</p>
                    <div class=" ">
                        <div class="">
                            <p class="mb-0">X-131/9A, Street No.12, Brahampuri, <br>Delhi-110053X-131/9A, Street No.12,
                                <br>Brahampuri, Delhi-110053
                            </p>
                            <!-- <p class="mb-0">X/4057, Badan Singh Market, <br>Gali No.16, Shanti<br>
                                Mohalla Gandhi Nagar</p> -->
                            <p class="mb-0">GSTIN/UIN : 07AWHPJ4466G1ZE</p>
                            <p class="mb-0">State Name : Delhi, Code : 07</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="flex-fill">
                    <table class="table table-sm table-bordered" style="font-size: 0.9rem;">
                        <tbody>
                            <tr v-for="(po, index) in goutward.slice(0, 7)" :key="index">
                                <td class="table-secondary ps-2">{{ po.name }}:</td>
                                <td class="fw-bold ps-2">{{ po.value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex-fill">
                    <table class="table table-sm table-bordered" style="font-size: 0.9rem;">
                        <tbody>
                            <tr v-for="(po, index) in goutward.slice(7)" :key="index">
                                <td class="table-secondary ps-2">{{ po.name }}:</td>
                                <td class="fw-bold ps-2">{{ po.value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
            <table class="flex-fill table table-sm table-bordered" style="font-size: 0.9rem;">
                <thead class="table-secondary">
                    <tr>
                        <td class="text-center">SI No</td>
                        <td class="text-center">Name</td>
                        <td class="text-center">Order No</td>
                        <td class="text-center">GDN</td>
                        <td class="text-center">HSN/SAC</td>
                        <td class="text-center">Quantity</td>
                        <td class="text-center">Rate</td>
                        <td class="text-center">Unit</td>
                        <td class="text-center">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(col, index) in details" :key="index">
                        <td class="text-center">{{ col.id }}</td>
                        <td class="text-start">{{ col.name }}</td>
                        <td class="text-center">{{ col.order_no }}</td>
                        <td class="text-center">{{ col.gdn }}</td>
                        <td class="text-center">{{ col.hsn_sac }}</td>
                        <td class="text-center">{{ col.qty }}</td>
                        <td class="text-center">{{ col.rate }}</td>
                        <td class="text-center">{{ col.unit }}</td>
                        <td class="text-end">{{ col.amount }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>

export default {
    computed: {
        goutward() {
            return this.$store.getters.getSales
        },
        details() {
            return this.$store.getters.getSalesOrder
        }
    },

};
</script>
<style>
body {
    margin: 0;
    padding: 0;
    background-color: #FAFAFA;
    font: 12pt "Tahoma";
}

* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}

.page {
    width: 21cm;
    min-height: 29.7cm;
    /* padding: 2cm;
    margin: 1cm auto;
    border: 1px #D3D3D3 solid;
    border-radius: 5px; */
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>