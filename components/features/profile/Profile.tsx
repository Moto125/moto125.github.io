import Title from "@/components/common/Title";

export default function Profile() {
  return (
    <div className="flex flex-col items-start justify-between w-2/3">
      <Title title="PROFILE" />
      <p>フロントエンドエンジニアとして働いています。</p>
      <p>
        業務ではVue.js, Reactを用いたWebアプリやReactNativeを用いたモバイルアプリケーションの設計からテストまでを担当しています。
      </p>
      <p>
        0歳児の子育てをしながら、日々奮闘中です。
      </p>
    </div>
  );
}
