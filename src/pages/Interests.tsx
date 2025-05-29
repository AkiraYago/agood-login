import { Toggle } from "../components/ui/toggle"

const interests = [
  { id: 1, name: "Reading" },
  { id: 2, name: "Hiking" },
  { id: 3, name: "Cooking" },
  { id: 4, name: "Photography" },
  { id: 5, name: "Painting" },
  { id: 6, name: "Gaming" },
  { id: 7, name: "Traveling" },
  { id: 8, name: "Gardening" },
  { id: 9, name: "Yoga" },
  { id: 10, name: "Writing" },
  { id: 11, name: "Cycling" },
  { id: 12, name: "Swimming" },
  { id: 13, name: "Dancing" },
  { id: 14, name: "Volunteering" },
  { id: 15, name: "Learning Languages" },
  { id: 16, name: "Knitting" },
  { id: 17, name: "Watching Movies" },
  { id: 18, name: "Playing Instruments" },
  { id: 19, name: "Astrology" },
  { id: 20, name: "Birdwatching" },
  { id: 21, name: "Camping" },
  { id: 22, name: "Chess" },
  { id: 23, name: "Collecting" },
  { id: 24, name: "Drawing" },
  { id: 25, name: "DIY Projects" },
  { id: 26, name: "Fishing" },
  { id: 27, name: "Genealogy" },
  { id: 28, name: "Homebrewing" },
  { id: 29, name: "Jewelry Making" },
  { id: 30, name: "Jigsaw Puzzles" },
  { id: 31, name: "Karaoke" },
  { id: 32, name: "Meditation" },
  { id: 33, name: "Model Building" },
  { id: 34, name: "Origami" },
  { id: 35, name: "Podcasting" },
  { id: 36, name: "Pottery" },
  { id: 37, name: "Running" },
  { id: 38, name: "Sculpting" },
  { id: 39, name: "Sewing" },
  { id: 40, name: "Skateboarding" },
  { id: 41, name: "Skiing" },
  { id: 42, name: "Stargazing" },
  { id: 43, name: "Surfing" },
  { id: 44, name: "Table Tennis" },
  { id: 45, name: "Tea Tasting" },
  { id: 46, name: "Upcycling" },
  { id: 47, name: "Video Editing" },
  { id: 48, name: "Wine Tasting" },
  { id: 49, name: "Woodworking" },
  { id: 50, name: "Zumba" }
]

const Interests = () => {
  return (
    <article className="flex flex-col justify-center gap-4 md:gap-8 h-full">
      <h1>Select your interests</h1>
      <div className="flex flex-wrap gap-2 md:gap-4 overflow-auto max-h-2/3 md:max-h-full">
        {interests.map(interest =>
          <Toggle key={`interest-${interest.id}`} className="hover:cursor-pointer hover:scale-90 transition-all duration-300 ease-in-out" variant="outline" size="lg">
            {interest.name}
          </Toggle>
        )}
      </div>
    </article>
  )
}

export default Interests