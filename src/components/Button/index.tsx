import React from "react";
import "./index.css";
import generateExport from "../../helpers/export";

type TProps = {
  label: string;
  exportData: number[];
};

const Button: React.FC<TProps> = ({ label, exportData }) => {
  return (
    <button
      className="export-btn"
      onClick={() => generateExport("filename", exportData)}
      id="export-btn"
    >
      {label}
    </button>
  );
};

export default Button;
