import { GetStaticProps, NextPage } from 'next';
import CardList from '../components/Card/CardList';
import Container from '../components/Container';
import HeroSection from '../components/Hero';
import { urlFor } from '../lib/sanity';
import { getPhotoGal } from '../query/photography';

const PhotographyPage: NextPage = ({ gallery }) => {
  return (
    <Container>
      <HeroSection title="Photography" description="Photography" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {gallery?.length &&
          gallery.map((phGallery) => (
            <CardList
              title={phGallery.title}
              slug={phGallery.slug.current}
              imgUrl={urlFor(phGallery.image).url()}
              key={phGallery._id}
            />
          ))}
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const gallery = await getPhotoGal({ offset: 0 });
  return {
    props: {
      gallery,
    },
  };
};

export default PhotographyPage;
