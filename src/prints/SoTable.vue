<template>
  <div class="container">
    <div class="d-flex justify-content-between mb-3">
      <div class="px-2">
        <h1 class="fw-bold">Monaal Creation</h1>
        <p class="mb-0">B-74, Okhla Phase II, Soutd East Delhi - 110020</p>
        <p class="mb-0"> GSTIN : 07GRGPS5476F1Z8, MOBILE : +91 9999 437 620 </p>
      </div>
      <div class="">
        <p class="fs-1 mb-2 fw-light" style="font-weight: 100;">Sales Order (SO)</p>
        <div class="d-flex justify-content-between">
          <div class="">
            <p class="mb-0">SO Date:</p>
          </div>
          <div class="">
            <p class="mb-0">17-08-23</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="flex-fill">
        <table class="table table-sm table-bordered" style="font-size: 0.9rem;">
          <tbody>
            <tr v-for="(po, index) in sos.slice(0, 9)" :key="index">
              <td class="table-secondary ps-2">{{ po.name }}:</td>
              <td class="fw-bold ps-2">{{ po.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex-fill">
        <table class="table table-sm table-bordered" style="font-size: 0.9rem;">
          <tbody>
            <tr v-for="(po, index) in sos.slice(9)" :key="index">
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
          <td class="text-center" style="width: 140px;">Color Names<br>(Fabric color name)</td>
          <td class="text-center" style="width: 50px;">Width(Panna)<br>(In Inches)</td>
          <td class="text-center" style="width: 120px;">Length (Farma)<br>(In cm)</td>
          <td class="text-center" style="width: 120px;">Order Quantity<br>(No. of catalogs)</td>
          <td class="text-center" style="width: 120px;">Consumption<br>(Per Piece)</td>
          <td class="text-center">Total Fabric<br>(Quantity)</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(col, index) in colors" :key="index">
          <td class="text-center">{{ col.variant }}</td>
          <td class="text-center">{{ col.width }}</td>
          <td class="text-center">{{ col.length }}</td>
          <td class="text-center">{{ col.order }}</td>
          <td class="text-center">{{ col.consumption }}</td>
          <td class="text-center">{{ col.desc }}</td>
        </tr>
      </tbody>
    </table>


  </div>
</template>
  
<script>

export default {
  computed: {
    sos() {
      return this.$store.getters.getSo
    },
    colors() {
      return this.$store.getters.getSoColors
    }
  }
};
</script>
  