/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import axios from "axios";
import Footer from "components/Footer";
import Nav from "components/Nav";
import useGetPostById from "hooks/api/useGetPostById";
import Link from "next/link";
import { useRouter } from "next/router"; 

function Detail() {
  const {
    query: { id },
  } = useRouter();

  const { post } = useGetPostById({ id });

  return (
    <>
      <Nav />
      <div css={wrapper}>
        <h1 css={titleWrapper}>{post?.id}</h1>
        <div css={authorWrapper}>
          <div></div>
          <span>{post?.author}</span>
        </div>
        <div css={contentWrapper}>{post?.content}</div>
        <div css={buttonWrapper}>
          <Link href="/Post">
            <button css={button}>목록보기</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Detail;

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const titleWrapper = css`
  font-size: 2.7rem;
`;

const authorWrapper = (theme: Theme) => css`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  font-weight: ${theme.fontWeight.normal};
`;

const contentWrapper = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.light};
  font-size: 1.3rem;
`;

const buttonWrapper = css`
  position: absolute;
  bottom: 8rem;
`;

const button = (theme: Theme) => css`
  color: ${theme.color.white};
  background-color: ${theme.color.black};
  min-width: 7.5rem;
  height: 2.5rem;
  padding: 0 1.2rem;
  border-radius: 1.3rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 13px;
`;
