import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecipeContainer from "./components/RecipeContainer";

function App() {
  return (
    <div  className="bg-slate-100">
      <Navbar></Navbar>
      <Hero></Hero>
      <RecipeContainer></RecipeContainer>
    </div>
  )
}

export default App
