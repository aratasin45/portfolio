'use client';

import { JSX, useEffect, useState } from 'react';


const lines: JSX.Element[] = [
  <h1 key="1">ようこそ、佐藤新のポートフォリオへ</h1>,
  <p key="2">2025年6月2日で30歳を迎えました。</p>,
  <p key="3">現在は自動車リサイクル業の営業職として働いており、外国語を活用しながらお客様へ自動車エンジンやボディパーツを販売しています。</p>,
  <p key="4">入社3年目には若手社員表彰で1位を獲得しましたが、私が担当していた乗用車ビジネスは工場に120人が関わる部門であり、個人の実績だけでは会社全体の利益に貢献できないというジレンマがありました。</p>,
  <p key="5">そんな中、経常利益1億円を目指す乗用車プロジェクトのメンバーに選ばれたことが、私のキャリアの転機となりました。</p>,
  <p key="6">最初はスプレッドシートの関数でパーツ振り分け表を作成していましたが、処理速度が遅く、月末には固まってしまう問題が発生しました。</p>,
  <p key="7">この課題を解決するために、Google Apps Script（GAS）を使って独学でプログラミングを学び、パーツ入札システムを開発・導入しました。</p>,
  <p key="8">現在もこのGAS製アプリは運用されており、分析機能や業務効率の向上に貢献しています。</p>,
  <p key="9">さらに、仕入れ効率の改善のため、TypeScriptとNext.jsを使ってWebアプリケーションを自ら設計・開発しました。</p>,
  <p key="10">このアプリでは要件定義から開発、保守運用まで一人で担当し、実務に活かされています。</p>,
  <p key="11">ITの力で業務改善ができる実感を得たことをきっかけに、転職を意識するようになりました。</p>,
  <p key="12">今後はIT業界で、自分のスキルをさらに磨き、お客様に喜んでもらえるサービスを提供していきたいと考えています。</p>,
];

export default function HomePage() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < lines.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 1000); // 0.6秒ごとに1行表示

      return () => clearTimeout(timer); // クリーンアップ
    }
  }, [visibleCount]);

  return (
    <>
      
      <main className="page-home">
        {lines.slice(0, visibleCount)}
      </main>
      
      
    </>
  );
}