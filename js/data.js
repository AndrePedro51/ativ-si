var ExcelToJSON = function () {
  this.parseExcel = function (file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: "binary",
      });

      workbook.SheetNames.forEach(function (sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(
          workbook.Sheets[sheetName]
        );
        console.log('antes de virar JSON', XL_row_object)
        var json_object = JSON.stringify(XL_row_object);
        console.log(json_object);
        console.log(typeof(json_object))
        let teste = JSON.parse(json_object)
        console.log(teste[0]["1. Qual o seu curso?"])
      });
    };

    reader.onerror = function (ex) {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
    console.log(file)
  };
};

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var xl2json = new ExcelToJSON();
  xl2json.parseExcel(files[0]);
  console.log("evento", files[0])
}

document.getElementById("inputFile").addEventListener("change", handleFileSelect, false);