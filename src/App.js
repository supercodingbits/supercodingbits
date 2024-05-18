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
          


          {/* Card Code List */}
          <Route path='/card-blur-hover-effect-using-html-and-css' element={<CardBlurHoverEffectUsingHTMLandCSS /> } />
          <Route path='/card-hover-effect-using-html-and-css' element={<CardHoverEffectUsingHTMLandCSS /> } />
          <Route path='/card-information-hover-effect' element={<CardInformationHoverEffectUsingHTMLandCSS />} />


          {/* Image Code List */}
          <Route path='/3d-image-rotation-using-html-and-css' element={<Image3dRotationUsingHTMLandCSS />} />
          <Route path='/image-accordion-using-html-and-css' element={<ImageAccordionUsingHTMLandCSS />} />


          {/* Contact Us */}
          <Route path='/contact-us-using-html-and-css' element={<ContactUs />} />


          {/* Blog */}
          <Route path='/installation-guide-for-android-studio' element={<InstallationGuideforAndroidStudio />} />


          {/* About Us */}
          <Route path='/simple-about-us' element={<SimpleAboutUs />} />
          

          {/* Projects */}
          <Route path='/cprogrammingprojects' element={<CProgrammingProjects />} />
          <Route path='/javaprogrammingprojects' element={<JavaProgrammingProjects />} />


          {/* Notes */}
          <Route path='/programminglist' element={<ProgrammingList />} />


          {/* Books Purches */}
          <Route path='/purchesbooks' element={<BookLists />} />

          {/* Contact */}
          <Route path='/contact-team' element={<ContactTeam />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
