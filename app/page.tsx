import Scroll from "@/components/common/Scroll";
import Links from "@/components/features/links/Links";
import Profile from "@/components/features/profile/Profile";
import Top from "@/components/features/top/Top";
import Works from "@/components/features/works/Works";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-100 dark:bg-neutral-800 font-sans">
      <main className="flex flex-col flex-1 w-full max-w-3xl items-center justify-between bg-white dark:bg-neutral-900">
        {/* トップ */}
        <Top />
        <Scroll />
        {/* プロフィール */}
        <Profile />
        <Scroll />
        {/* 開発したもの */}
        <Works />
        <Scroll />
        {/* リンク */}
        <Links />
        <p className="py-16 text-main">Thank you for visiting my portfolio!</p>
      </main>
    </div>
  );
}
