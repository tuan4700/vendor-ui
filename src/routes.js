import AddVendorForm from "./templates/AddVendorForm";
import MyVendor from "./templates/MyVendor";
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
  {
    link: "/my-vendor",
    component: <MyVendor />,
  },
];

export default routes;
