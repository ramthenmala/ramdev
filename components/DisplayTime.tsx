import moment from 'moment';

export const DisplayTime = ({ time }) => {
  return (
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
      {time} Min
    </p>
  );
};

export const PublishedTime = ({ time, userName }) => {
  return (
    <p className="ml-2 mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
      {userName} - {moment(time).format('DD/MM/YYYY')}
    </p>
  );
};
