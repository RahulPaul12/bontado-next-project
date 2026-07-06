export default function AuthLayout ({children}: {children: React.ReactNode}){
    return (
        <div className="bg-gray-300">
            {children}
        </div>
    )
}