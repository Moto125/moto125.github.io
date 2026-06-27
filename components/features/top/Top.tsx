import MyInfo from "./components/MyInfo";

export default function Top() {
  return (
    <div className="flex items-end justify-between w-full h-[300] bg-white dark:bg-neutral-900">
      <MyInfo />
    </div>
  );
}
