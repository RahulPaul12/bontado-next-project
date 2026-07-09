'use client'
import { useForm } from "react-hook-form"
import { loginInput, loginSchema } from "@/lib/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const Login = () => {
    const {register, handleSubmit,formState: { errors, isSubmitting },} = useForm<loginInput>({resolver: zodResolver(loginSchema),});
    const router = useRouter()
    const onSubmit = async (data: loginInput) => {
       router.push('/admin/dashboard')
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex rounded-xl w-full max-w-2xl mx-auto flex-col items-center justify-center p-6 lg:p-8 shadow-md bg-white">
                  <div className="flex min-h-full flex-col justify-center w-full">
                      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight ">Sign in to your account</h2>
                      <div className="mt-10">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                          <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium ">
                              Email address
                            </label>
                            <div className="mt-2">
                              <input
                                id="email"
                                placeholder="email"
                                type="email"
                                required
                                autoComplete="email"
                                {...register("email")}
                                className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white border outline-none border-gray-200 sm:text-sm/6"/>
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center justify-between">
                              <label htmlFor="password" className="block text-sm/6 font-medium ">
                                Password
                              </label>
                              <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                                  Forgot password?
                                </a>
                              </div>
                            </div>
                            <div className="mt-2">
                              <input
                                id="password"
                                placeholder="password"
                                type="password"
                                required
                                {...register("password")}
                                className="block w-full rounded-md px-3 py-2 text-base border outline-none border-gray-200 sm:text-sm/6"
                              />
                              {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                          </div>
                          <div>
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                             {isSubmitting ? 'Signing in...' : 'Sign in'}
                            </button>
                          </div>
                        </form>
                      </div>
                  </div>
            </div>      
        </div>
    )
}
export default Login