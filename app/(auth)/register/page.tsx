import Link from "next/link"

const Register =()=>{
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex rounded-xl w-full max-w-sm mx-auto flex-col items-center justify-center px-6 py-12 lg:px-8 shadow-md bg-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                      Register your account
                    </h2>
                </div>
                <div className="mt-10 mx-auto w-full max-w-sm">
                    <form className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" type="email" className="form-input"/>
                            </div>
                        </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900"> Password</label>
                            <div className="text-sm">
                              <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                              </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" className="form-input"/>
                        </div>
                    </div>
                    <div className="relative w-full max-w-sm">
                        <select className="form-input">
                            <option>Patient</option>
                            <option>Doctor</option>
                        </select>
                    </div>
    
                    <div>
                        <button type="submit" className="btn" >
                           Login 
                        </button>
                    </div>
                    
                    </form>
                  <p className="mt-10 text-center text-sm/6 text-gray-500"> New to here?{' '}
                    <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Register Here
                    </Link>
                  </p>
                </div>
            </div>      
        </div>
    )
}
export default Register