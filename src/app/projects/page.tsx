'use client';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <main className="page-projects">
      <h1>制作実績</h1>

      <section className="project">
        <h2>買取アプリ（Next.js + NestJS）</h2>
        <p>*掲載している車両は私の個人所有物です。</p>

        {/* すでに CSS で設定されているクラスを使用 */}
        <div className="project-images">
          <Image
            src="/images/buy-app-admin.png"
            alt="管理者画面"
            width={600}
            height={340}
            style={{ height: 'auto', maxWidth: '100%' }}
          />
          <Image
            src="/images/buy-app-customer.png"
            alt="お客様画面"
            width={600}
            height={340}
            style={{ height: 'auto', maxWidth: '100%' }}
          />
        </div>

        <ul>
          <li>Next.js + NestJS + Prisma + PostgreSQL(Neon)で構築</li>
          <li>車両管理、オファー管理、成約処理などを行うWebアプリケーション</li>
          <li>お客様は車両を閲覧し、購入スタイル別にオファー金額を入力可能</li>
          <li>管理者は登録されたオファーを確認し、最も高い金額で成約可能</li>
        </ul>

        <p>
          <strong>管理者ログイン画面：</strong>{' '}
          <a
            href="https://offer-cars-demo.vercel.app/admin/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://offer-cars-demo.vercel.app/admin/login
          </a>
        </p>
        <p>ログインに必要な情報</p>
        <p>メールアドレス： admin@example.com</p>
        <p>社員番号： 505</p>
        <p>パスワード： Admin3545</p>
        <p>
          <strong>お客様ログイン画面：</strong>{' '}
          <a
            href="https://offer-cars-demo.vercel.app/customer/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://offer-cars-demo.vercel.app/customer/login
          </a>
        </p>
        <p>ログインに必要な情報</p>
        <p>メールアドレス： test@test.com</p>
        <p>スリーレター： ART</p>
        <p>パスワード： Test1111</p>
      </section>

      <section className="project">
  <h2>GASによる入札システム</h2>

  <div className="project-images">
    <Image
      src="/images/gas-web.png"
      alt="GAS 入札Web画面"
      width={600}
      height={340}
      style={{ height: 'auto', maxWidth: '100%' }}
    />
    <Image
      src="/images/gas-sheet.png"
      alt="GAS スプレッドシート画面"
      width={600}
      height={340}
      style={{ height: 'auto', maxWidth: '100%' }}
    />
  </div>

  <ul>
    <li>Google Apps Script（GAS）とGoogleスプレッドシートを活用した入札システム</li>
    <li>120種類のパーツに対して、お客様が複数入札を送信可能</li>
    <li>入札結果はスプレッドシートに即時反映され、管理者は出品番号で絞り込み可能</li>
    <li>一番高い入札者を選定し、簡単に販売処理ができる</li>
  </ul>

  <p>
    <strong>WEBアプリURL：</strong>{' '}
    <a
      href="https://script.google.com/macros/s/AKfycbwynK0ofXn6aut3HNSXzRKkvDAia7EwGj1TomTUFOk00nagfBdWNr4tOkcuOjWmgWKsCg/exec"
      target="_blank"
      rel="noopener noreferrer"
    >
      https://script.google.com/macros/.../exec
    </a>
  </p>
</section>
    </main>
  );
}