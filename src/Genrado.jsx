import { QRCodeSVG } from 'qrcode.react';
import React from 'react';

const Genrado = ({ couponCode }) => {
  return (
    <div className='cpnyeqrcupon'   >
      <QRCodeSVG value={couponCode} size={156}  color={'red'} />
      <h2   >Muestra  QR en moritas para validar el cupón</h2>
    </div>
  );
};

export default Genrado;
