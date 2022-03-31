import Card from './Card';

const CardList = ({ title, date }) => {
  return (
    <div>
      <Card title={title} date={date} />
    </div>
  );
};

export default CardList;
