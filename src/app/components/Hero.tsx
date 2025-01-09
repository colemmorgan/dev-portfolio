export default function Hero() {
  return (
    <div
      className="max-w-[960px] mx-auto pt-28 md:pt-32 lg:pt-16 pb-16 border-b border-gray-200"
      id="home"
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-normal lg:leading-[1.32]">
        <h1 className="inline text-black">
          Hi! I&apos;m Cole Morgan, a frontend-focused full-stack web developer @ the
          University of Florida.
        </h1>
        <h2 className="inline text-dull">
          {" "}
          I specialize in enhancing user experience through animation, 3D
          graphics, and attention to detail.
        </h2>
      </div>
      <a
        href="mailto:colemmorgann@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm sm:text-base mt-8 bg-gray-100 border border-gray-300 rounded-full py-2.5 px-8 inline-block font-medium shadow-sm cursor-pointer hover:shadow-md transition-all"
      >
        Let&apos;s get in touch!{" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block ml-2"
        >
          <g clipPath="url(#clip0_8_133)">
            <path
              d="M14.3225 15.9842L20 3.96249L0 10.3217L7.66333 11.9575L7.69917 16.0375L9.99833 13.8567L8.20917 12.1267L14.3225 15.9842Z"
              fill="#242424"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_133">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  );
}