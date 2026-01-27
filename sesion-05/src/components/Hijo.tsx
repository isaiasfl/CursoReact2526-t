import Nieto from './Nieto'

const Hijo = () => {
  return (
     <div className="p-4 mx-w-3xl mx-auto">
      <div className="border-4 border-yellow-500 rounded-lg p-4 bg-yellow-50">
      <h4>Soy el Hijo</h4>
      <Nieto/>
      </div>
    </div>
  )
}

export default Hijo