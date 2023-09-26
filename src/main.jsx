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
import PestControlPage from './TrendingCategory/pestControl/PestControlPage'
import PetShopPage from './TrendingCategory/petShop/PetShopPage'
import AcRepairPage from './repairServices/acRepair/AcRepairPage'
import CarCarePage from './repairServices/carCare/CarCarePage'
import WashingMachinePage from './repairServices/washingMachine/WashingMachinePage'
import ElectronicServicesPage from './repairServices/electronicServices/ElectronicServicesPage'
import ProductDetailPage from './ProductDetails/ProductDetailPage'
import RestaurantPage from './popularCategory/restaurant/RestaurantPage'
import RentalsPage from './TrendingCategory/rentals/RentalsPage'
import SubCategoryRestaurantPage from './popularCategory/restaurant/components/SubCategory/SubCategoryRestaurantPage'
import SubCategoryRentalPage from './TrendingCategory/rentals/components/SubCategory/SubCategoryRentalPage.jsx'
import SubCategoryHospitalPage from './popularCategory/hospitals/components/SubCategory/SubCategoryHospitalPage'
import BusinessListingForm from './components/Navbar/addBusiness/BusinessListingForm'
import SubCategoryCarPage from './repairServices/carCare/components/SubCategory/SubCategoryCarPage'
import SubCategoryAcPage from './repairServices/acRepair/components/SubCategory/SubCategoryAcPage'
import SubCategoryWashingMachinePage from './repairServices/washingMachine/components/SubCategory/SubCategoryWashingMachinePage'
import SubCategoryElectronicPage from './repairServices/electronicServices/components/SubCategory/SubCategoryElectronicPage'
import BusinessForm from './components/Navbar/addBusiness/BuisnessForm'
import PaymentForm from './components/Navbar/addBusiness/PaymentForm'
import Education from './otherServices/education/Education'
import WeddingServices from './otherServices/weddingService/WeddingServices'
import ContactForm from './components/Navbar/addBusiness/ContactForm'
import ThankYou from './components/Navbar/addBusiness/ThankYou'
import KeywordSelectionForm from './components/Navbar/addBusiness/KeywordSelectionForm'
import SubCategoryWeddingServicesPage from './otherServices/weddingService/components/SubCategory/SubCategoryWeddingServicesPage'
import SubCategoryEducationPage from './otherServices/education/components/SubCategory/SubCategoryEducationPage'
import SubCategoryConsultantPage from './otherServices/consultant/components/SubCategory/SubCategoryConsultantPage'
import Consultant from './otherServices/consultant/Consultant'
import SubCategoryRealEstatePage from './popularCategory/housings/components/SubCategory/SubCategoryRealEstatePage'
import RealEstatePage from './popularCategory/housings/RealEstatePage'
import Autocare from './automobileparts/Autocare'
import ProductDetailPageShop from './automobileparts/components/ProductDetails/ProductDetailPageShop'
import ProductDetailb2bPageShop from './B2B/components/ProductDetails/ProductDetailPageShop'
import SubCategoryAutoPage from './automobileparts/components/SubCategory/SubCategoryAutoPage'
import B2B from './B2B/B2B'
import SubCategoryb2bPage from './B2B/components/SubCategory/SubCategoryb2bPage'
import HomeService from './HomeServices/HomeService'
import SubCategoryHomeServicePage from './HomeServices/components/SubCategory/SubCategoryHomeServicePage'
import LoginModal from './components/modals/LoginModal'
import Contractor from './otherServices/contractor/Contractor'
import SubCategoryContractorPage from './otherServices/contractor/components/SubCategory/SubCategoryContractorPage'
import SubCategoryCouriersPage from './otherServices/couriers/components/SubCategory/SubCategoryCouriersPage'
import AstrologerPage from './popularCategory/astrologer/AstrologerPage'

const router = createBrowserRouter([
  {
    path: '/signin',
    element: <LoginModal />
  },
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
    path: '/autocare',
    element: <Autocare />
  },
  {
    path: '/tvservices',
    element: <Autocare />
  },
  {
    path: '/refrigeratorservices',
    element: <Autocare />
  },
  {
    path: '/kitchenservices',
    element: <Autocare />
  },
  {
    path: '/autocare/Product_Detail',
    element: <ProductDetailPageShop />
  },
  {
    path: '/autocarecategory',
    element: <SubCategoryAutoPage />
  },
  {
    path: '/homeservices',
    element: <HomeService />
  },
  {
    path: '/homeservicescategory',
    element: <SubCategoryHomeServicePage />
  },
  {
    path: '/contactinfo',
    element: <ContactForm />
  },
  {
    path: '/keywordsform',
    element: <KeywordSelectionForm />
  },
  {
    path: '/otherinfo',
    element: <PaymentForm />
  },
  {
    path: '/thankyou',
    element: <ThankYou />
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
    path: '/realestate',
    element: <RealEstatePage />
  },
  {
    path: '/realestatecategory',
    element: <SubCategoryRealEstatePage />
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
    path: '/weddingservices',
    element: <WeddingServices />
  },
  {
    path: '/weddingservicescategory',
    element: <SubCategoryWeddingServicesPage />
  },
  {
    path: '/education',
    element: <Education />
  },
  {
    path: '/educationcategory',
    element: <SubCategoryEducationPage />
  },
  {
    path: '/consultant',
    element: <Consultant />
  },
  {
    path: '/consultantcategory',
    element: <SubCategoryConsultantPage />
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
  },
  {
    path: '/b2bcategory',
    element: <SubCategoryb2bPage />
  },
  {
    path: '/b2b',
    element: <B2B />
  },
  {
    path: '/b2b/Product_Detail',
    element: <ProductDetailb2bPageShop />
  },
  {
    path: '/contractor',
    element: <Contractor />
  },
  {
    path: '/contractorcategory',
    element: <SubCategoryContractorPage />
  },
  {
    path: '/contractor/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/couriers',
    element: <CouriersPage />
  },
  {
    path: '/courierscategory',
    element: <SubCategoryCouriersPage />
  },
  {
    path: '/couriers/Product_Detail',
    element: <ProductDetailPage />
  },
  {
    path: '/astrologer',
    element: <AstrologerPage />
  },
  {
    path: '/astrologer/Product_Detail',
    element: <ProductDetailPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
