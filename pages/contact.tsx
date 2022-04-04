import { NextPage } from 'next';
import Container from '../components/Container';
import HeroSection from '../components/Hero';

const ConactPage: NextPage = () => {
  return (
    <Container>
      <HeroSection title="Contact Page" description="Contact Page" />
      <div className="prose dark:prose-dark">hee</div>
    </Container>
  );
};

export default ConactPage;
