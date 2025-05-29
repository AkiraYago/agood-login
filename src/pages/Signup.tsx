import { Outlet, useLocation, useNavigate } from "react-router"
import { Button } from "../components/ui/button"
import BackHome from "../components/_commons/BackHome"

const navigationFlow = [
  { id: "", path: "/signup" },
  { id: "interests", path: "/signup/interests" },
  { id: "location", path: "/signup/location" },
  { id: "profile", path: "/signup/profile" },
]

const Signup = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // Encuentra el índice actual en el flujo
  const currentIndex = navigationFlow.findIndex(item => pathname === item.path)

  const handleSkip = () => {
    const next = navigationFlow[currentIndex + 1]
    if (next) navigate(next.path)
  }

  const handleBack = () => {
    const prev = navigationFlow[currentIndex - 1]
    if (prev) navigate(prev.path)
  }

  return (
    <article className="grid grid-rows-[auto_1fr] gap-8 h-dvh p-4">
      <header>
        <BackHome />
      </header>
      <article className="flex flex-col gap-4 md:gap-8 w-full max-w-5xl justify-self-center justify-start md:justify-center overflow-hidden">
        <section className="overflow-hidden">
          <Outlet />
        </section>
        <section className="flex justify-end gap-4">
          {currentIndex > 0 &&
            <Button className="min-w-[100px]" onClick={handleBack}>
              Back
            </Button>
          }
          <Button className="min-w-[100px]" variant="outline" onClick={handleSkip}>
            Skip
          </Button>
        </section>
      </article>
    </article>
  )
}

export default Signup