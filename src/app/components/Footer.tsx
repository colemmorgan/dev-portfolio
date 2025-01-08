export default function Footer() {
  return (
    <footer className=" max-w-[960px] mx-auto pb-12 pt-12">
      <div className="flex justify-between items-center">
        <p className="text-lg">Cole Morgan</p>
        <div className="flex gap-5 text-sm">
          <a href="" className="link__hover-effect">
            Home
          </a>
          <a href="" className="link__hover-effect">
            Projects
          </a>
          <a href="" className="link__hover-effect">
            Experience
          </a>
          <a href="" className="link__hover-effect">
            Source Code
          </a>
        </div>
      </div>
      <div className="pt-10 flex justify-between items-center">
        <p className="text-sm text-[#707070]">
          © {new Date().getFullYear()} Cole Morgan. All rights reserved.
        </p>

        <figure>
          <img src="/favicon.png" alt=""  className="h-9 w-9"/>
        </figure>
      </div>
    </footer>
  );
}
