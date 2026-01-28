import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureField = () => {
  const sigRef = useRef(null);

  const clearSignature = () => {
    sigRef.current.clear();
  };

  return (
    <div >
      {/* Label */}
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Company Representative Signature
      </label>

      {/* Signature Box */}
      <div className="border border-blue-300 rounded-md p-3">
        <SignatureCanvas
          ref={sigRef}
          penColor="black"
          canvasProps={{
            width: 300,
            height: 80,
            className: "w-full bg-white rounded-md",
          }}
        />

        {/* Footer */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400 text-left">
            Powered by <span className="text-green-600 font-medium">Jotform Sign</span>
          </span>

          
        </div>
      </div>
      <div className="mt-2 flex justify-end">
      <button
            type="button"
            onClick={clearSignature}
            className="text-xs px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 items-left"
          >
            Clear
          </button>
          </div>
    </div>
  );
};

export default SignatureField;
