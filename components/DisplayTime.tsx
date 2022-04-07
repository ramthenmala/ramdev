import { parseISO, format } from 'date-fns';

export const DisplayTime = ({ time }) => {
  return (
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
      {time} Min
    </p>
  );
};

export const PublishedTime = ({ time }) => {
  return (
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
      {format(parseISO(time), 'dd.MM.yyyy')}
    </p>
  );
};
