import Navbar from './components/Navbar'
import TravelCard from './components/TravelCard'
import cardData from './data/cardData'
import Footer from './components/Footer'

function App() {
  const reversedCardData = [...cardData].reverse();
  const cardElements = reversedCardData.map(card => <TravelCard key={card.id} entry={card} />)  
  return (
    <>
      <Navbar />
      <div className='flex flex-col gap-8 my-8 mx-4'>
        {cardElements}
      </div>
      <Footer />
    </>
  )
}

export default App
