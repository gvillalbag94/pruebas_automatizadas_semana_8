const fs = require('fs');

let tests_VRT = [
    "Creacion_de_un_member",
    "Busqueda_y_eliminacion_de_un_member",
    "Editar_un_member_creado",
    "created_edit_add_tag_delete_page",
    "created_edit_delete_page",
    "create_draft",
    "createNewPublicTag",
    "deletePublicTag",
    "publish_draft",
    "unpublish_post",
    ];

var backstop_config = {
    id: "backstop_default",
    viewports: [
      {
        label: "default",
        width: 800,
        height: 600
      }
    ],
    scenarios: [],
    paths: {
      bitmaps_reference: "backstop_data/bitmaps_reference",
      bitmaps_test: "backstop_data/bitmaps_test",
      engine_scripts: "backstop_data/engine_scripts",
      html_report: "backstop_data/html_report",
      ci_report: "backstop_data/ci_report"
    },
    report: [
      "browser"
    ],
    engine: "puppeteer",
    engineOptions: {
      args: [
        "--no-sandbox"
      ]
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false
  };

async function executeTest(test) {
    let carpetaImagenes = '../screenshots/'+test+'/';
    let nombreImagenes = fs.readdirSync(carpetaImagenes);
    console.log(nombreImagenes);
    let nombresImagenes_nuevas = nombreImagenes.filter((nombre) => nombre.startsWith("before"));
    let nombresImagenes_antiguas = nombreImagenes.filter((nombre) => nombre.startsWith("after"));
    var scenarios = [];
    for (let i = 0; i < nombresImagenes_nuevas.length; i++){
        if (
            nombresImagenes_nuevas.includes(nombresImagenes_nuevas[i]) &&
            nombresImagenes_antiguas.includes(nombresImagenes_antiguas[i])
          ) { 
           

            const scenario = {
                "label": test + ' ' + nombresImagenes_nuevas[i] + ' vs ' + nombresImagenes_antiguas[i],
                "url": '../screenshots/'+test+'/' +nombresImagenes_nuevas[i],
                "referenceUrl": '../screenshots/'+test+'/' +nombresImagenes_antiguas[i],
                "readyEvent": "",
                "readySelector": "",
                "delay": 0,
                "hideSelectors": [],
                "removeSelectors": [],
                "hoverSelector": "",
                "clickSelector": "",
                "postInteractionWait": 1,
                "selectors": [],
                "selectorExpansion": true,
                "expect": 0,
                "misMatchThreshold" : 0.1,
                "requireSameDimensions": true
            };

            scenarios.push(scenario);
          }

    }


    return scenarios;
}

async function buildScenarios() {
    for (test of tests_VRT) { 
        (async ()=> {
            const  executedTest = await executeTest(test);
            backstop_config.scenarios = [... backstop_config.scenarios, ...executedTest];
            console.log('Execute completed for test: ' + test);
        })();
    }
}
  
async function executedTests() {
    await buildScenarios()
    fs.writeFileSync('backstop.json', JSON.stringify(backstop_config, null, 2));
}

executedTests();