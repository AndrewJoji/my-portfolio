import AboutMe from 'src/components/Articles/AboutMe';
import Achievements from 'src/components/Articles/Achievements';
import { AdditionalInfo } from 'src/components/Articles/AdditionalInfo';
import { ContactInformation } from 'src/components/Articles/ContactInformation';
import Professional from 'src/components/Articles/Professional';
import BusinessExperience from 'src/components/Articles/BusinessExperience';
import Project from 'src/components/Articles/Project';
import Leadership from 'src/components/Articles/Leadership';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';

const Page: React.FC<PageProps> = () => {
  return (
    <>
      <Header />
  
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AboutMe />
          <ContactInformation />
        </div>
{/*     
        <div className="mt-12">
          <Skills />
        </div> */}
        
        <div className="mt-12">
          <Achievements />
        </div>
        
        <div className="mt-12">
          <Professional />
        </div>

        <div className="mt-12">
          <Project />
        </div>

        <div className="mt-12">
          <BusinessExperience />
        </div>
        
        <div className="mt-12">
          <Leadership />
        </div>

        <div className="mt-12">
          <AdditionalInfo />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
