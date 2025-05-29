import { Outlet, useNavigate } from "react-router"
import { Button } from "../components/ui/button"
import BackHome from "../components/_commons/BackHome"

const Signup = () => {
  const navigate = useNavigate()
  const handleSkip = () => navigate("/signup/interests")

  return (
    <article className="grid grid-rows-[auto_1fr] gap-8 h-dvh p-4">
      <header>
        <BackHome />
      </header>
      <article className="flex flex-col gap-4 md:gap-8 w-full max-w-5xl justify-self-center justify-center overflow-hidden h-full">
          <section className="overflow-hidden">
            <Outlet />
          </section>
          <section className="flex justify-end bg-yellow-300/0">
            <Button variant="outline" onClick={handleSkip}>
              Skip
            </Button>
          </section>
        </article>
    </article>
  )
}

export default Signup