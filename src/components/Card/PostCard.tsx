/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import Link from "next/link";

interface Props {
  id: IGetPostContent["id"];
  title: IGetPostContent["title"];
  author: IGetPostContent["author"];
}

function PostCard({ id, title, author }: Props) {
  return (
    <Link href={`/Detail/${id}`}>
      <div css={wrapper}>
        <div css={contentWrapper}>
          <span css={subTitle}>👣</span>
          <p css={subTitle}>{author}</p>
          <span css={titleCss}>{title}</span>
        </div>
        <div css={colorBg}></div>
      </div>
    </Link>
  );
}

export default PostCard;

const wrapper = css`
  overflow: hidden;
  position: relative;
  width: 18rem;
  height: 15rem;
  margin-right: 0.65rem;
  margin-top: 2.25rem;
  border-radius: 14px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
`;

const subTitle = (theme: Theme) => css`
  font-size: 0.8rem;
  margin: 0.2rem 0;
  font-weight: ${theme.fontWeight.light};
`;

const titleCss = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 1.6rem;
  letter-spacing: 0.7px;

`;

const colorBg = (theme: Theme) => css`
  position: absolute;
  bottom: 0;
  background-color: ${theme.color.skyblue};
  width: 100%;
  height: 50px;
`;
