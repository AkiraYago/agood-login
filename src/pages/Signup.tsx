import { Outlet, useNavigate } from "react-router"
import { Button } from "../components/ui/button"
import BackHome from "../components/_commons/BackHome"

const Signup = () => {
  const navigate = useNavigate()
  const handleSkip = () => navigate("/signup/interests")

  return (
    <article className="grid grid-rows-[auto_1fr] min-h-dvh p-4 bg-background">
      <header>
        <BackHome />
      </header>
      <main className="flex justify-center">
        <article className="flex flex-col justify-center gap-4 md:gap-8 w-full max-w-5xl">
          <section>
            <Outlet />
          </section>
          <section className="flex justify-end">
            <Button variant="outline" onClick={handleSkip}>
              Skip
            </Button>
          </section>
        </article>
      </main>
    </article>
  )
}

export default Signup