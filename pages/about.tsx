import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Container from '../components/Container';
import { getAboutMe } from '../query/aboutme';
import HeroSection from '../components/Hero';
import { useGetAbout } from '../actions';
import DataParser from '../components/DataParser';
import BouncingLoader from '../components/BouncingLoader';

interface Props {}

const AboutPage: NextPage<Props> = ({ post: initialData }) => {
  const { data: aboutData, error } = useGetAbout(initialData);
  console.log(aboutData);
  if (aboutData) {
  }
  return (
    <Container>
      {aboutData ? (
        <>
          <HeroSection
            title={aboutData[0].title}
            description={aboutData[0].subtitle}
          />
          <div className="prose dark:prose-dark">
            <DataParser content={aboutData[0].description} />
          </div>
        </>
      ) : (
        <BouncingLoader />
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const post = await getAboutMe();
  return {
    props: {
      post,
    },
  };
};

export default AboutPage;
