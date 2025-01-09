export default function Footer() {
  return (
    <footer className=" max-w-[960px] mx-auto pb-12 pt-12">
      <div className="flex justify-between items-center">
        <p className="sm:text-lg">Cole Morgan</p>
        
          <a href="https://github.com/colemmorgan/dev-portfolio" target="_blank" className="text-xs sm:text-sm text-dull">
            Source Code
          </a>
        
      </div>
      <div className="pt-10 flex justify-between items-center">
        <p className="text-xs sm:text-sm text-dull">
          © {new Date().getFullYear()} Cole Morgan. All rights reserved.
        </p>

        <figure className="hidden sm:block">
          <img src="/favicon.png" alt=""  className="h-9 w-9"/>
        </figure>
      </div>
    </footer>
  );
}
