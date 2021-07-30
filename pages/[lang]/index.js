import { Center } from "@chakra-ui/layout";
import BookLayout from "../../components/BookLayout";
import Globe from "../../components/Globe";
import StackButtons from "../../components/StackButtons";
import { languages } from "../../data/";
import { useRouter } from "next/router";

export default function Home({ data }) {
  const router = useRouter();
  console.log(router);
  return (
    <BookLayout
      leftContent={
        <>
          <Globe />
          <Center flex={1} mt="70px" bg="gray.200" borderRadius="3xl"></Center>
        </>
      }
      rightContent={<StackButtons children={data.bigChungus} />}
    />
  );
}

export const getStaticPaths = async () => {
  const paths = languages.map((language) => ({
    params: { lang: language.iso },
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
