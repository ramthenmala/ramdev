import useSWR from 'swr';

const Home = ({ posts }: any) => {
  const fetcher = async () => {
    const postRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles`
    );
    const { data } = await postRes.json();
    return data;
  };

  const { data, error } = useSWR('blog', fetcher);
  if (error) return 'An error Occured';
  if (!data) return 'Loading';
  console.log(data.slice(0, 5));

  return (
    <div>
      {data.map((items: any) => (
        <h1 key={items.id} className="text-3xl font-bold underline">
          {items.attributes.title}
        </h1>
      ))}
    </div>
  );
};

export default Home;
