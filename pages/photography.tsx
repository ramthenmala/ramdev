import { NextPage } from 'next';
import Container from '../components/Container';
import HeroSection from '../components/Hero';

const PhotographyPage: NextPage = () => {
  return (
    <Container>
      <HeroSection title="Photography" description="Photography" />
      <div className="prose dark:prose-dark">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            lsdjlfsdjf
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PhotographyPage;
