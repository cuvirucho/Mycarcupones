
import './App.css';
import Genrado from './Genrado';


function App() {
   // Array con los cupones (puedes obtener esto desde una base de datos o archivo)
   const cupones = [
    { id: 1, code: 'CUPO1', description: '10% de descuento' ,img: 'https://res.cloudinary.com/db8e98ggo/image/upload/v1735948412/PROSESANDO_4_rdguoq.gif'},
    { id: 2, code: 'CUPO2', description: '3x2 en desayunos',img: 'https://res.cloudinary.com/db8e98ggo/image/upload/v1735996017/PROSESANDO_11_tdu7dl.gif' },
    { id: 3, code: 'CUPO3', description: 'Cafe gratis con cualquier tigrillo' ,img: 'https://res.cloudinary.com/db8e98ggo/image/upload/v1735995406/PROSESANDO_10_gcxtaz.gif'},
    { id: 3, code: 'CUPO3', description: 'Por compras mayoreas a $10 reciben un regalo' ,img: 'https://res.cloudinary.com/db8e98ggo/image/upload/v1735949983/PROSESANDO_9_oaatim.gif'},
    { id: 3, code: 'CUPO3', description: 'En pareja el segudo capuchino es a 0.5ctvs' ,img: 'https://res.cloudinary.com/db8e98ggo/image/upload/v1735948964/PROSESANDO_5_dtun5r.gif'},
  ];




  return (
   
   
   
   <>
  <section  className='conytefuññ'  >


   <section  className='conteniing'  >

 
   </section>
  
   <h2  className='tilecupo'    >Cuponera valida unicamente para los alumnos de<strong> MAYKAR </strong>  </h2>







 
   <div className='contecupo'>
  {cupones.map((cupón) => (
    <div key={cupón.id}>

<img src={cupón.img} />
      <h3 className='contedecupn'    >{cupón.description}</h3>
      <Genrado couponCode={cupón.code} />
    </div>
  ))}
</div>

  

  </section>
  
  </>
   
  );
};


export default App
