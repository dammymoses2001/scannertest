import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function Index() {
  const [scanResult, setScanResult] = useState("");
  const [cameraPermission, setCameraPermission] = useState(true);

  const handleError = (error) => {
    console.error("Camera error:", error);
    setCameraPermission(false);
  };
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Barcode Scanner</h1>
        {cameraPermission ? (
          <BarcodeScannerComponent
            onUpdate={(err, result) => {
              if (result) setScanResult(result.text);
              if (err) console.error(err);
            }}
            onError={handleError}
            width={300}
            height={300}
          />
        ) : (
          <p>Camera access denied. Please allow camera permissions.</p>
        )}
        <p>Scanned Result: {scanResult || "No barcode detected yet."}</p>
      </div>
    </div>
  );
}
