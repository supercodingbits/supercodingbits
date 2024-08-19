import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import HeaderCodeList from './Components/Codes/Header/HeaderCodeList';
import ResponsiveNavigationBarUsingHTMLAndCSS from './Components/Codes/Header/CodesDetails/ResponsiveNavigationBarUsingHTMLAndCSS';
import ResponsiveFooterUsingHTMLandCSS from './Components/Codes/Footer/CodeDetails/ResponsiveFooterUsingHTMLandCSS';
import FooterCodeList from './Components/Codes/Footer/FooterCodeList';
import CardBlurHoverEffectUsingHTMLandCSS from './Components/Codes/Card/CodeDetails/CardBlurHoverEffectUsingHTMLandCSS';
import CardCodeList from './Components/Codes/Card/CardCodeList';
import CardHoverEffectUsingHTMLandCSS from './Components/Codes/Card/CodeDetails/CardHoverEffectUsingHTMLandCSS';
import CardInformationHoverEffectUsingHTMLandCSS from './Components/Codes/Card/CodeDetails/CardInformationHoverEffectUsingHTMLandCSS';
import Image3dRotationUsingHTMLandCSS from './Components/Codes/Image/CodeDetails/Image3dRotationUsingHTMLandCSS';
import ImageCodeList from './Components/Codes/Image/ImageCodeList';
import ImageAccordionUsingHTMLandCSS from './Components/Codes/Image/CodeDetails/ImageAccordionUsingHTMLandCSS';
import AboutUs from './Components/about/AboutUs';
import BlogList from './Components/Blog/BlogList';
import InstallationGuideforAndroidStudio from './Components/Blog/BlogData/InstallationGuideforAndroidStudio';
import ProjectList from './Components/Projects/ProjectList';
import CProgrammingProjects from './Components/Projects/CProgrammingProjects';
import JavaProgrammingProjects from './Components/Projects/JavaProgrammingProjects';
import ProgrammingList from './Components/Programs/ProgrammingList';
import AboutUsCodeList from './Components/Codes/AboutUs/AboutUsCodeList';
import SimpleAboutUs from './Components/Codes/AboutUs/AboutDetails/SimpleAboutUs';
import BookLists from './Components/BooksPurches/BookLists';
import YTShorts from './Components/YTShorts/YTShorts';
import ContactUsCodeList from './Components/Codes/ContactUs/ContactUsCodeList';
import ContactUs from './Components/Codes/ContactUs/ContactusDetails/ContactUs';
import ContactTeam from './Components/about/ContactTeam';
import ImagegalleryUsingHTMLandCSS from './Components/Codes/Image/CodeDetails/ImagegalleryUsingHTMLandCSS';
import SimpleResponsiveFooterUsingHTMLandCSS from './Components/Codes/Footer/CodeDetails/SimpleResponsiveFooterUsingHTMLandCSS';
import NativeHeaderCodeList from './Components/Reactnative/Header/NativeHeaderCodeList';
import SimpleHeaderUsingReactNative from './Components/Reactnative/Header/CodeDetails/SimpleHeaderUsingReactNative';
import Strategiesforwritinganeffectivedeveloperresume from './Components/Blog/BlogData/Strategiesforwritinganeffectivedeveloperresume'
import PortfolioWebsites from './Components/Projects/PortfolioWebsites';
import SimpleFooterUsingReactNative from './Components/Reactnative/Footer/CodeDetails/SimpleFooterUsingReactNative';
import NativeFooterCodeList from './Components/Reactnative/Footer/NativeFooterCodeList';
import UnderConstruction from './Components/UnderConstruction/UnderConstruction';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/blog' element={<BlogList />} />
          <Route path='/projects' element={<ProjectList />} />
          <Route path='/headercodelist' element={<HeaderCodeList />} />
          <Route path='/footercodelist' element={<FooterCodeList/>} />
          <Route path='/cardcodelist' element={<CardCodeList />} />
          <Route path='/imagecodelist' element={<ImageCodeList />} />
          <Route path='/aboutuscodelist' element={<AboutUsCodeList/>} />
          <Route path='/contactuscodelist' element={<ContactUsCodeList />}/>
          <Route path='/ytshorts' element={<YTShorts />} />


          {/* Header Code List */}
          <Route path='/responsive-navigation-bar-using-html-and-css' element={<ResponsiveNavigationBarUsingHTMLAndCSS />} />
          

          {/* Footer Code List */}
          <Route path='/responsive-footer-using-html-and-css' element={<ResponsiveFooterUsingHTMLandCSS />} />
          <Route path='/simple-responsive-footer-using-html-and-css' element={<SimpleResponsiveFooterUsingHTMLandCSS />} />

          


          {/* Card Code List */}
          <Route path='/card-blur-hover-effect-using-html-and-css' element={<CardBlurHoverEffectUsingHTMLandCSS /> } />
          <Route path='/card-hover-effect-using-html-and-css' element={<CardHoverEffectUsingHTMLandCSS /> } />
          <Route path='/card-information-hover-effect' element={<CardInformationHoverEffectUsingHTMLandCSS />} />


          {/* Image Code List */}
          <Route path='/3d-image-rotation-using-html-and-css' element={<Image3dRotationUsingHTMLandCSS />} />
          <Route path='/image-accordion-using-html-and-css' element={<ImageAccordionUsingHTMLandCSS />} />
          <Route path='/image-gallery-using-html-and-css' element={<ImagegalleryUsingHTMLandCSS />} />


          {/* Contact Us */}
          <Route path='/contact-us-using-html-and-css' element={<ContactUs />} />


          {/* Blog */}
          <Route path='/installation-guide-for-android-studio' element={<InstallationGuideforAndroidStudio />} />
          <Route path='/strategies-for-writing-an-effective-developer-resume' element={<Strategiesforwritinganeffectivedeveloperresume />} />



          {/* About Us */}
          <Route path='/simple-about-us' element={<SimpleAboutUs />} />
          

          {/* Projects */}
          <Route path='/cprogrammingprojects' element={<CProgrammingProjects />} />
          <Route path='/javaprogrammingprojects' element={<JavaProgrammingProjects />} />
          <Route path='/portfoliowebsites' element={<PortfolioWebsites />} />


          {/* Notes */}
          <Route path='/programminglist' element={<ProgrammingList />} />


          {/* Books Purches */}
          <Route path='/purchesbooks' element={<BookLists />} />

          {/* Contact */}
          <Route path='/contact-team' element={<ContactTeam />} />



          {/* native */}
          <Route path='/headernativecodelist' element={<NativeHeaderCodeList />} />
          <Route path='/footernativecodelist' element={<NativeFooterCodeList />} />
          <Route path='/simple-header-using-react-native' element={<SimpleHeaderUsingReactNative />} />
          <Route path='/simple-footer-using-react-native' element={<SimpleFooterUsingReactNative />} />


          <Route path='/underconstruction' element={<UnderConstruction />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
