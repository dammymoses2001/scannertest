import Barcode from 'react-barcode';

const BarcodeGenerator = () => {
  const barcodeValue = "123456789012"; // Replace with your value

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Barcode Generator</h1>
      <Barcode value={barcodeValue} />
      <p>Scan this barcode: {barcodeValue}</p>
    </div>
  );
};

export default BarcodeGenerator;