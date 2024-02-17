<template>
    <div class="page position-relative">
        <div class="d-flex flex-column h-100">
            <div class="d-flex justify-content-between mb-3">
                <div v-if="dataSet.location" class="px-2">
                    <h1 class="fw-bold">{{ dataSet.location.name }}</h1>
                    <p class="mb-0">{{ dataSet.location.address }}</p>
                    <p class="mb-0"> GSTIN : {{ dataSet.location.gstin }}, <br> MOBILE : {{ dataSet.location.mobile }} </p>
                </div>
                <div class="">
                    <p class="fs-4 fw-light mb-2" style="font-weight: 100;">Goods Received Note (GRN)</p>
                    <div class=" ">
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">GRN No:</p>
                            <p class="mb-0">{{ dataSet.sid }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p class="mb-0">GRN Date:</p>
                            <p class="mb-0">{{ dataSet.created_date }}</p>
                        </div>
                        <div v-if="dataSet.location" class="d-flex justify-content-between">
                            <p class="mb-0">Location:</p>
                            <div class="d-flex">
                                <span class="mb-0" v-for="(loc, index) in dataSet.bundles" :key="index">{{loc.location }},</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-sm table-bordered" style="font-size: 0.9rem;">
                <tbody>
                    <tr>
                        <td class="table-secondary ps-2">Supplier ID:</td>
                        <td>
                            <span v-for="(sup, index) in dataSet.suppliers" :key="index">
                                {{ sup.sid }},
                            </span>
                        </td>

                        <td class="table-secondary ps-2">Material Category:</td>
                        <td v-if="dataSet.fabric">{{ dataSet.fabric.category.sid }}</td>
                    </tr>
                    <tr>
                        <td class="table-secondary ps-2">Invoice No:</td>
                        <td>
                            <span class="" v-for="(po, index) in dataSet.purchases" :key="index">
                                {{ po.invoice_no }},
                            </span>
                        </td>

                        <td class="table-secondary ps-2">Material Name:</td>
                        <td v-if="dataSet.fabric">{{ dataSet.fabric.name }}</td>
                    </tr>
                    <tr>
                        <td class="table-secondary ps-2">PO No:</td>
                        <td>
                            <span v-for="(po, index) in dataSet.purchase_orders" :key="index">
                                {{ po.sid }},
                            </span>
                        </td>

                        <td class="table-secondary ps-2">Material ID:</td>
                        <td v-if="dataSet.fabric">{{ dataSet.fabric.sid }}</td>
                    </tr>
                    <tr>
                        <td class="table-secondary ps-2">PO Date:</td>
                        <td>
                            <span v-for="(po, index) in dataSet.purchase_orders" :key="index">
                                {{ po.date }},
                            </span>
                        </td>
                        
                        <td class="table-secondary ps-2">Material Color:</td>
                        <td v-if="dataSet.fabric">{{ dataSet.color.name }}</td>
                    </tr>
                    <tr>
                        <td class="table-secondary ps-2">PO Quantity:</td>
                        <td>
                            <span v-for="(po, index) in dataSet.purchase_orders" :key="index">
                                {{ po.quantity }},
                            </span>
                        </td>
                        
                        <td class="table-secondary ps-2">Material Unit:</td>
                        <td v-if="dataSet.fabric">{{ dataSet.fabric.unit }}</td>
                    </tr>
                    <tr>
                        <td class="table-secondary ps-2">GRN Quantity:</td>
                        <td colspan="3">{{ dataSet.quantity }}</td>
                    </tr>
                </tbody>
            </table>

            <table class="flex-fill table table-sm table-bordered" style="font-size: 0.9rem;">
                <thead class="table-secondary">
                    <tr>
                        <td class="text-center">Width<br>(Width in inches)</td>
                        <td class="text-center">Received Bundle<br>Quantity</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bun, index) in dataSet.bundles" :key="index">
                        <td class="text-center">{{ bun.width }}</td>
                        <td class="text-center">{{ bun.received_bundle_quantity }}</td>
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
import axios from 'axios';


export default {
    data() {
        return {
            dataSet: {}
        }
    },
    mounted() {
        let grnId = this.$route.params.grnId;
        axios.get('http://192.168.1.133:8003/api/grns/' + grnId).then(response => {
            this.dataSet = response.data.data
        }).catch(error => {
            console.error('Error fetching data:', error)
        })
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