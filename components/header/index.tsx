import Container from '../PageLayout';
import MobileMenu from './MobileMenu';
import NavMenuWrapper from './NavMenuWrapper';
import NavWrapper from './NavWrapper';
import ThemeSwitcher from './ThemeSwitcher';

const PageHeader = () => {
  return (
    <Container>
      <NavWrapper>
        <MobileMenu />
        <NavMenuWrapper />
        <ThemeSwitcher />
      </NavWrapper>
    </Container>
  );
};

export default PageHeader;
