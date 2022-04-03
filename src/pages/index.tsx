import type { NextPage } from "next";

import PostContainer from "components/PostContainer";

import mockPost from "components/PostContainer/mock";

const Home: NextPage = () => {
  console.log(mockPost);

  return (
    <div>
      <PostContainer {...mockPost} />
    </div>
  );
};

export default Home;
