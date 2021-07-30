import BookLayout from "../../../../../components/BookLayout";
import ListLayout from "../../../../../components/ListLayout";
import { listBodies } from "../../../../../data/listBodies";
import { useRouter } from "next/router";

export const StudyList = ({ data }) => {
  console.log("data: ", data);
  const router = useRouter();
  console.log("router: ", router);
  return (
    <BookLayout
      leftContent={
        <ListLayout
          listTitle={data.en.title}
          listHead={data.en.listHead}
          listBody={data.listBody}
        />
      }
      rightContent=""
    />
  );
};

export const getStaticPaths = async () => {
  const paths = listBodies.map((data) => ({
    params: { lang: "en", tagname: data.tagname },
  }));
  console.log("paths: ", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const filtered = listBodies.filter((data) => data.tagname === params.tagname);
  return {
    props: {
      data: filtered[0],
    },
  };
};

export default StudyList;
