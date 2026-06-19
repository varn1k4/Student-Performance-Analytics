import * as XLSX from "xlsx";

function ImportExcel() {

  const importFile = (e) => {
    const file =
      e.target.files[0];

    const reader =
      new FileReader();

    reader.onload = (evt) => {

      const workbook =
        XLSX.read(
          evt.target.result,
          { type: "binary" }
        );

      const sheet =
        workbook.Sheets[
          workbook.SheetNames[0]
        ];

      const data =
        XLSX.utils.sheet_to_json(
          sheet
        );

      localStorage.setItem(
        "students",
        JSON.stringify(data)
      );

      alert(
        "Excel Imported Successfully"
      );
    };

    reader.readAsBinaryString(
      file
    );
  };

  return (
    <div>

      <h1>Import Excel</h1>

      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={importFile}
      />

    </div>
  );
}

export default ImportExcel;