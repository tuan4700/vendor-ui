import AddVendorForm from "./templates/AddVendorForm";
import MyVendor from "./templates/MyVendor";
import AddContactForm from "./templates/AddContactForm";
import MyContact from "./templates/MyContact";
import RateYourVendor from "./templates/RateYourVendor";

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
  {
    link: "/add-contact-form",
    component: <AddContactForm />,
  },
  {
    link: "/my-contact",
    component: <MyContact />,
  },
  {
    link: "/rate-your-vendor",
    component: <RateYourVendor />,
  },
];

export default routes;
