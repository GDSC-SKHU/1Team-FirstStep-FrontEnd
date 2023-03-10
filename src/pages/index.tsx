/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import LottieWrapper from "components/Common/LottieWrapper";
import mainFlyingData from "assets/lottieJSON/mainFlying.json";
import mainSelfData from "assets/lottieJSON/mainSelf.json";
import mainShare from "assets/lottieJSON/mainShare.json";
import mainWorld from "assets/lottieJSON/mainWorld.json";
import OneLineContent from "components/Text/OneLineContent";
import BottomContent from "components/Main/BottomContent";
import Section from "components/Text/Section";
import { defaultFadeInUpVariants } from "constants/motion";
import { motion } from "framer-motion";
import Footer from "components/Footer";
import Nav from "components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <main css={wrapper}>
        <Section
          title="π£ μ²«κ±Έμ"
          summary="MZμΈλκ° μ£Όλͺ©νλ βμ²«κ±Έμβ β¦ λ¬Όκ±΄ λλμ΄ μλ κ²½ν λλ!"
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          viewport={{ once: false }}
          exit="exit"
          css={cardWrapper}
        >
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={mainFlyingData} />
          </div>
          <div css={contentWrapper}>
            <p css={title}>κ°λ³΄μ§ μμ κΈΈμ λλ €μνμ§ μμ΅λλ€.</p>
            <div css={summaryWrapper}>
              <OneLineContent summary="μ¬νμ λμ€λ λλ ΅κ³  λ§λ§ν΄, λ­λ₯Ό μ΄λ»κ² μμνλ©΄ μ’μκΉ?" />
              <OneLineContent
                summary="κ°λ³΄μ§ μμ κΈΈμ μ€ν¨μ μνμ΄ λ°λ₯΄μ§λ§ κ·Έμμ μ€λ κ²½νμ κ·Έ
              λ¬΄μλ³΄λ€ κ°μ§λλ€."
              />
              <OneLineContent
                highlight="βλλ €μμ΄ μλ ν¬λ§κ³Ό κΏμ μ‘°μΈμ κ΅¬νλΌβ"
                summary=" μ΄κ²μ΄ μ ν¬ μλΉμ€μ
              λͺ©μ μλλ€."
              />
              <OneLineContent
                summary="βμ²«κ±Έμβ μμ μμ μ΄ κ°μ§ λλ €μμ λ¨μΉκ³  μμ κ°κ³Ό μ¬νμΈμΌλ‘μμ
              κΈΈμ μ°Ύλ κ²μ μ§μ€ν©λλ€."
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          viewport={{ once: false }}
          exit="exit"
          css={cardWrapper}
        >
          <div css={contentWrapper}>
            <p css={title}>μ€μ€λ‘ μ£Όλμ μ΄μ΄μΌ ν©λλ€.</p>
            <div css={summaryWrapper}>
              <OneLineContent highlight="βλ¨λ€μ μ΄λ¬λ€λλ°, λλ κ·ΈλμΌ λλ κ±°κ² μ§?β" />
              <OneLineContent highlight=" βλ¨μ²λΌ λͺ»λλ©΄ μ΄λ‘νμ§?β" />
              <OneLineContent summary="βμ²«κ±Έμβμμ κ°μ₯ λ¨Όμ  μμμΌ νλ λ΄μ©μλλ€." />
              <OneLineContent summary="μ°λ¦¬μ μΆμ μ€μ€λ‘ λ§λ€μ΄λλλ€." />
              <OneLineContent summary="μΈμ μ λ°°μ κ²½νμ μ°Έκ³ ν  λΏ μΈμ λ μμ μ΄ μ€μ€λ‘ μκ°νκ³ , μ§λ¬Ένκ³ , μμ§μλλ€." />
            </div>
          </div>
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={mainSelfData} />
          </div>
        </motion.div>

        <div css={subcribeWrapper}>
          <span css={subcribeContent}>
            βμ²«κ±Έμβμ λ€μν μμμ κ΅¬λν΄λ³΄μΈμ!
          </span>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          viewport={{ once: false }}
          exit="exit"
          css={cardWrapper}
        >
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={mainShare} />
          </div>
          <div css={contentWrapper}>
            <p css={title}>λκ΅¬λ κ²½νμ κ³΅μ νκ³  λ°μ μ μμ΅λλ€.</p>
            <div css={summaryWrapper}>
              <OneLineContent highlight="βμ²«κ±Έμβμ λμ΄κ° νμ λ μλΉμ€κ° μλλλ€." />
              <OneLineContent summary="20μ΄ μ΄μμ΄λΌλ©΄ λκ΅¬λ κ³΅μ κ° κ°λ₯νλ©° κ³΅μ  λ°μ μλ μμ΅λλ€." />
              <OneLineContent summary="μμ λ‘­κ³  μ‘΄μ€λ°μΌλ©° μ¬λ¦¬μ μΌλ‘ νΈμν μλΉμ€κ° λλλ‘ λΈλ ₯νκ³  μμ΅λλ€." />
              <OneLineContent summary="λ€μν κ²½νμ΄ κ³΅μ‘΄νλ μλΉμ€λ₯Ό λ§λ€κ² μ΅λλ€." />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={defaultFadeInUpVariants}
          viewport={{ once: false }}
          exit="exit"
          css={cardWrapper}
        >
          <div css={contentWrapper}>
            <p css={title}>μΈμμ μ νκ² λ§λ€κ³ μ λΈλ ₯ν©λλ€.</p>
            <div css={summaryWrapper}>
              <OneLineContent highlight="βλΉλλμ μΈ μ΄μΌκΈ°λ₯Ό λ³΄κ² λλ κ±° μλ?β" />
              <OneLineContent summary="μ ν¬λ μ§μ  μ λ³ ν κ²μκΈμ΄ μ¬λΌκ°κ² λ©λλ€." />
              <OneLineContent summary="μ ν΄μ§ κΈ°μ€μ μ΄κΈλ  κ²½μ° κ²μκΈ μλ‘λκ° μ λλλ‘ κ΅¬μ±ν¨μΌλ‘μ¨ κΉ¨λνκ³  μ μ΅ν μλΉμ€κ° λλλ‘ ν©λλ€." />
              <OneLineContent summary="μ ν¬λ λͺ¨λμκ² μλ―Έμλ λμμ΄ λκΈ° μν΄ μ΅μ μ λ€ν©λλ€." />
              <OneLineContent summary="μλΉμ€ νλμλ κ·Έλ° μκ°κ³Ό λΈλ ₯λ€μ΄ λ΄κ²¨μμ΅λλ€. " />
            </div>
          </div>
          <div css={lottieWrapper}>
            <LottieWrapper lottieData={mainWorld} />
          </div>
        </motion.div>
        <div>
          <BottomContent />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;

const wrapper = css`
  margin: 2.5rem 0;
`;

const lottieWrapper = css`
  width: 100%;
  height: 100%;
  margin: 0.4rem 0rem;
`;

const cardWrapper = css`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 68rem;
  height: 29rem;
  margin: 4.5rem auto 0;
  border-radius: 15px;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 7%);
  text-align: left;
`;

const contentWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 3.5rem 6rem;
`;

const title = (theme: Theme) => css`
  font-weight: ${theme.fontWeight.bold};
  font-size: 2.5rem;
`;

const summaryWrapper = css`
  margin: 1.2rem 0;
`;

const subcribeWrapper = (theme: Theme) => css`
  position: relative;
  display: flex;
  align-items: center;
  height: 13rem;
  background-color: ${theme.color.grey100};
  margin: 4rem 0;
`;

const subcribeContent = (theme: Theme) => css`
  font-size: 2.3rem;
  padding: 0 3rem;
  font-weight: ${theme.fontWeight.bold};
`;
