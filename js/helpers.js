function count(array) {
    if (typeof (array[0]) == 'object') {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].join();
        }
    };

    array.sort();

    let current = null;
    let cnt = 0;

    let label = [];

    let data = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] != current) {
            if (cnt > 0) {
                label.push(current);
                data.push(cnt);
            }
            current = array[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        label.push(current);
        data.push(cnt);
    }

    return [label, data];
}

function getIdade(nasc) {
    let ano_atual = new Date().getFullYear();

    const data = moment(nasc[2], "YY");

    const ano = data.format("YYYY");

    let idade = ano_atual - ano;

    if (idade < 0) {
        novo_ano = ano.replaceAll('20', '19');

        idade = ano_atual - novo_ano;
    }

    return idade;
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',0.2)';
}

function filter(planilha) {
    let filtro_curso = $('#filtro_curso option:selected').text();
    let filtro_periodo = $('#filtro_periodo option:selected').text();

    let aux = [];
    let new_planilha = [];
    
    planilha.forEach(function (data) {
        if (filtro_curso !== 'Selecione o Curso...') {
            if (data['1. Qual o seu curso?'] === filtro_curso) {
                aux.push(data);
            }
        } else {
            aux.push(data);
        }
    })
    
    aux.forEach(function (data) {
        if (filtro_periodo !== 'Selecione o Período...') {
            if (data['2. Qual o período que cursa?'] === filtro_periodo) {
                new_planilha.push(data);
            }
        } else {
            new_planilha.push(data);
        }
    })

    return new_planilha;
};

// let Excel = function () {
//     this.validarExcel = function (file) {
//         let reader = new FileReader();

//         reader.onload = function (e) {
//             let data = e.target.result;
//             let workbook = XLSX.read(data, {
//                 type: 'binary'
//             });

//             workbook.SheetNames.forEach(function (sheetName) {
//                 let XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
//                 let json_object = JSON.stringify(XL_row_object);

//                 return JSON.parse(json_object);
//             });
//         };
//     };
// };