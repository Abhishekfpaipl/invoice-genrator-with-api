<template>
  <div class="page position-relative">
    <div class="container">
      <div class="d-flex justify-content-between mb-3">
        <div class="px-2">
          <h1 class="fw-bold">Monaal Creation</h1>
          <p class="mb-0">B-74, Okhla Phase II, Soutd East Delhi - 110020</p>
          <p class="mb-0"> GSTIN : 07GRGPS5476F1Z8, MOBILE : +91 9999 437 620 </p>
        </div>
        <div class="">
          <p class="fs-1 mb-2 fw-light" style="font-weight: 100;">Purchase Order (PO)</p>
          <div class="d-flex justify-content-between">
            <div class="">
              <p class="mb-0">PO Date:</p>
            </div>
            <div class="">
              <p class="mb-0">{{ dataSet.created }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="flex-fill">
          <table class="table table-sm table-bordered" style="font-size: 0.9rem;">
            <tbody>
              <tr>
                <td class="table-secondary ps-2">PO Number:</td>
                <td class="fw-bold ps-2">{{ dataSet.sid }}</td>

                <td class="table-secondary ps-2">Material ID:</td>
                <td v-if="dataSet.fabric" class="fw-bold ps-2">{{ dataSet.fabric.material.sid }}</td>
              </tr>
              <tr v-if="dataSet.supplier">
                <td class="table-secondary ps-2">Supplier Name:</td>
                <td class="fw-bold ps-2">{{ dataSet.supplier.name }}</td>

                <td class="table-secondary ps-2">PO Expiry Date:</td>
                <td class="fw-bold ps-2">{{ dataSet.due_date }}</td>
              </tr>

              <tr v-if="dataSet.supplier">
                <td class="table-secondary ps-2">Supplier ID:</td>
                <td class="fw-bold ps-2">{{ dataSet.supplier.sid }}</td>

                <td class="table-secondary ps-2">PO Expiry Days:</td>
                <td class="fw-bold ps-2">{{ dataSet.expiry_period }}</td>
              </tr>

              <tr v-if="dataSet.supplier">
                <td class="table-secondary ps-2">Supplier Location:</td>
                <td class="fw-bold ps-2" style="width:30%;">{{ dataSet.supplier.address }}</td>

                <td class="table-secondary ps-2">Tolerance:</td>
                <td class="fw-bold ps-2">{{ dataSet.terms.quality }}</td>
              </tr>

              <tr v-if="dataSet.supplier">
                <td class="table-secondary ps-2">Quantity:</td>
                <td class="fw-bold ps-2">{{ dataSet.quantity }}</td>

                <td class="table-secondary ps-2">General:</td>
                <td class="fw-bold ps-2">{{ dataSet.terms.general }}</td>
              </tr>

              <tr v-if="dataSet.supplier">
                <td class="table-secondary ps-2">Sub Amount:</td>
                <td class="fw-bold ps-2">{{ dataSet.sub_amount }}</td>

                <td class="table-secondary ps-2">Tax:</td>
                <td class="fw-bold ps-2">{{ dataSet.amount - dataSet.sub_amount }}</td>
              </tr>
              <tr v-if="dataSet.supplier">
                <td class="table-secondary ps-2">Supplier GST:</td>
                <td class="fw-bold ps-2">{{ dataSet.supplier.gstin }}</td>

                <td class="table-secondary ps-2">Payment Terms:</td>
                <td class="fw-bold ps-2">{{ dataSet.terms.payment }}</td>
              </tr>
              <tr v-if="dataSet.fabric">
                <td class="table-secondary ps-2">Fabric Unit:</td>
                <td class="fw-bold ps-2">{{ dataSet.fabric.unit }}</td>

                <td class="table-secondary ps-2">Delivery Terms:</td>
                <td class="fw-bold ps-2">{{ dataSet.terms.delivery }}</td>
              </tr>
              <tr v-if="dataSet.fabric">
                <td class="table-secondary ps-2">Fabric Rate:</td>
                <td class="fw-bold ps-2">{{ dataSet.fabric.rate }}</td>

                <td class="table-secondary ps-2">Category:</td>
                <td class="fw-bold ps-2">{{ dataSet.fabric.category.name }}, {{ dataSet.fabric.category.sid }}</td>
              </tr>
              <tr v-if="dataSet.fabric">
                <td class="table-secondary ps-2">HSN/SCN Code :</td>
                <td class="fw-bold ps-2">{{ dataSet.fabric.hsncode }}</td>

                <td class="table-secondary ps-2">Material Name:</td>
                <td class="fw-bold ps-2">{{ dataSet.fabric.material.name }}, {{ dataSet.fabric.material.sid }}</td>
              </tr>
              <tr v-if="dataSet.fabric">
                <td class="table-secondary ps-2">GST Rate :</td>
                <td class="fw-bold ps-2">{{ dataSet.fabric.gstrate }}%</td>

                <td class="table-secondary ps-2">Material Style:</td>
                <td class="fw-bold ps-2">{{ dataSet.fabric.style.name }}, {{ dataSet.fabric.style.sid }}</td>
              </tr>
            </tbody>
          </table>

          <table class="table">
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <table class="flex-fill table table-sm table-bordered" style="font-size: 0.9rem;">
        <thead class="table-secondary">
          <tr>
            <td class="text-center" style="width: 140px;">Color Names<br>(Fabric color name)</td>
            <td class="text-center" style="width: 120px;">Order Quantity<br>(Total Length)</td>
            <td class="text-center">Description<br>(For Refrence Only)</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(col, index) in dataSet.items" :key="index">
            <td>{{ col.color }}</td>
            <td>{{ col.quantity }}</td>
            <td>{{ col.description }}</td>
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
import axios from 'axios'
export default {
  data() {
    return {
      dataSet: 0
    }
  },

  mounted() {
    let poId = this.$route.params.purchaseOrderId
    // console.log(poId)
    axios.get('http://192.168.1.133:8003/api/purchaseorders/' + poId).then(response => {
      this.dataSet = response.data.data
      // console.log(this.dataSet)
    })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
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