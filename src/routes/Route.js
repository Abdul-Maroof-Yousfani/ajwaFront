import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound';
import Home from '../views/Website/Home';
import DashboardHome from '../views/Dashboard/Home';
import StoreFinder from '../views/Website/StoreFinder';
import AboutUs from '../views/Website/AboutUs';
import ContactUs from '../views/Website/ContactUs';
import TermsConditions from '../views/Website/TermsConditions';
import PaymentMethods from '../views/Website/PaymentMethods';
import TopAmount from '../views/Website/TopAmount';
import Paymentdetail from '../views/Website/Paymentdetail';
import Wishlist from '../views/Website/Wishlist';
import Cart from '../views/Website/Cart';
import Login from '../views/Website/Login';
import Register from '../views/Website/Register';
import Checkout from '../views/Website/Checkout';
import DeliveryOption from '../views/Website/DeliveryOption';
import DashStore from '../views/Dashboard/Stores';
import CreateStore from '../views/Dashboard/CreateStore';
import StoreSettings from '../views/Dashboard/StoreSettings';
import AccountDetails from '../views/Website/AccountDetails';
import OrderDetails from '../views/Website/OrderDetails';
import Shop from '../views/Website/Shop';
import ProductDetail from '../views/Website/ProductDetail';
import Users from '../views/Dashboard/Users/Users.js';
import UserDetails from '../views/Dashboard/Users/UserDetails.js';
import Offer from '../views/Dashboard/Offer/Offer.js';
import AddOffer from '../views/Dashboard/Offer/AddOffer.js';
import OfferDetail from '../views/Dashboard/Offer/OfferDetail.js';
import Orders from '../views/Dashboard/Order/Orders.js';
import OrderDetail from '../views/Dashboard/Order/OrderDetail.js';

import Inquiries from '../views/Dashboard/Contact/Inquiries.js';
import InquiriesDetails from '../views/Dashboard/Contact/InquiriesDetails.js';
import Product from '../views/Dashboard/Product/Product.js';
import ProductDetails from '../views/Dashboard/Product/ProductDetails.js';

import Team from '../views/Dashboard/Team/Team.js';

import ReportAnalytics from '../views/Dashboard/Report/ReportAnalytics.js';
import Profile from '../views/Dashboard/Profile/Profile.js';
import Delivery from '../views/Dashboard/Delivery/Delivery.js';
import Discounts from '../views/Dashboard/Discount/Discounts.js';
import AddDsicount from '../views/Dashboard/Discount/AddDiscount.js';
import DiscountDetails from '../views/Dashboard/Discount/DiscountDetail.js';
import TeamDetail from '../views/Dashboard/Team/TeamDetail.js';
import AddProducts from '../views/Dashboard/Product/AddProducts.js';
import AddNewMember from '../components/Dashboard/Team/AddNewMember.js';
import AddNewTeamMember from '../views/Dashboard/Team/AddNewMember.js';
import MostSellingItem from '../views/Dashboard/Home/MostSellingItem.js';
import BonusCard from '../views/Website/BonusCard.js';

export const UserContext = createContext();

export default function AppRoute() {
  return (
    <div>
      <Router>
        <RouteSwitch>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/storefinder" element={<StoreFinder />}></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
          <Route exact path="/contactus" element={<ContactUs />}></Route>
          <Route
            exact
            path="/termsconditions"
            element={<TermsConditions />}
          ></Route>
          <Route
            exact
            path="/bonuscard"
            element={<BonusCard />}
          ></Route>
          <Route
            exact
            path="/paymentmethods"
            element={<PaymentMethods />}
          ></Route>
          <Route exact path="/topupamount" element={<TopAmount />}></Route>
          <Route
            exact
            path="/paymentdetails"
            element={<Paymentdetail />}
          ></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/shop/:id" element={<Shop />}></Route>
          <Route
            exact
            path="/productdetail/:id"
            element={<ProductDetail />}
          ></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Register />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route
            exact
            path="/deliveryoption"
            element={<DeliveryOption />}
          ></Route>
          <Route exact path="/myacount" element={<AccountDetails />}></Route>
          <Route exact path="/oderdetails" element={<OrderDetails />}></Route>

          <Route exact path="*" element={<NotFound />}></Route>

          {/* Dashboard Route */}
          <Route exact path="/dashboard" element={<DashboardHome />}></Route>
          <Route exact path="/dashboard/store" element={<DashStore />}></Route>
          <Route
            exact
            path="/dashboard/store/createbranch"
            element={<CreateStore />}
          ></Route>
          <Route
            exact
            path="/dashboard/store/storesetting"
            element={<StoreSettings />}
          ></Route>
          <Route exact path="/dashboard/users" element={<Users />}></Route>
          <Route
            exact
            path="/dashboard/userDetails"
            element={<UserDetails />}
          ></Route>
          <Route exact path="/dashboard/orders" element={<Orders />}></Route>
          <Route
            exact
            path="/dashboard/orderDetail"
            element={<OrderDetail />}
          ></Route>
          <Route
            exact
            path="/dashboard/inquiries"
            element={<Inquiries />}
          ></Route>
          <Route
            exact
            path="/dashboard/inquiriesdetails"
            element={<InquiriesDetails />}
          ></Route>
          <Route exact path="/dashboard/product" element={<Product />}></Route>
          <Route
            exact
            path="/dashboard/productdetails"
            element={<ProductDetails />}
          ></Route>
          <Route
            exact
            path="/dashboard/addproducts"
            element={<AddProducts />}
          ></Route>
          {/* Arham */}
          <Route path="/dashboard/offers" element={<Offer />}></Route>
          <Route path="/dashboard/add-offer" element={<AddOffer />}></Route>
          <Route
            path="/dashboard/offer-detail"
            element={<OfferDetail />}
          ></Route>
          <Route path="/dashboard/team" element={<Team />}></Route>

          <Route
            path="/dashboard/analytics"
            element={<ReportAnalytics />}
          ></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route path="/dashboard/delivery" element={<Delivery />}></Route>
          <Route path="/dashboard/discounts" element={<Discounts />}></Route>
          <Route
            path="/dashboard/add-discount"
            element={<AddDsicount />}
          ></Route>
          <Route
            path="/dashboard/discount-detail"
            element={<DiscountDetails />}
          ></Route>
          <Route path="/dashboard/team-detail" element={<TeamDetail />}></Route>
          <Route
            path="/dashboard/add-new-member"
            element={<AddNewTeamMember />}
          ></Route>
          <Route
            path="/dashboard/most-selling-items"
            element={<MostSellingItem />}
          ></Route>
          {/* Arham */}
        </RouteSwitch>
      </Router>
    </div>
  );
}
