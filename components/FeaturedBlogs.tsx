import Container from '../components/Container';
import { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import HeroSection from '../components/Hero';
import NoData from '../components/NoData';
import BlogList from './BlogList';
import { parseISO, format } from 'date-fns';

const FeaturedBlogs: NextPage = ({ featuredPost }) => {
  return (
    <>
      <section className="py-10">
        <div className="flex items-center justify-between pb-5">
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            Blogs
          </h3>
        </div>

        <div className="flex flex-col pb-5">
          {featuredPost.map((post) => (
            <BlogList
              key={post._id}
              url={`/blog/${post.slug.current}`}
              title={post.title}
              publishedate={format(
                parseISO(post.publishedate),
                'MMMM dd, yyyy'
              )}
              subtitle={post.subtitle}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturedBlogs;
