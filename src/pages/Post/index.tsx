/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import axios from "axios";
import PostCard from "components/Card/PostCard";
import Circle from "components/Category/Circle";
import Footer from "components/Footer";
import Nav from "components/Nav";
import Section from "components/Text/Section";
import useGetPostById from "hooks/api/useGetPostById";
import Link from "next/link";
import { useEffect, useState } from "react";

function Post() {
  const categoryArray = [
    { category: "전체", path: "/Post" },
    { category: "진로", path: "/" },
    { category: "사회", path: "/" },
    { category: "경제", path: "/" },
    { category: "건강", path: "/" },
    { category: "연애", path: "/" },
    { category: "뷰티", path: "/" },
    { category: "대학", path: "/" },
    { category: "유흥", path: "/" },
  ];

  const [postList, setPostList] = useState<IGetPostContent[]>([]);

  async function getPost() {
    const response = await axios.get<{}, IGetPost>(
      "http://3.36.64.80:80/api/categories"
    );
    setPostList(response.data);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Nav />
      <div css={wrapper}>
        <Section title="Post" summary="당신의 오늘을 변화시키는 첫걸음" />
        <div css={buttonWrapper}>
          <div></div>
          <Link href="/Post/newPost">
            <button css={newPostButton}>글 작성하기</button>
          </Link>
        </div>

        <div css={categoryWrapper}>
          {categoryArray.map((category, index) => {
            return (
              <Circle
                key={index}
                path={category.path}
                category={category.category}
              />
            );
          })}
        </div>
        <div css={postListWrapper}>
          {postList.map((e, index) => {
            return <PostCard key={index} title={e.title} id={e.id} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Post;

const postListWrapper = css`
  display: flex;
  flex-direction: row;
  margin: 1rem 4.7rem;
`;

const wrapper = css`
  width: 100%;
  height: 100vh;
  margin: 2.5rem 0;
`;

const categoryWrapper = css`
  margin: 1rem 4.7rem;
`;

const buttonWrapper = (theme: Theme) => css`
  display: flex;
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  font-weight: ${theme.fontWeight.normal};
`;

const newPostButton = (theme: Theme) => css`
  color: ${theme.color.black};
  background-color: ${theme.color.grey100};
  min-width: 7.5rem;
  height: 2.5rem;
  padding: 0 1.2rem;
  border-radius: 0.4rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 13px;
`;
