<template>
    <div class="page position-relative">
        <div class="d-flex flex-column h-100">
            <div class="d-flex justify-content-between mb-3">
                <div class="px-2">
                    <h1 class="fw-bold">Monaal Creation</h1>
                    <p class="mb-0">B-74, Okhla Phase II, Soutd East Delhi - 110020</p>
                    <p class="mb-0"> GSTIN : 07GRGPS5476F1Z8, MOBILE : +91 9999 437 620 </p>
                </div>
                <div class="">
                    <p class="fs-4 fw-light mb-2" style="font-weight: 100;">Goods Dispatched Note (GDN)</p>
                    <div class=" ">
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">GDN No:</p>
                            <p class="mb-0">13546</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">GDN Date:</p>
                            <p class="mb-0">07-09-2023</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">Location:</p>
                            <p class="mb-0">Okhla Phase 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="flex-fill">
                    <table class="table table-sm table-bordered" style="font-size: 0.9rem;">
                        <tbody>
                            <tr v-for="(po, index) in gdns.slice(0, 6)" :key="index">
                                <td class="table-secondary ps-2">{{ po.name }}:</td>
                                <td class="fw-bold ps-2">{{ po.value }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex-fill">
                    <table class="table table-sm table-bordered" style="font-size: 0.9rem;">
                        <tbody>
                            <tr v-for="(po, index) in gdns.slice(6)" :key="index">
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
                        <td class="text-center">Color</td>
                        <td class="text-center">Width<br>(inch)</td>
                        <td class="text-center">Length<br>(cm)</td>
                        <td class="text-center">Total Requested<br>Quantity</td>
                        <td class="text-center">Total Issued<br>Quantity</td>
                        <td class="text-center">Bundle Details<br>(Each Bundle Qty & Balance Bundle Details)</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(col, index) in colors" :key="index">
                        <td class="text-center">{{ col.variant }}</td>
                        <td class="text-center">{{ col.width }}</td>
                        <td class="text-center">{{ col.length }}</td>
                        <td class="text-center">{{ col.total_qty }}</td>
                        <td class="text-center">{{ col.issued_qty }}</td>
                        <td class="text-center">{{ col.bundle_details }}</td>
                    </tr>
                </tbody>
            </table>


        </div>
        <div class="position-absolute start-0 end-0" style="bottom: 50px">
            <div class="d-flex justify-content-around">
                <p class="mb-0 fw-bold fs-5 text-center">Kedar Sen<br><small>(Prepared By)</small></p>
                <p class="mb-0 fw-bold fs-5 text-center">Kedar Sen<br><small>(Inspection By)</small></p>
                <p class="mb-0 fw-bold fs-5 text-center">Shubash Kumar<br><small>(Approved By)</small></p>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    computed: {
        gdns() {
            return this.$store.getters.getGdn
        },
        colors() {
            return this.$store.getters.getGdnColors
        }
    }
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