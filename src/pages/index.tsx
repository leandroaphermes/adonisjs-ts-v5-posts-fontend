import type { NextPage } from "next";

import PostContainer from "components/PostContainer";

import mockPost from "components/PostContainer/mock";

const Home: NextPage = () => {
  console.log(mockPost);

  return (
    <>
      <PostContainer {...mockPost} />
    </>
  );
};

export default Home;
