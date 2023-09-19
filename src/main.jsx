import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './layout'
import CouriersPage from './popularCategory/couriers/CouriersPage'
import TransportPage from './popularCategory/transport/TransportPage'
import HospitalsPage from './popularCategory/hospitals/HospitalsPage'
import HotelsPage from './popularCategory/hotels/HotelsPage'
import MoversPage from './popularCategory/movers/MoversPage'
import TravelsPage from './TrendingCategory/travels/TravelsPage'
import DentistPage from './TrendingCategory/dentist/DentistPage'
import GymPage from './TrendingCategory/gym/GymPage'
import HostelsPage from './TrendingCategory/hostels/HostelsPage'
import HousingsPage from './popularCategory/housings/HousingsPage'
import PestControlPage from './TrendingCategory/pestControl/PestControlPage'
import PetShopPage from './TrendingCategory/petShop/PetShopPage'
import AcRepairPage from './repairServices/acRepair/AcRepairPage'
import CarCarePage from './repairServices/carCare/CarCarePage'
import WashingMachinePage from './repairServices/washingMachine/WashingMachinePage'
import ElectronicServicesPage from './repairServices/electronicServices/ElectronicServicesPage'
import BridalMakeupPage from './weddingAndBeauty/bridalMakeup/BridalMakeupPage'
import PhotographyPage from './weddingAndBeauty/photography/PhotographyPage'
import WeddingPlanningPage from './weddingAndBeauty/weddingPlanning/WeddingPlanningPage'
import WeddingVenuesPage from './weddingAndBeauty/weddingVenues/WeddingVenuesPage'
import ProductDetailPage from './ProductDetails/ProductDetailPage'
import RestaurantPage from './popularCategory/restaurant/RestaurantPage'
import RentalsPage from './TrendingCategory/rentals/RentalsPage'
import SubCategoryRestaurantPage from './popularCategory/restaurant/components/SubCategory/SubCategoryRestaurantPage'
import SubCategoryBridalPage from './weddingAndBeauty/bridalMakeup/components/SubCategory/SubCategoryBridalPage'
import SubCategoryRentalPage from './TrendingCategory/rentals/components/SubCategory/SubCategoryRentalPage.jsx'
import SubCategoryHospitalPage from './popularCategory/hospitals/components/SubCategory/SubCategoryHospitalPage'
import BusinessListingForm from './components/Navbar/addBusiness/BusinessListingForm'
import SubCategoryCarPage from './repairServices/carCare/components/SubCategory/SubCategoryCarPage'
import SubCategoryAcPage from './repairServices/acRepair/components/SubCategory/SubCategoryAcPage'
import SubCategoryWashingMachinePage from './repairServices/washingMachine/components/SubCategory/SubCategoryWashingMachinePage'
import SubCategoryElectronicPage from './repairServices/electronicServices/components/SubCategory/SubCategoryElectronicPage'
import BusinessForm from './components/Navbar/addBusiness/BuisnessForm'
import PaymentForm from './components/Navbar/addBusiness/PaymentForm'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/addbusiness',
    element: <BusinessListingForm />
  },
  {
    path: '/businessform',
    element: <BusinessForm />
  },
  {
    path: '/otherinfo',
    element: <PaymentForm />
  },

  {
    path: '/transport',
    element: <TransportPage />
  },
  {
    path: '/restaurant',
    element: <RestaurantPage />
  },
  {
    path: '/restaurantcategory',
    element: <SubCategoryRestaurantPage />
  },
  {
    path: '/couriers',
    element: <CouriersPage />
  },
  {
    path: '/hospitals',
    element: <HospitalsPage />
  },
  {
    path: '/hospitalscategory',
    element: <SubCategoryHospitalPage />
  },
  {
    path: '/hotels',
    element: <HotelsPage />
  },
  {
    path: '/movers',
    element: <MoversPage />
  },
  {
    path: '/rentals',
    element: <RentalsPage />
  },
  {
    path: '/rentalcategory',
    element: <SubCategoryRentalPage />
  },
  {
    path: '/travels',
    element: <TravelsPage />
  },
  {
    path: '/dentist',
    element: <DentistPage />
  },
  {
    path: '/gym',
    element: <GymPage />
  },
  {
    path: '/hostels',
    element: <HostelsPage />
  },
  {
    path: '/housings',
    element: <HousingsPage />
  },
  {
    path: '/pestControl',
    element: <PestControlPage />
  },
  {
    path: '/petshop',
    element: <PetShopPage />
  },
  {
    path: '/acRepair',
    element: <AcRepairPage />
  },
  {
    path: '/acRepaircategory',
    element: <SubCategoryAcPage />
  },
  {
    path: '/carCare',
    element: <CarCarePage />
  },
  {
    path: '/carCarecategory',
    element: <SubCategoryCarPage />
  },
  {
    path: '/electronicServices',
    element: <ElectronicServicesPage />
  },
  {
    path: '/electronicServicesCategory',
    element: <SubCategoryElectronicPage />
  },
  {
    path: '/washingMachine',
    element: <WashingMachinePage />
  },
  {
    path: '/washingMachineCategory',
    element: <SubCategoryWashingMachinePage />
  },
  {
    path: '/bridalMakeup',
    element: <BridalMakeupPage />
  },
  {
    path: '/bridalMakeupcategory',
    element: <SubCategoryBridalPage />
  },
  {
    path: '/photography',
    element: <PhotographyPage />
  },
  {
    path: '/weddingPlanning',
    element: <WeddingPlanningPage />
  },
  {
    path: '/weddingvenues',
    element: <WeddingVenuesPage />
  },
  {
    path: '/restaurant/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/transport/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/couriers/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/hospitals/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/hotel/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/movers/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/rentals/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/travels/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/dentist/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/gym/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/hostels/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/housings/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/pestControl/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/petshop/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/acRepairPage/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/carCare/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/electronicServices/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/washingMachine/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/bridalMakeup/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/photography/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/weddingPlanning/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/weddingvenues/Product_Detail',
    element: <ProductDetailPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
