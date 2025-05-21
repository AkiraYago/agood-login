import { useState } from "react"
import RoleCard from "../components/Signup/RoleCard"

const roles = [
  {
    id: "personal",
    title: "Personal",
    description: "An personal...",
    imgURL: "/personal.jpg"
  },
  {
    id: "student",
    title: "Student",
    description: "An student...",
    imgURL: "/student.jpg"
  },
  {
    id: "employee",
    title: "Employee",
    description: "An employee...",
    imgURL: "/employee.jpg"
  },
]

const Role = () => {
  const [selectedRole, setSelectedRole] = useState<string>()
  const handleRoleSelect = (id: string) => {
    setSelectedRole(id)
  }

  return (
    <article className="flex flex-col gap-4 md:gap-8">
      <h1>Select your Role</h1>
      <div className="grid md:grid-cols-3 gap-4 md:gap-8 h-full w-full">
        {roles.map(role =>
          <RoleCard
            key={`role-card-${role.id}`}
            id={role.id}
            title={role.title}
            description={role.description}
            imgURL={role.imgURL}
            isSelect={selectedRole === role.id}
            onSelect={() => handleRoleSelect(role.id)}
          />
        )}
      </div>
    </article>
  )
}

export default Role