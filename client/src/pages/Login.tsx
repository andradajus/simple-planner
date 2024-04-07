import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginAPI } from "@/lib/api"
import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = e.currentTarget.username.value
        const password = e.currentTarget.password.value 
            try {
                const response = await LoginAPI(username, password);
                console.log(response.access)
                const token = response.access;
                Cookies.set("token", `Bearer ${token}`);
                navigate("/dashboard");
            } catch (error) {
                return Promise.reject(error);
            }
        }

  return (
    <>
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="text-balance text-muted-foreground">
                    Enter your username below to login to your account
                    </p>
                </div>

                <div className="grid gap-4">
                <form onSubmit={handleLogin}>
                    <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        required
                    />
                    </div>
                    <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                        href="/forgot-password"
                        className="ml-auto inline-block text-sm underline"
                        >
                        Forgot your password?
                        </a>
                    </div>
                    <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                    Login
                    </Button>
                </form>
                    <Button variant="outline" className="w-full">
                    Login with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="underline">
                    Sign up
                    </a>
                </div>
                </div>
            </div>
            <div className="hidden bg-muted lg:block">
                <img
                src="/placeholder.svg"
                alt="Image"
                width="1920"
                height="1080"
                className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    </>
  )
}

export default Login
