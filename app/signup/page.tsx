import SignUpForm from "@/components/auth/SignUpForm";
import Logo from "@/components/logo";

const SignUp = () => {
    return ( <div className="flex w-full  items-center h-full pt-12">
    <img src="/hero_img.jpg" className="max-w-[50%]" alt="" />
    <div className="flex flex-col gap-12w w-[50%]  h-full justify-center items-center">
      <div className="max-w-[8rem]">
        <Logo />
      </div>
      {/* <form
        action={authenticate}
        className="flex flex-col gap-4 w-[24rem] items-center py-4 px-2  "
      >
        <input
          className="outline-0 border text-sm py-1 px-2 rounded focus:outline-0 blur:outline-0 focus:border-brand-primary blur:border-brand-primary"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="border focus:outline-0 blur:outline-0 text-sm py-1 px-2 rounded focus:border-brand-primary blur:border-brand-primary"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button
          className="bg-brand-primary text-sm py-2  rounded w-[30%] text-white hover:"
          type="submit"
        >
          Login
        </button>
      </form> */}
      <SignUpForm/>
    </div>
  </div> );
}
 
export default SignUp;