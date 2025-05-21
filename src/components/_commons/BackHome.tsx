import { Undo2 } from "lucide-react"
import { Button } from "../ui/button"
import { useNavigate } from "react-router"

const BackHome = () => {
  const navigate = useNavigate()
  const handleBackHome = () => navigate("/")

  return (
    <Button onClick={handleBackHome} variant="outline">
      Back to Home
      <Undo2 />
    </Button>
  )
}

export default BackHome