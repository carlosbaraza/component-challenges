import Head from "next/head";
import React, { FC } from "react";
import { getChallenge } from "../../lib/challenges";
import markdownToHtml from "../../lib/markdownToHtml";

export async function getStaticProps() {
  const challenge = await markdownToHtml(getChallenge("component-challenge-1"));
  return {
    props: {
      challenge,
    },
  };
}

type Props = {
  challenge: string;
};

export const Challenge1: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Component Challenge #1</title>
      </Head>

      <div className="Challenge1">
        <h1>Challenge 1</h1>

        <div className="markdown" dangerouslySetInnerHTML={{ __html: props.challenge }} />
      </div>

      <style jsx>{`
        .Challenge1 {
        }
      `}</style>
    </>
  );
};

export default Challenge1;
