import { NextPage } from 'next';
import Container from '../components/Container';
import { SendMailIcon, SmileIcon } from '../components/IconsPack';

const ConactPage: NextPage = () => {
  return (
    <Container>
      <div className="md:px-32 md:pt-16 md:pb-32 text-center">
        <SendMailIcon />
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Let's work together <SmileIcon /> . To hire, collaborate or give any
          feedback get in touch.
        </p>
        <h1 className="text-xl md:text-3xl underline">
          devramthenmala@gmail.com
        </h1>
      </div>
    </Container>
  );
};

export default ConactPage;
