import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import BackHome from "../components/_commons/BackHome"

const Login = () => {

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-dvh p-4 bg-background">
      <header>
        <BackHome />
      </header>
      <main className="flex justify-center items-center">
        <Card className="min-w-xs max-w-md">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>Description...</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Label htmlFor="email-login">Email</Label>
            <Input id="email-login" type="email" placeholder="example@gmail.com" />
            <Label htmlFor="password-login">Password</Label>
            <Input id="password-login" type="password" placeholder="********" />
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button className="w-full">Enter</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

export default Login