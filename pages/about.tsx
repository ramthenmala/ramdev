import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Container from '../components/Container';
import { getAboutMe } from '../query/aboutme';
import HeroSection from '../components/Hero';
import { useGetAbout } from '../actions';
import DataParser from '../components/DataParser';
import BouncingLoader from '../components/BouncingLoader';

const AboutPage: NextPage = ({ post: initialData }) => {
  const { data: aboutData } = useGetAbout(initialData);

  return (
    <Container>
      {aboutData ? (
        <>
          <HeroSection
            title={aboutData[0].title}
            description={aboutData[0].subtitle}
          />
          <div className="prose dark:prose-dark py-10">
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
