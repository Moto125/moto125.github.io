import Title from '@/app/components/common/Title';

export default function Profile() {
  return (
    <div className="flex flex-col items-start justify-between w-2/3 gap-6">
      <Title title="PROFILE" />
      <div>
        <p>フロントエンドエンジニアとして働いています。</p>
        <p>
          業務ではVue.js,
          Reactを用いたWebアプリやReactNativeを用いたモバイルアプリケーションの設計からテストまでを担当しています。
        </p>
        <p>1歳児の子育てをしながら、日々奮闘中です。</p>
      </div>
    </div>
  );
}
