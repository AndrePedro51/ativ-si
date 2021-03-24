// Declaração de variáveis
let curso = [],
  periodo = [],
  ra = [],
  estado = [],
  cidade = [],
  genero = [],
  data_nasc = [],
  estado_civil = [],
  port_necessidade = [],
  conv_deficiente = [],
  qtd_filhos = [],
  mora_atualmente = [],
  qtd_moradores = [],
  sit_domicilio = [],
  tempo_moradia = [],
  faixa_renda = [],
  qtd_geladeira = [],
  qtd_celular = [],
  qtd_microondas = [],
  qtd_notebooks = [],
  qtd_lavadoura = [],
  qtd_moto = [],
  qtd_automoveis = [],
  qtd_dvd = [],
  qtd_televisor = [],
  qtd_smartphone = [],
  trabalha = [],
  vinc_emprego = [],
  area_emprego = [],
  horario_trabalho = [],
  possui_plano = [],
  escolaridade_pai = [],
  escolaridade_mae = [],
  tipo_escola = [],
  freq_comp = [],
  util_comp = [],
  finalidade_comp = [],
  conhecimento_info = [],
  conhecimento_windows = [],
  conhecimento_linux = [],
  conhecimento_editores = [],
  conhecimento_planilhas = [],
  conhecimento_apresentadores = [],
  conhecimento_erp = [],
  conhecimento_ingles = [],
  conhecimento_espanhol = [],
  conhecimento_outroIdioma = [],
  info_tv = [],
  info_internet = [],
  info_revistas = [],
  info_jornais = [],
  info_radio = [],
  info_redesSociais = [],
  info_conversas = [],
  freq_leituraJornal = [],
  assunto_jornal = [],
  media_livrosPorAno = [],
  genero_livro = [],
  ativ_voluntaria = [],
  religiao = [],
  entretenimento_cultural = [],
  conhecimento_fatec = [],
  motivo_escolhaCurso = [],
  expectativa_curso = [],
  expectativa_posFormatura = [],
  estudouNaEscolaAntes = [],
  fez_tecnico = [],
  meio_transporte = []

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
        let data = XL_row_object;
        console.log(data);
        for(let dados of data) {
          console.log(dados['6. Qual o seu gênero?'])
          genero.push(dados['6. Qual o seu gênero?']);
        }
        console.log(genero)
      });
    };

    reader.onerror = function (ex) {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
    console.log(file);
  };
};

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var xl2json = new ExcelToJSON();
  xl2json.parseExcel(files[0]);
  console.log("evento", files[0]);
}

document
  .getElementById("inputFile")
  .addEventListener("change", handleFileSelect);
