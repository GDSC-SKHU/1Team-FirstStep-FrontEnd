/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import theme from "styles/Theme/theme";

const SignUp = () => {
    const router = useRouter();
    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [userAge, setUserAge] = useState<string>("");

    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    };
    const onChangeuserAge = (e: ChangeEvent<HTMLInputElement>) => {
        setUserAge(e.target.value);
    };
    const onChangeUserPw = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPw(e.target.value);
    };
    const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
        setNickName(e.target.value);
    };

    // api 받아서 값넘겨주기 
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div css={allWrap}>
            <div css={signUpWrap}>
                <h1>회원가입</h1>
                <form onSubmit={onSubmit} css={formList}>
                    <input
                        type="text"
                        placeholder="ID"
                        onChange={onChangeUserId}
                        value={userId}
                    />
                    <input
                        type="password"
                        placeholder="PW"
                        onChange={onChangeUserPw}
                        value={userPw}
                    />
                    <input
                        type="text"
                        placeholder="NickName"
                        onChange={onChangeNickName}
                        value={nickName}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        onChange={onChangeuserAge}
                        value={userAge}
                    />

                    <div css={submitBtn}>
                        <Link href="/">
                            <button>돌아가기</button>
                        </Link>
                        <button type="submit">가입하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

const allWrap = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const signUpWrap = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 3rem;

    width: 25rem;
    height: 35rem;
    border-radius: 1rem;

    background-color: ${theme.color.skyblue};
    font-weight: ${theme.fontWeight.normal};
    text-align: center;

    h1 {
        color: white;
    }
`;

const formList = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    input {
        all: unset;
        width: 20rem;
        padding: 0.65rem;

        color: ${theme.color.white};
        text-align: left;
        border-bottom: 1px solid white;
    }
    input::placeholder {
        color: ${theme.color.white};
    }
`;

const submitBtn = (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;

    margin-top: 3.5rem;

    color: ${theme.color.white};

    button {
        width: 7rem;
        height: 2rem;
        border: 1px solid white;
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-5px);
            cursor: pointer;
        }
    }
`;
