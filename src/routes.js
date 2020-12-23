import AddVendorForm from "./templates/AddVendorForm";
import RecommendVendor from "./templates/RecommendVendor";

const routes = [
  {
    link: "/add-vendor-form",
    component: <AddVendorForm />,
  },
  {
    link: "/vendor-recommend",
    component: <RecommendVendor />,
  },
];

export default routes;
