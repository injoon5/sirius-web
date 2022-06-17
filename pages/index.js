import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-5">
      <Head>
        <title>Sirius - 학교 정보를 한눈에. </title>
      </Head>

      <main>
        <div className="py-10">
          <h1 className="text-5xl font-bold">Sirius</h1>
          <h2 className="text-3xl text-gray-700 font-medium">
            학교 정보를 한눈에.
          </h2>
        </div>

        <div className="m-6 p-3 flex items-center justify-center space-x-4 text-left absolute right-0 top-0 border border-gray-200 rounded-lg bg-gray-100">
          <img
            src="https://ghavatars.staticblitz.com/injoon5.png?size=160"
            alt=""
            class="w-14 h-14 rounded-full"
            loading="lazy"
          />
          <div>
            <h1 className="text-2xl font-bold">오인준</h1>
            <h1 className="text-xl font-semibold text-gray-600">
              이대부속초등학교
            </h1>
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" passHref>
              <a className="pointer-events-auto font-medium pr-2">설정</a>
            </Link>
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" passHref>
              <a className="pointer-events-auto font-medium">로그아웃</a>
            </Link>
          </div>
        </div>
        <div class="grid grid-cols-3 grid-rows-3 gap-4 text-gray-800 text-sm font-bold leading-6 rounded-lg text-left">
          <div class="p-4 bg-gray-200 rounded-lg">01</div>
          <div class="p-4 bg-gray-200 rounded-lg">02</div>
          <div class="p-4 bg-gray-200 rounded-lg">03</div>
          <div class="p-4 bg-gray-200 rounded-lg">04</div>
          <div class="p-4 bg-gray-200 rounded-lg">05</div>
          <div class="p-4 bg-gray-200 rounded-lg">06</div>
          <div class="p-4 bg-gray-200 rounded-lg">07</div>
          <div class="p-4 bg-gray-200 rounded-lg">08</div>
          <div class="p-4 bg-gray-200 rounded-lg">09</div>
        </div>
      </main>
    </div>
  );
}
