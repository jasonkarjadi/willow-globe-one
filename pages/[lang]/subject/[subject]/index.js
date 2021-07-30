import { Center } from "@chakra-ui/layout";
import BookLayout from "../../../../components/BookLayout";
import Globe from "../../../../components/Globe";
import StackButtons from "../../../../components/StackButtons";
import { languages } from "../../../../data/";

const Subject = ({ data }) => {
  return (
    <BookLayout
      leftContent={
        <>
          <Globe />
          <Center flex={1} mt="70px" bg="gray.200" borderRadius="3xl">
            {data.name}
          </Center>
        </>
      }
      rightContent={<StackButtons children={data.bigChungus} />}
    />
  );
};

export const getStaticPaths = async () => {
  const subjects = languages.map((language) => language.subjects);
  const paths = subjects[0].map((subject) => ({
    params: { lang: "en", subject: subject.iso },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const filtered = languages.filter((language) => language.iso === params.lang);
  return {
    props: {
      data: filtered[0],
    },
  };
};

export default Subject;
