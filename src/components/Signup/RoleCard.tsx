import { type Role } from "../../types"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card"

interface Props extends Role {
  isSelect: boolean
  onSelect: () => void
}

const RoleCard: React.FC<Props> = ({ id, title, description, imgURL, isSelect, onSelect }) => {
  return (
    <Card
      onClick={onSelect}
      className={`flex flex-row w-full p-0 border-4 border-secondary/0 bg-white gap-4 md:px-4 md:py-8 md:flex-col md:items-center md:text-center md:justify-center md:gap-0 hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 ease-in-out ${isSelect && "border-secondary/100"}`}
    >
      <CardContent className="w-fit p-2 md:p-8 md:flex-1 flex items-center">
        <img className="object-cover max-w-24 md:max-w-full" src={imgURL} alt={id} />
      </CardContent>
      <CardFooter className="p-0">
        <div className="flex flex-col">
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardFooter>
    </Card>
  )
}

export default RoleCard