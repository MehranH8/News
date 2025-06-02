import { Link } from "react-router-dom"

const Page404 = () => {


  return (
    <main class="grid min-h-full place-items-center -mt-16 bg-white px-6 py-24 sm:py-44 lg:px-8">
      <div class="text-center">
        <p className="text-[20px] sm:text-[24px] md:text-[28px] text-[#222222] font-bold">404</p>
        <h1 class=" mt-4 text-[16px] sm:text-[18px] md:text-[22px] font-semibold tracking-tight text-balance text-gray-900 ">صفحه مورد نظر پیدا نشد</h1>
        <p class="mt-6 text-[14px] md:text-[16px] font-medium text-pretty text-gray-500 ">متاسفانه صفحه مورد نظر شما پیدا نشد</p>
        <div class="mt-10 flex items-center justify-center gap-x-6 ">
          <Link to="/" className="rounded-md  bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">برگشت به خانه</Link>
        </div>
      </div>
    </main>
  )
}

export default Page404