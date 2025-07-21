'use client';

import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [showCareer, setShowCareer] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showStrengths, setShowStrengths] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCareer(true), 500); // 0.5秒後に経歴表示
    const t2 = setTimeout(() => setShowSkills(true), 1500); // 1.5秒後にスキル表示
    const t3 = setTimeout(() => setShowStrengths(true), 2500); // 2.5秒後に強み表示

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <>
      <main className="page-about">
        <h1>佐藤 新の経歴とスキル</h1>

        {showCareer && (
          <section className="fade-in">
            <h2>経歴</h2>
            <p>東北公益文科大学を卒業。在学中はロシアのイルクーツク国立大学へ10ヶ月間留学し、語学力と異文化理解を深めました。</p>
            <p>2018年4月、株式会社シマ商会に入社。海外販売事業部に所属し、自動車リサイクル部品の営業として、主に海外顧客対応を担当しています。</p>
            <p>現場での課題を解決するために独学でプログラミングを学び、業務効率化のためのWebアプリケーションを複数開発・運用しています。</p>
          </section>
        )}

        {showSkills && (
          <section className="fade-in">
            <h2>スキルセット</h2>
            <ul>
              <li>語学：英語 / ロシア語</li>
              <li>言語：TypeScript / JavaScript / C# / Google Apps Script</li>
              <li>フレームワーク：Next.js / React / NestJS / Unity</li>
              <li>データベース：Prisma / PostgreSQL / Neon</li>
              <li>インフラ：AWS S3 / Vercel / Render</li>
              <li>その他：ChatGPT（業務アイデア支援に活用）</li>
              <li>設計：UI設計 / 要件定義 / 詳細設計 / データベース設計 / 業務改善提案</li>
            </ul>
          </section>
        )}

        {showStrengths && (
          <section className="fade-in">
            <h2>強み・特徴</h2>
            <p>現場で実際に感じた課題をもとに、業務に直結する実用的なシステムを企画・開発できる点が私の強みです。</p>
            <p>営業として培ったヒアリング力と課題発見力により、ユーザーの立場で考える提案が得意です。</p>
            <p>また、趣味でUnityとC#を使ったゲーム開発にも取り組んでおり、論理的思考と継続的な学習を楽しみながら磨いています。</p>
          </section>
        )}
      </main>
    </>
  );
}