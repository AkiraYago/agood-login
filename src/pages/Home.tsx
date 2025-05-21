import { useNavigate } from "react-router"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

const Home = () => {
  const navigate = useNavigate()
  const handleLogin = () => navigate("/login")
  const handleSignup = () => navigate("/signup")

  return (
    <div className="flex flex-col justify-center items-center h-dvh p-4 bg-background">
      <Card className="flex flex-col justify-between max-w-md w-full min-h-[30dvh]">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">AgooD Login</CardTitle>
          <CardDescription className="text-center text-gray-500">A simple login page</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="/login.jpg" alt="home-img" />
        </CardContent>
        <CardFooter className="grid md:grid-cols-2 gap-2">
          <Button onClick={handleLogin}>Log in</Button>
          <Button onClick={handleSignup} variant="outline">Sign up</Button>
        </CardFooter>
      </Card>
      <div className="flex flex-col md:flex-row items-center">
        <img width={200} src="/agoodev-logo.png" alt="logo" />
        <span>By AkiraYago</span>
      </div>
      {/* ADD CV, GITHUB, LINKEDIN, PORTFOLIO */}
    </div>
  )
}

export default Home