import { saveAs } from "file-saver";
import { Workbook, Worksheet } from "exceljs";

const buildWorkbook = (data: number[]) => {
  const workbook = new Workbook();
  const sheet: Worksheet = workbook.addWorksheet("Export");
  // manipulate your spreadsheet here
  sheet.getRow(1).values = data;

  return workbook;
};

const generateExport = (fileName: string, data: number[]): void => {
  try {
    const workbook = buildWorkbook(data);

    // write spreadsheet to excel format
    workbook.xlsx.writeBuffer().then((buffer: BlobPart) => {
      const blob = new Blob([buffer], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      saveAs(blob, `${fileName}.xlsx`);
    });
  } catch (err) {
    console.log(err, "Error occured while creating export");
  }
};

export default generateExport;
