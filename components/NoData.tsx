import { SadIcon } from './IconsPack';

const NoData = () => {
  return (
    <div className="py-10 flex place-content-center dark:bg-gray-900 w-full items-center text-gray-600 text-sm tracking-wider font-semibold ">
      Haven't yet started anything <SadIcon cln={`w-24 h-24`} />
    </div>
  );
};

export default NoData;
