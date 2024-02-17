import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('@/prints/HomePage.vue'),
  },
  {
    path: "/purchaseShow",
    name: "Purchase Order",
    component: () => import('@/components/PurchaseOrderCard.vue'),
  },
  {
    path: "/createNew_po",
    name: "Create New PO",
    component: () => import('@/pages/PurchaseOrder/CreateNewPO.vue'),
  },
  {
    path: "/update_po/:purchaseOrderId",
    name: "Update PO",
    component: () => import('@/pages/PurchaseOrder/UpdatePO.vue'),
  },
  {
    path: "/purchaseOrder/:purchaseOrderId",
    name: "purchaseOrder",
    component: () => import('@/prints/PurchaseOrder.vue'),
  },
  {
    path: "/purchase_invoice",
    name: "Purchase Invoice",
    component: () => import('@/pages/PurchaseInvoice.vue'),
  },
  {
    path: "/sales_table/:purchaseInvoiceId",
    name: "Sales Table",
    component: () => import('@/prints/SalesTable.vue'),
  },
  {
    path: "/grn_show",
    name: "Grn Page",
    component: () => import('@/pages/GrnPage.vue'),
  },
  {
    path: "/grn_table/:grnId",
    name: "GRN Table",
    component: () => import('@/prints/GrnTable.vue'),
  },
  {
    path: "/so_table",
    name: "SO Table",
    component: () => import('@/prints/SoTable.vue'),
  },
  {
    path: "/gdn_table",
    name: "GDN Table",
    component: () => import('@/prints/GdnTable.vue'),
  },
  {
    path: "/good_outward",
    name: "Good Outward",
    component: () => import('@/prints/GoodOutward.vue'),
  },
  {
    path: "/businessForm",
    name: "Business Form",
    component: () => import('@/components/BusinessForm.vue'),
  },
  {
    path: "/personalForm",
    name: "Personal Form",
    component: () => import('@/components/PersonalForm.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
