
export default function Card({name,species,gender,image,onClose}) {
   return (
      <>
      <div>
         <button onClick={onClose}>X</button>
         <h2>name: {name}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <img  src={image} alt="" />
      </div>
      </>
   );
   
}
