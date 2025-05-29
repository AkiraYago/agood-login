import { useState } from "react"
import { Button } from "../components/ui/button"
import { Toggle } from "../components/ui/toggle"

const continents = [
  { name: "Africa", emoji: "🌍" },
  { name: "Europe", emoji: "🏛️" },
  { name: "North America", emoji: "🗽" },
  { name: "South America", emoji: "⛰️" },
  { name: "Asia", emoji: "🏯" },
  { name: "Oceania", emoji: "🐨" }
]

const Location = () => {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null)

  const handleContinentSelect = (continent: string) => {
    setSelectedContinent(prev => prev === continent ? null : continent)
  }
  
  return (
    <article className="flex flex-col gap-8">
      <h1>Select where are you come from</h1>
      <div className="flex justify-center items-center min-h-[400px]">
        <article className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
          {continents.map(continent =>
            <Button
              key={continent.name}
              name="country"
              variant="outline"
              onClick={() => handleContinentSelect(continent.name)}
              className={`${selectedContinent === continent.name && "bg-secondary"} p-6 md:p-8 text-lg md:text-2xl cursor-pointer hover:scale-90`}
            >
              {continent.name} {continent.emoji}
            </Button>
          )}
        </article>
      </div>
    </article>
  )
}

export default Location