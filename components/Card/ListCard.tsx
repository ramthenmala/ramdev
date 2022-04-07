import { CardProps } from '../../types/Card';
import Card from './Card';

const CardList = ({ title, slug, imgUrl }: CardProps) => {
  return <Card title={title} slug={slug} imgUrl={imgUrl} />;
};

export default CardList;
