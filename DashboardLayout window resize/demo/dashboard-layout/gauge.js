define(["require", "exports", "../../src/dashboard-layout/dashboard-layout", "@syncfusion/ej2-buttons", "@syncfusion/ej2-charts", "@syncfusion/ej2-charts", "@syncfusion/ej2-popups", "@syncfusion/ej2-charts","@syncfusion/ej2-circulargauge","@syncfusion/ej2-lineargauge"], function (require, exports, dashboard_layout_1,ej2_buttons_1, ej2_charts_1, ej2_charts_2, ej2_popups_1, ej2_charts_3,ej2_circulargauge_1,ej2_lineargauge_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_charts_1.Chart.Inject(ej2_charts_1.LineSeries, ej2_charts_1.DateTime, ej2_charts_1.Legend, ej2_charts_1.Tooltip);
    ej2_charts_1.Chart.Inject(ej2_charts_2.SplineAreaSeries, ej2_charts_1.DateTime, ej2_charts_1.Legend);
    ej2_charts_1.Chart.Inject(ej2_charts_1.LineSeries, ej2_charts_1.DateTime, ej2_charts_1.Legend, ej2_charts_1.Tooltip);
    ej2_charts_1.Chart.Inject(ej2_charts_1.ColumnSeries, ej2_charts_1.DataLabel, ej2_charts_1.Category, ej2_charts_1.Legend, ej2_charts_1.Tooltip);
    ej2_charts_3.AccumulationChart.Inject(ej2_charts_3.AccumulationLegend, ej2_charts_3.PieSeries, ej2_charts_3.AccumulationTooltip, ej2_charts_3.AccumulationDataLabel);
    // ej2_schedule_1.Schedule.Inject(ej2_schedule_1.Day, ej2_schedule_1.Week, ej2_schedule_1.WorkWeek, ej2_schedule_1.Month, ej2_schedule_1.Agenda);
    /**
     * RemoteData sample
     */
  function isNullEmpty(valore, multiArray) {
  try {
    if (multiArray) {
      var _wRet = false;
      for (var i = 0; i < valore.length; i++) {
        if (isNullEmpty(valore[i])) {
          _wRet = true;
          break;
        }
      }
      return _wRet;
    } else {
      switch (true) {
        case valore === null:
          return true;
          break;
        case Object.prototype.toString.call(valore) === "[object Date]":
          return false;
          break;
        case typeof valore === "undefined":
        case typeof valore === "null":
          return true;
          break;
        case typeof valore === "string":
          if (
            valore.toString().trim() == "null" ||
            valore.toString().trim() == "undefined"
          ) {
            return true;
          } else if (valore.toString().trim().length > 0) {
            return false;
          } else {
            return true;
          }
          break;
        case typeof valore === "boolean":
          return false;
          break;
        case typeof valore === "number":
          return false;
          break;
        case typeof valore === "object":
          if (Object.keys(valore).length > 0) {
            return false;
          } else {
            return true;
          }
          break;
      }
    }
  } catch (ex) {
    return true;
  }
}

var _traduzioniVWCountries = {
  titolo: "Sliding Countries",
  allocated: "Allocated",
  chargedToCust: "Charged to customers",
  currentValue: "Current value",
  pastYear: "Past year",
  delta: "Delta",
  YTD: "YTD",
  YTDvsDate: "YTD vs target to date",
  YTDvsPast: "YTD vs Past YTD",
  MTD: "MTD",
  MTDvsDate: "MTD vs target to date",
  MTDvsPast: "MTD vs Past MTD",
  labourMargin: "Labour margin",
  spMargin: "Spare parts margin",
  labourDiscount: "Labour discount",
  spDiscount: "Spare parts discount",
  revMonth: "Revenues / Target monthly analysis",
  activeCamp: "Active campaigns",
  potMachines: "Potential machines",
  quotations: "Quotations",
  accepted: "Accepted",
  coverage: "Coverage",
  success: "Success",
  anno: "Year",
  mesi: "Months",
  replies: "Replies",
  posEval: "Positive evalutations",
  todayAlloc: "Today resources allocation",
  utilizationRate: "Utilization Rate",
  revenueTarget: "Revenues/target",
  marginDiscount: "Margin/Discounts",
  revenues: "Revenues",
  marketing: "Market campaign",
  kpi: "KPI",
  survey: "Survey",
  criticalCustomer: "Critical customers",
  update: "Data update..",
  goal: "Goal",
  RevenuesSpareParts: "Spare Parts",
  RevenuesService: "Service",
  apriChiudiMenu: "Toggle menu",
  apriFiltri: "Open filter",
  RevenuesLegend: "Revenues",
  TargetLegend: "Target",
  PrevYearLegend: "Prev. Year",
  negEval: "Negative evalutations",
  mehEval: "Meh evalutations",
  wip: "Work in progress."
};

// var EJ2 = ej;

var videoWallCountries = {},
  nomeDashboardSaved = "VideoWallCountries_map",
  timerRefresh,
  intervalloRefresh = 65000,
  intervalloCorrente = 0,
  altezzaMostraMenu = 35,
  listaFiliali = [
    {
      cod_lng: "99999",
      descrizione: "ITALIA",
      Id: null,
      guid_servizio: "b13e7775-41d1-479e-8f88-d57f8dfeb8f4",
      cod_div: "VOL",
      cod_soc: "PP",
      cod_fil: "PIITA",
      selezionato: false,
      data_creazione: null,
      data_ultimo_aggiornamento: null,
      data_ultimo_annullamento: null,
      codice_utente_ultimo_aggiornamento: "SIE",
      ute_blocco: "",
      flag_tratt: "",
      presenza_schema_tabella: false,
      flag_tratt_descr: ""
    }
  ],
  filialeCorrente = 0,
  altezzaGauge = "100px",
  widthGauge = "200px",
  grafici = {},
  coloriGauge = {
    rosso: "#e94649",
    verde: "#7ddf1e",
    giallo: "#f7ce69"
  },
  abilitazioni = {
    utilizationRate: true,
    revenueTarget: true,
    marketing: true,
    kpi: true,
    marginDiscount: true,
    criticalCustomer: true,
    survey: true,
    revenues: true,
    todayAllocated: true
  },
  savedDataForResize = null,
  templateWIP = "wip";

$(function() {
  window.addEventListener("resize", onVideoWallResize);

  //// TODO: in attesa di SF. https://www.syncfusion.com/support/directtrac/incidents/292493
  //if (window.innerWidth < 1920) {
  //    // Schermo troppo piccolo
  //    $("#videoWallCountriesLayout").text("Risoluzione troppo bassa (min 1920x1080). [in attesa di SF. https://www.syncfusion.com/support/directtrac/incidents/292493]");
  //    $("#videoWallCountriesLayout").show();
  //    return;
  //}

  // Nascondo l'header e la navbar per avere più spazio.
  InitPageVideoWallCountries();

  // Carico il layout della dashboard.
  caricaDashboardSF2();

  if (window.innerWidth < 1920) onVideoWallResize();

  // Chiamo il server per recuperare i dati e creare i grafici.
  caricaDatiGrafici();
});

function InitPageVideoWallCountries() {
  $("#header").css({ top: -altezzaMostraMenu });
  $("#NavigationBar").hide();
  $("#SGAT_page_Container").css({ top: 0 });
  $("footer").hide();
  //openFullscreen();
}

// Prima di uscire dalla pagina rimuovo gli eventi bounded all'header e reimposto i default per i vari div.
function volosOnPageUnload(chiudi) {
  clearInterval(timerRefresh);

  window.removeEventListener("resize", onVideoWallResize);

  timerRefresh = videoWallCountries = grafici = savedDataForResize = templateWIP = abilitazioni = coloriGauge = filialeCorrente = listaFiliali = nomeDashboardSaved = altezzaGauge = widthGauge = altezzaMostraMenu = intervalloRefresh = intervalloCorrente = null;

  chiudi();

  $("#NavigationBar").show();
  $("#header").css({ top: 0 });
  $("#SGAT_page_Container").css({ top: 50 });
  $("footer").show();
  closeFullscreen();
}

function caricaDashboardSF2() {
  videoWallCountries = new dashboard_layout_1.DashboardLayout({
    allowResizing: false,
    allowDragging: false,
    cellSpacing: [10, 10],
    columns: 6,
    //change: salvaStatoPannelli,
    //dragStop: salvaStatoPannelli,
    //resizeStop: salvaStatoPannelli,
    panels: [
      {
        sizeX: 1,
        sizeY: 2,
        row: 0,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.todayAlloc + "</div>",
        content: "#panelToday",
        id: "panelTodayID"
      },
      {
        sizeX: 1,
        sizeY: 1,
        row: 2,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.utilizationRate + "</div>",
        content: "#panelUtilizationRate",
        id: "panelUtilizationRateID"
      },
      {
        sizeX: 3,
        sizeY: 1,
        row: 0,
        col: 1,
        header: "<div>" + _traduzioniVWCountries.revenueTarget + "</div>",
        content: "#panelRevenuesTarget",
        id: "panelRevenuesTargetID"
      },
      {
        sizeX: 2,
        sizeY: 1,
        row: 1,
        col: 1,
        header: "<div>" + _traduzioniVWCountries.marginDiscount + "</div>",
        content: "#panelMarginDiscount",
        id: "panelMarginDiscountID"
      },
      {
        sizeX: 2,
        sizeY: 1,
        row: 2,
        col: 1,
        header: "<div>" + _traduzioniVWCountries.revenues + "</div>",
        content: "#panelRevenues",
        id: "panelRevenuesID"
      },
      {
        sizeX: 2,
        sizeY: 1,
        row: 0,
        col: 4,
        header: "<div>" + _traduzioniVWCountries.marketing + "</div>",
        content: "#panelMarketing",
        id: "panelMarketingID"
      },
      {
        sizeX: 3,
        sizeY: 1,
        row: 1,
        col: 3,
        header: "<div>" + _traduzioniVWCountries.kpi + "</div>",
        content: "#panelKPI",
        id: "panelKPIID"
      },
      {
        sizeX: 2,
        sizeY: 1,
        row: 2,
        col: 3,
        header: "<div>" + _traduzioniVWCountries.survey + "</div>",
        content: "#panelSurvey",
        id: "panelSurveyID"
      },
      {
        sizeX: 1,
        sizeY: 1,
        row: 2,
        col: 5,
        header: "<div>" + _traduzioniVWCountries.criticalCustomer + "</div>",
        content: "#panelCriticalCustomer",
        id: "panelCriticalCustomerID"
      }
    ]
  });

  // Per ora non usata, DashboardLayout ha TROPPI problemi.
  //// Enablepersistent non funziona correttamente, faccio a mano https://ej2.syncfusion.com/documentation/dashboard-layout/save-restore/
  //var configSaved = localStorage.getItem(nomeDashboardSaved);
  //if (configSaved != null) {
  //    var valore = JSON.parse(configSaved);
  //    if (!isNullEmpty(valore)) videoWallCountries.panels = valore;
  //}

  videoWallCountries.appendTo("#videoWallCountriesLayout");
}

function caricaDatiGrafici() {
  clearInterval(timerRefresh);
  $("#refresher").text(_traduzioniVWCountries.update);

  var dati = listaFiliali[filialeCorrente];

  $("#filialeTxt").text(dati.descrizione);

  filialeCorrente < listaFiliali.length - 1
    ? (filialeCorrente += 1)
    : (filialeCorrente = 0);

  var data = {
    UtilizationRateCurrentYear: { x: "JAN 2019 - DEC 2019", y: 0, text: "" },
    UtilizationRateLastYear: { x: "JAN 2018 - DEC 2018", y: 0, text: "" },
    UtilizationRateGain: "0",
    YTD: "116",
    MTD: "54",
    MarketingActiveCampaigns: "3",
    MarketingPotentialMachines: "2163",
    MarketingQuotations: "960",
    MarketingAccepted: "578",
    GraficoYTDvsDate: [
      { x: "Revenues", y: 71.69181725290697, text: "" },
      { x: "Target", y: 0.11, text: "" }
    ],
    GraficoYTDvsPast: [
      { x: "Revenues", y: 71.69181725290697, text: "" },
      { x: "Prev. Year", y: 11.53, text: "" }
    ],
    GraficoMTDvsDate: [
      { x: "Revenues", y: 2.5, text: "" },
      { x: "Target", y: 0.01, text: "" }
    ],
    GraficoMTDvsPast: [
      { x: "Revenues", y: 2.5, text: "" },
      { x: "Prev. Year", y: 0, text: "" }
    ],
    RevenuesYTD: "72",
    RevenuesDeltaYTDvsDate: "651",
    RevenuesDeltaYTDvsPast: "5",
    RevenuesMTD: "2",
    RevenuesDeltaMTDvsDate: "249",
    RevenuesDeltaMTDvsPast: "-",
    graficoKpi2: null,
    DataSourceKPIGraficoGrid: [
      { NomeKPI: "", NumeroKPI: "", GoalKPI: "", ValoreKPI: null }
    ],
    DataSourceKPIGraficoMesi: [{ name: null, dataSource: null }],
    GraficoCriticalCust: [
      {
        name: "Machines Total",
        dataSource: [
          { x: "0 WO", y: 8264, text: "" },
          { x: "1-5 WO", y: 13, text: "" },
          { x: "6-10 WO", y: 1, text: "" },
          { x: "11-15 WO", y: 0, text: "" },
          { x: "16-20 WO", y: 0, text: "" },
          { x: "> 20 WO", y: 0, text: "" }
        ]
      },
      {
        name: "Average number of Work Order",
        dataSource: [
          { x: "0 WO", y: 0, text: "" },
          { x: "1-5 WO", y: 1.69, text: "" },
          { x: "6-10 WO", y: 6, text: "" },
          { x: "11-15 WO", y: 0, text: "" },
          { x: "16-20 WO", y: 0, text: "" },
          { x: "> 20 WO", y: 0, text: "" }
        ]
      }
    ],
    MarketingCoverage: "52",
    MarketingSuccess: "92",
    LabourMargin: "35",
    SparePartsMargin: "6",
    LabourDiscount: "5",
    SparePartsDiscount: "19",
    SurveyReply: "-",
    SurveyPos: "-",
    SurveyNeg: "-",
    SurveyIndiff: "-",
    GraficoSurvey: [{ x: null, y: null, text: null }],
    TodayAllocated: "83",
    ChargedToCustomers: "58",
    GraficoTodayResources: [
      { x: "Charged to customers", y: 43, text: "" },
      { x: "Warranty", y: 14, text: "" },
      { x: "Installation", y: 12, text: "" },
      { x: "NotAllocated", y: 84, text: "" }
    ],
    RevGraficoPerMese: [
      {
        name: "Spare Parts",
        dataSource: [
          { x: "JAN 2019", y: 0, text: "" },
          { x: "FEB 2019", y: 0, text: "" },
          { x: "MAR 2019", y: 0, text: "" },
          { x: "APR 2019", y: 0, text: "" },
          { x: "MAY 2019", y: 0, text: "" },
          { x: "JUN 2019", y: 0, text: "" },
          { x: "JUL 2019", y: 0, text: "" },
          { x: "AUG 2019", y: 1.925, text: "" },
          { x: "SEP 2019", y: 6.292, text: "" },
          { x: "OCT 2019", y: 0, text: "" },
          { x: "NOV 2019", y: 17.83, text: "" },
          { x: "DEC 2019", y: 2.5, text: "" }
        ]
      },
      {
        name: "Service",
        dataSource: [
          { x: "JAN 2019", y: 0, text: "" },
          { x: "FEB 2019", y: 0, text: "" },
          { x: "MAR 2019", y: 0, text: "" },
          { x: "APR 2019", y: 0, text: "" },
          { x: "MAY 2019", y: 0, text: "" },
          { x: "JUN 2019", y: 0, text: "" },
          { x: "JUL 2019", y: 0, text: "" },
          { x: "AUG 2019", y: 10.025, text: "" },
          { x: "SEP 2019", y: 20.54979, text: "" },
          { x: "OCT 2019", y: 10.195, text: "" },
          { x: "NOV 2019", y: 2.3750272529069765, text: "" },
          { x: "DEC 2019", y: 0, text: "" }
        ]
      }
    ],
    RevTargetPerMese: [
      { x: "JAN 2019", y: 10, text: "" },
      { x: "FEB 2019", y: 20, text: "" },
      { x: "MAR 2019", y: 25, text: "" },
      { x: "APR 2019", y: 15, text: "" },
      { x: "MAY 2019", y: 10, text: "" },
      { x: "JUN 2019", y: 20, text: "" },
      { x: "JUL 2019", y: 0, text: "" },
      { x: "AUG 2019", y: 0, text: "" },
      { x: "SEP 2019", y: 0, text: "" },
      { x: "OCT 2019", y: 0, text: "" },
      { x: "NOV 2019", y: 0, text: "" },
      { x: "DEC 2019", y: 10, text: "" }
    ],
    RevGraficoMaxY: 43
  };
  savedDataForResize = data;
  $("#videoWallCountriesLayout").show();
  creaGrafici(data);
  startTimer();
}

function startTimer() {
  timerRefresh = setInterval(function() {
    if (intervalloCorrente == intervalloRefresh) {
      var minuti = Math.floor(intervalloRefresh / 60),
        secondi = intervalloRefresh - minuti * 60;

      intervalloCorrente = 0;
      $("#refresher").text(
        "Refresh in " + minuti + " minuti e " + secondi + " secondi"
      );
      caricaDatiGrafici();
    } else {
      intervalloCorrente += 1;
      var minutiCorr = Math.floor(
          (intervalloRefresh - intervalloCorrente) / 60
        ),
        secondiCorr = intervalloRefresh - intervalloCorrente - minutiCorr * 60;

      $("#refresher").text(
        "Refresh in " + minutiCorr + " minuti e " + secondiCorr + " secondi"
      );
    }
  }, 1000);
}

// Workaround per spazio sotto i gauge.
// Ticket SF -> https://www.syncfusion.com/support/directtrac/incidents/292493
// Richiesta feature -> https://www.syncfusion.com/feedback/1303/remove-the-white-space-in-circular-gauge
function fixGauge(args, isLinear) {
  try {
    var border = isLinear ? "_LinearGaugeBorder" : "_CircularGaugeBorder";
    //var height = parseInt(document.getElementById(args.gauge.element.id + border).getAttribute('height'));
    //document.getElementById(args.gauge.element.id + border).setAttribute('height', height - (height / 3));
    //var heightSvg = parseInt(document.getElementById(args.gauge.element.id + '_svg').getAttribute('height'));
    //document.getElementById(args.gauge.element.id + '_svg').setAttribute('height', heightSvg - (heightSvg / 3));

    var border = isLinear ? "_LinearGaugeBorder" : "_CircularGaugeBorder";

    var height = parseInt(
      document
        .getElementById(args.gauge.element.id + border)
        .getAttribute("height")
    );
    var axisRect = document
      .getElementById(args.gauge.element.id + "_AxesCollection")
      .getBoundingClientRect();
    var topValue = document
      .getElementById(args.gauge.element.id + border)
      .getBoundingClientRect().top;
    document
      .getElementById(args.gauge.element.id + border)
      .setAttribute("height", axisRect.y + axisRect.height - topValue);
    document
      .getElementById(args.gauge.element.id + border)
      .setAttribute("y", axisRect.y - axisRect.height - height);
    var width = parseInt(
      document
        .getElementById(args.gauge.element.id + border)
        .getAttribute("width")
    );
    var leftValue = document
      .getElementById(args.gauge.element.id + border)
      .getBoundingClientRect().left;
    document
      .getElementById(args.gauge.element.id + border)
      .setAttribute("width", axisRect.x + axisRect.width);
    document
      .getElementById(args.gauge.element.id + border)
      .setAttribute("x", width - (axisRect.x + axisRect.width + leftValue));

    var height = parseInt(
      document
        .getElementById(args.gauge.element.id + border)
        .getAttribute("height")
    );
    document
      .getElementById(args.gauge.element.id + border)
      .setAttribute("height", height - height / 5);
    var heightSvg = parseInt(
      document
        .getElementById(args.gauge.element.id + "_svg")
        .getAttribute("height")
    );
    document
      .getElementById(args.gauge.element.id + "_svg")
      .setAttribute("height", heightSvg - heightSvg / 5);
  } catch (e) {
    //debugger;
  }
}

function disabilitaPannello(idPannello) {
  var selector = "#" + idPannello + " .e-panel-content";

  $(selector).html(templateWIP);
  $(selector).css({ backgroundColor: "rgba(0,0,0,.5)" });
}

//#region Creazione grafici
function creaGrafici(data) {
  utilizationRate(data);
  revenueTarget(data);
  marketing(data);
  kpi(data);
  marginDiscount(data);
  criticalCustomer(data);
  survey(data);
  revenues(data);
  todayAllocated(data);
}

function utilizationRate(data) {
  if (!abilitazioni.utilizationRate) {
    disabilitaPannello("panelUtilizationRateID");
    return;
  }

  grafici.utilizationRate = new ej2_circulargauge_1.CircularGauge(
    {
      moveToCenter: false,
      allowMargin: false,
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args);
      },
      axes: [
        {
          radius: "100%",
          lineStyle: { width: 0, color: "transparent" },
          labelStyle: { font: { size: "0px", color: "trasparent" } },
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          minimum: 0,
          maximum: 100,
          startAngle: 270,
          endAngle: 90,
          ranges: [
            {
              start: 0,
              end: 100,
              startWidth: 20,
              endWidth: 20,
              color: coloriGauge.verde,
              linearGradient: {
                startValue: "0%",
                endValue: "100%",
                colorStop: [
                  { color: coloriGauge.rosso, offset: "0%", opacity: 1 },
                  { color: coloriGauge.giallo, offset: "50%", opacity: 1 },
                  { color: coloriGauge.verde, offset: "100%", opacity: 1 }
                ]
              },
              roundedCornerRadius: 0
            }
          ],
          pointers: [
            {
              animation: { enable: true },
              value: data.UtilizationRateCurrentYear.y,

              radius: "85%",
              color: "#262626",
              pointerWidth: 5,
              cap: {
                radius: 5,
                border: { color: "#262626", width: 1.5 },
                color: "trasparent"
              },
              needleTail: { length: "0%" },
              needleStartWidth: 1
            }
          ],
          annotations: [
            {
              content: "<h1>" + data.UtilizationRateCurrentYear.y + "%</h1>",
              angle: 82,
              radius: "210%",
              zIndex: "1" // di default è -1...
            }
          ]
        }
      ]
    },
    "#graficoUtilizationRate"
  );
  grafici.utilizationRate.refresh();

  $("#utilizatioRatePastText").text(data.UtilizationRateLastYear.y + "%");
  $("#utilizatioRateGainText").text(data.UtilizationRateGain);
}

function revenueTarget(data) {
  if (!abilitazioni.revenueTarget) {
    disabilitaPannello("panelRevenuesTargetID");
    return;
  }

  var marker = {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600" }
      }
    },
    legend = {
      visible: true,
      alignment: "Near",
      position: "Bottom",
      enablePages: false,
      padding: 2
    },
    asseX = {
      valueType: "Category",
      labelIntersectAction: "Rotate45",
      majorTickLines: { width: 0 },
      labelStyle: { size: "0px" }
    },
    asseY = {
      visible: false,
      majorGridLines: { width: 0 },
      majorTickLines: { width: 0 },
      lineStyle: { width: 0 },
      minimum: 0,
      labelFormat: "{value}",
      edgeLabelPlacement: "Shift",
      labelStyle: { size: "0px" }
    },
    height = "90px",
    width = "75%",
    serie = function(ds, name) {
      return {
        dataSource: ds,
        xName: "x",
        yName: "y",
        type: "StackingBar",
        name: name,
        legendShape: "Circle",
        marker: marker,
        columnSpacing: 0.2,
        columnWidth: 0.8
      };
    },
    colori = ["#f7ce69", "#55a5c2 "], // giallo f7ce69 blu 55a5c2
    annotation = function(dati, valore) {
      return {
        region: "Chart",
        coordinateUnits: "Pixel",
        content:
          '<h3 style="color: ' +
          dati.colore +
          '"><i class="fa ' +
          dati.icona +
          '"></i> ' +
          valore +
          "%</h3>",
        x: "115%",
        y: "40%"
      };
    };

  // Per recupera un po' di spazio, imposto il max sull'asse Y.
  var maxCalc = function(data) {
    var maxSerie0 = data[0].y;
    var maxSerie1 = data[1].y;
    //asseY.maximum = Math.round(_.max([maxSerie0, maxSerie1]) + 5);
  };

  var dati1 = coloreEicona(data.RevenuesDeltaYTDvsDate, true),
    dati2 = coloreEicona(data.RevenuesDeltaYTDvsPast),
    dati3 = coloreEicona(data.RevenuesDeltaMTDvsDate, true),
    dati4 = coloreEicona(data.RevenuesDeltaMTDvsPast);

  maxCalc(data.GraficoYTDvsDate);
  grafici.ytdDate = new ej2_charts_1.Chart(
    {
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      palettes: colori,
      legendSettings: legend,
      sideBySidePlacement: true,
      primaryXAxis: asseX,
      primaryYAxis: asseY,
      chartArea: { border: { width: 0 } },
      series: [
        serie([data.GraficoYTDvsDate[0]], data.GraficoYTDvsDate[0].x),
        serie([data.GraficoYTDvsDate[1]], data.GraficoYTDvsDate[1].x)
      ],
      annotations: [annotation(dati1, data.RevenuesDeltaYTDvsDate)],
      width: width,
      height: height,
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      }
    },
    "#revenuesTargetYTDvsDate"
  );

  maxCalc(data.GraficoYTDvsPast);
  grafici.ytdPast = new ej2_charts_1.Chart(
    {
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      palettes: colori,
      legendSettings: legend,
      sideBySidePlacement: true,
      primaryXAxis: asseX,
      primaryYAxis: asseY,
      chartArea: { border: { width: 0 } },
      series: [
        serie([data.GraficoYTDvsPast[0]], data.GraficoYTDvsPast[0].x),
        serie([data.GraficoYTDvsPast[1]], data.GraficoYTDvsPast[1].x)
      ],
      annotations: [annotation(dati2, data.RevenuesDeltaYTDvsPast)],
      width: width,
      height: height,
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      }
    },
    "#revenuesTargetYTDvsPast"
  );

  maxCalc(data.GraficoMTDvsDate);
  grafici.mtdDate = new ej2_charts_1.Chart(
    {
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      palettes: colori,
      legendSettings: legend,
      sideBySidePlacement: true,
      primaryXAxis: asseX,
      primaryYAxis: asseY,
      chartArea: { border: { width: 0 } },
      series: [
        serie([data.GraficoMTDvsDate[0]], data.GraficoMTDvsDate[0].x),
        serie([data.GraficoMTDvsDate[1]], data.GraficoMTDvsDate[1].x)
      ],
      annotations: [annotation(dati3, data.RevenuesDeltaMTDvsDate)],
      width: width,
      height: height,
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      }
    },
    "#revenuesTargetMTDvsDate"
  );

  maxCalc(data.GraficoMTDvsPast);
  grafici.mtdPast = new ej2_charts_1.Chart(
    {
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      palettes: colori,
      legendSettings: legend,
      sideBySidePlacement: true,
      primaryXAxis: asseX,
      primaryYAxis: asseY,
      chartArea: { border: { width: 0 } },
      series: [
        serie([data.GraficoMTDvsPast[0]], data.GraficoMTDvsPast[0].x),
        serie([data.GraficoMTDvsPast[1]], data.GraficoMTDvsPast[1].x)
      ],
      annotations: [annotation(dati4, data.RevenuesDeltaMTDvsPast)],
      width: width,
      height: height,
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      }
    },
    "#revenuesTargetMTDvsPast"
  );

  var textYTD = $("#revenuesTargetYTD"),
    textMTD = $("#revenuesTargetMTD"),
    kappaText = "K €";

  textYTD.text(data.RevenuesYTD + kappaText);
  textMTD.text(data.RevenuesMTD + kappaText);

  textYTD.height(
    $("#revenuesTargetYTDvsDate").height() -
      parseInt(textYTD.css("padding-top"))
  );
  textMTD.height(
    $("#revenuesTargetMTDvsDate").height() -
      parseInt(textMTD.css("padding-top"))
  );
}

function coloreEicona(valore, plusMinus) {
  var pos = "fa-caret-up",
    neg = "fa-caret-down";

  if (plusMinus) {
    pos = "fa-plus";
    neg = "fa-minus";
  }

  var obj = { colore: coloriGauge.verde, icona: pos };
  if (valore < 0) {
    obj.colore = coloriGauge.rosso;
    obj.icona = neg;
  }

  return obj;
}

function marketing(data) {
  if (!abilitazioni.marketing) {
    disabilitaPannello("panelMarketingID");
    return;
  }

  var annotation = function(valore) {
    return {
      content: "<h1>" + valore + "%</h1>",
      angle: 82,
      radius: "180%",
      zIndex: "1" // di default è -1...
    };
  };

  grafici.marketingCoverage = new ej2_circulargauge_1.CircularGauge(
    {
      moveToCenter: false,
      allowMargin: false,
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args);
      },
      axes: [
        {
          radius: "100%",
          lineStyle: { width: 0, color: "transparent" },
          labelStyle: { font: { size: "0px", color: "trasparent" } },
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          minimum: 0,
          maximum: 100,
          startAngle: 270,
          endAngle: 90,
          ranges: [
            {
              start: 0,
              end: 100,
              startWidth: 20,
              endWidth: 20,
              color: coloriGauge.verde,
              linearGradient: {
                startValue: "0%",
                endValue: "100%",
                colorStop: [
                  { color: coloriGauge.rosso, offset: "0%", opacity: 1 },
                  { color: coloriGauge.giallo, offset: "50%", opacity: 1 },
                  { color: coloriGauge.verde, offset: "100%", opacity: 1 }
                ]
              },
              roundedCornerRadius: 0
            }
          ],
          pointers: [
            {
              animation: { enable: true },
              value: data.MarketingCoverage,
              radius: "85%",
              color: "#262626",
              pointerWidth: 5,
              cap: {
                radius: 5,
                border: { color: "#262626", width: 1.5 },
                color: "trasparent"
              },
              needleTail: { length: "0%" },
              needleStartWidth: 1
            }
          ],
          annotations: [annotation(data.MarketingCoverage)]
        }
      ]
    },
    "#graficoMarketingCoverage"
  );

  grafici.marketingSuccess = new ej2_circulargauge_1.CircularGauge(
    {
      moveToCenter: false,
      allowMargin: false,
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args);
      },
      axes: [
        {
          radius: "100%",
          lineStyle: { width: 0, color: "transparent" },
          labelStyle: { font: { size: "0px", color: "trasparent" } },
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          minimum: 0,
          maximum: 100,
          startAngle: 270,
          endAngle: 90,
          ranges: [
            {
              start: 0,
              end: 100,
              startWidth: 20,
              endWidth: 20,
              color: coloriGauge.verde,
              linearGradient: {
                startValue: "0%",
                endValue: "100%",
                colorStop: [
                  { color: coloriGauge.rosso, offset: "0%", opacity: 1 },
                  { color: coloriGauge.giallo, offset: "50%", opacity: 1 },
                  { color: coloriGauge.verde, offset: "100%", opacity: 1 }
                ]
              },
              roundedCornerRadius: 0
            }
          ],
          pointers: [
            {
              animation: { enable: true },
              value: data.MarketingSuccess,
              radius: "85%",
              color: "#262626",
              pointerWidth: 5,
              cap: {
                radius: 5,
                border: { color: "#262626", width: 1.5 },
                color: "trasparent"
              },
              needleTail: { length: "0%" },
              needleStartWidth: 1
            }
          ],
          annotations: [annotation(data.MarketingSuccess)]
        }
      ]
    },
    "#graficoMarketingSuccess"
  );

  grafici.marketingCoverage.refresh();
  grafici.marketingSuccess.refresh();

  $("#marketingActCamp").text(data.MarketingActiveCampaigns);
  $("#marketingPotMac").text(data.MarketingPotentialMachines);
  $("#marketingQuotations").text(data.MarketingQuotations);
  $("#marketingAccepted").text(data.MarketingAccepted);
}

function kpi(data) {
  if (!abilitazioni.kpi) {
    disabilitaPannello("panelKPIID");
    return;
  }

  var marker = {
      dataLabel: {
        visible: true,
        position: "Outer",
        font: { fontWeight: "600" }
      }
    },
    SerieMesi = function(ds, nome, tipo) {
      this.name = nome;
      this.type = isNullEmpty(tipo) ? "Line" : tipo; // Line // Spline // StepLine
      this.dataSource = ds;
      this.xName = "x";
      this.yName = "y";
      this.width = 2;
      if (tipo != "Column") {
        this.marker = {
          visible: true,
          width: 5,
          height: 5,
          shape: "Rectangle",
          font: { fontWeight: "600", color: "#000000" }
        };
      } else {
        this.marker = {
          dataLabel: {
            visible: true,
            width: 5,
            height: 5,
            shape: "Rectangle",
            font: { fontWeight: "600", color: "#000000" }
          }
        };
      }
    };

  var dsKPI_mesi = [];
  data.DataSourceKPIGraficoMesi.forEach(function(ele) {
    dsKPI_mesi.push(new SerieMesi(ele.dataSource, ele.name));
  });

  grafici.kpiMesi = new ej2_charts_1.Chart(
    {
      legendSettings: { visible: false },
      primaryXAxis: {
        valueType: "Category",
        labelIntersectAction: "Rotate45",
        interval: 1
      },
      primaryYAxis: {
        minimum: 0,
        width: 1
      },
      chartArea: { border: { width: 0 } },
      series: dsKPI_mesi,
      load(args) {
        args.chart.theme = "Bootstrap";
      } // Cambio i colori del grafico.
    },
    "#graficoKPI_Mesi"
  );

  // Utilizzo lo stesso colore per entrambi i grafici.
  grafici.kpiMesi.series.forEach(function(ele) {
    var nomeKpi = ele.properties.name
      // kpiDaColorare = _.find(data.DataSourceKPIGraficoGrid, {
      //   NomeKPI: nomeKpi
      // });

    //if (!isNullEmpty(kpiDaColorare)) kpiDaColorare.colore = ele.interior;
  });

  grafici.kpiAnno = new ej2_charts_1.Chart(
    {
      enableSideBySidePlacement: false,
      palettes: ["#b6b6b6"],
      legendSettings: {
        enablePages: false,
        visible: true,
        padding: 0,
        shapePadding: 0,
        position: "Top"
      },
      primaryXAxis: {
        majorTickLines: { width: 0 },
        valueType: "Category",
        labelIntersectAction: "Rotate45"
      },
      primaryYAxis: { visible: false },
      chartArea: { border: { width: 0 } },
      series: [
        {
          columnWidth: 0.7,
          type: "Bar",
          dataSource: data.DataSourceKPIGraficoGrid,
          xName: "NomeKPI",
          yName: "GoalKPI",
          name: _traduzioniVWCountries.goal,
          marker: marker
        },
        {
          pointColorMapping: "colore",
          columnWidth: 0.5,
          type: "Bar",
          dataSource: data.DataSourceKPIGraficoGrid,
          xName: "NomeKPI",
          yName: "ValoreKPI",
          name: "",
          marker: marker
        }
      ],
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      },
      textRender: function(args) {
        if (args.text == "0") args.text = "";
      }
    },
    "#graficoKPI_Anno"
  );
}

function criticalCustomer(data) {
  if (!abilitazioni.criticalCustomer) {
    disabilitaPannello("panelCriticalCustomerID");
    return;
  }

  var serie = function(ds, nome, tipo, visLabel) {
    this.name = nome;
    this.pointColorMapping = "colore";
    this.type = isNullEmpty(tipo) ? "Line" : tipo;
    this.dataSource = ds;
    this.xName = "x";
    this.yName = "y";
    if (tipo != "Column" && isNullEmpty(visLabel)) {
      this.marker = {
        font: {
          fontWeight: "600",
          color: "#000000"
        }
      };
    } else {
      this.marker = {
        dataLabel: {
          visible: true,
          font: {
            fontWeight: "600",
            color: "#000000"
          }
        }
      };
    }
  };

  grafici.criticalCustomer = new ej2_charts_1.Chart(
    {
      palettes: ["#2f7e92", "#f7ce69"], //Giallo, Blu
      legendSettings: {
        visible: true,
        alignment: "Near",
        position: "Bottom",
        padding: 2
      },
      primaryXAxis: {
        valueType: "Category",
        labelIntersectAction: "Rotate45",
        visible: true
      },
      primaryYAxis: {
        visible: true,
        majorTickLines: { width: 0 },
        minimum: 0,
        labelStyle: { size: "0px" },
        labelFormat: "{value}",
        edgeLabelPlacement: "Shift"
      },
      chartArea: { border: { width: 0 } },
      series: [
        new serie(
          data.GraficoCriticalCust[0].dataSource,
          data.GraficoCriticalCust[0].name,
          "Column"
        ),
        new serie(
          data.GraficoCriticalCust[1].dataSource,
          data.GraficoCriticalCust[1].name,
          "Column"
        )
      ],
      width: "95%",
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      }
    },
    "#graficoCriticalCust"
  );
}

function marginDiscount(data) {
  if (!abilitazioni.marginDiscount) {
    disabilitaPannello("panelMarginDiscountID");
    return;
  }

  var rangeGradiente = {
      start: 0,
      end: 100,
      startWidth: 20,
      endWidth: 20,
      color: coloriGauge.verde,
      linearGradient: {
        startValue: "0%",
        endValue: "100%",
        colorStop: [
          { color: coloriGauge.rosso, offset: "0%", opacity: 1 },
          { color: coloriGauge.giallo, offset: "50%", opacity: 1 },
          { color: coloriGauge.verde, offset: "100%", opacity: 1 }
        ]
      },
      roundedCornerRadius: 0
    },
    annotation = function(valore) {
      return {
        content: "<h1>" + valore + "%</h1>",
        angle: 82,
        radius: "180%",
        zIndex: "1" // di default è -1...
      };
    };

  grafici.labourMargin = new ej2_circulargauge_1.CircularGauge(
    {
      moveToCenter: false,
      allowMargin: false,
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args);
      },
      axes: [
        {
          radius: "100%",
          lineStyle: { width: 0, color: "transparent" },
          labelStyle: { font: { size: "0px", color: "trasparent" } },
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          minimum: 0,
          maximum: 100,
          startAngle: 270,
          endAngle: 90,
          ranges: [rangeGradiente],
          pointers: [
            {
              animation: { enable: true },
              value: data.LabourMargin,
              radius: "85%",
              color: "#262626",
              pointerWidth: 5,
              cap: {
                radius: 5,
                border: { color: "#262626", width: 1.5 },
                color: "trasparent"
              },
              needleTail: { length: "0%" },
              needleStartWidth: 1
            }
          ],
          annotations: [annotation(data.LabourMargin)]
        }
      ]
    },
    "#graficoMarginDiscountLM"
  );
  grafici.labourMargin.refresh();

  grafici.sparePartsMargin = new ej2_circulargauge_1.CircularGauge(
    {
      moveToCenter: false,
      allowMargin: false,
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args);
      },
      axes: [
        {
          radius: "100%",
          lineStyle: { width: 0, color: "transparent" },
          labelStyle: { font: { size: "0px", color: "trasparent" } },
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          minimum: 0,
          maximum: 100,
          startAngle: 270,
          endAngle: 90,
          ranges: [rangeGradiente],
          pointers: [
            {
              animation: { enable: true },
              value: data.SparePartsMargin,
              radius: "85%",
              color: "#262626",
              pointerWidth: 5,
              cap: {
                radius: 5,
                border: { color: "#262626", width: 1.5 },
                color: "trasparent"
              },
              needleTail: { length: "0%" },
              needleStartWidth: 1
            }
          ],
          annotations: [annotation(data.SparePartsMargin)]
        }
      ]
    },
    "#graficoMarginDiscountSPM"
  );
  grafici.sparePartsMargin.refresh();

  grafici.labourDiscount = new ej2_circulargauge_1.CircularGauge(
    {
      moveToCenter: false,
      allowMargin: false,
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args);
      },
      axes: [
        {
          radius: "100%",
          lineStyle: { width: 0, color: "transparent" },
          labelStyle: { font: { size: "0px", color: "trasparent" } },
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          minimum: 0,
          maximum: 100,
          startAngle: 270,
          endAngle: 90,
          ranges: [rangeGradiente],
          pointers: [
            {
              animation: { enable: true },
              value: data.LabourDiscount,
              radius: "85%",
              color: "#262626",
              pointerWidth: 5,
              cap: {
                radius: 5,
                border: { color: "#262626", width: 1.5 },
                color: "trasparent"
              },
              needleTail: { length: "0%" },
              needleStartWidth: 1
            }
          ],
          annotations: [annotation(data.LabourDiscount)]
        }
      ]
    },
    "#graficoMarginDiscountLD"
  );
  grafici.labourDiscount.refresh();

  grafici.sparePartsDiscount = new ej2_circulargauge_1.CircularGauge(
    {
      moveToCenter: false,
      allowMargin: false,
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args);
      },
      axes: [
        {
          radius: "100%",
          lineStyle: { width: 0, color: "transparent" },
          labelStyle: { font: { size: "0px", color: "trasparent" } },
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          minimum: 0,
          maximum: 100,
          startAngle: 270,
          endAngle: 90,
          ranges: [rangeGradiente],
          pointers: [
            {
              animation: { enable: true },
              value: data.SparePartsDiscount,
              radius: "85%",
              color: "#262626",
              pointerWidth: 5,
              cap: {
                radius: 5,
                border: { color: "#262626", width: 1.5 },
                color: "trasparent"
              },
              needleTail: { length: "0%" },
              needleStartWidth: 1
            }
          ],
          annotations: [annotation(data.SparePartsDiscount)]
        }
      ]
    },
    "#graficoMarginDiscountSPD"
  );
  grafici.sparePartsDiscount.refresh();
}

function survey(data) {
  if (!abilitazioni.survey) {
    disabilitaPannello("panelSurveyID");
    return;
  }

  var marker = {
      dataLabel: {
        visible: true,
        position: "Outer",
        font: { fontWeight: "600" }
      }
    },
    legend = {
      visible: false,
      alignment: "Near",
      position: "Bottom",
      enablePages: false,
      padding: 2
    },
    asseX = {
      valueType: "Category",
      labelIntersectAction: "Rotate45",
      visible: true
    },
    asseY = {
      visible: false
    },
    serie = function(ds, name) {
      return {
        pointColorMapping: "text",
        dataSource: ds,
        xName: "x",
        yName: "y",
        type: "Bar",
        name: name,
        legendShape: "Circle",
        marker: marker,
        columnSpacing: 0.2,
        columnWidth: 0.8
      };
    };

  grafici.survey = new ej2_charts_3.AccumulationChart(
    {
      legendSettings: legend,
      enableSideBySidePlacement: false,
      primaryXAxis: asseX,
      primaryYAxis: asseY,
      chartArea: { border: { width: 0 } },
      series: [serie(data.GraficoSurvey, _traduzioniVWCountries.survey)],
      width: "95%",
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      },
      axisLabelRender: function(args) {
        // Nascondo le label pe mostrare le icone in annotations.
        if (args.axis.name == "primaryXAxis") args.text = "";
      },
      textRender: function(args) {
        if (args.text == "0") args.text = "";
      },
      annotations: [
        {
          region: "Chart",
          coordinateUnits: "Pixel",
          content: '<i class="fa fa-meh-o"></i>',
          x: "3%",
          y: "20%"
        },
        {
          region: "Chart",
          coordinateUnits: "Pixel",
          content: '<i class="fa fa-frown-o"></i>',
          x: "3%",
          y: "50%"
        },
        {
          region: "Chart",
          coordinateUnits: "Pixel",
          content: '<i class="fa fa-smile-o"></i>',
          x: "3%",
          y: "80%"
        }
      ]
    },
    "#graficoSurvey"
  );

  $("#surveyPositive").text(data.SurveyPos + "%");
  $("#surveyNegative").text(data.SurveyNeg + "%");
  $("#surveyMeh").text(data.SurveyIndiff + "%");
  $("#surveyReplies").text(data.SurveyReply + "%");
}

function revenues(data) {
  if (!abilitazioni.revenues) {
    disabilitaPannello("panelRevenuesID");
    return;
  }

  grafici.revenues = new ej2_charts_1.Chart(
    {
      margin: { top: 0, bottom: 0, left: 0, right: 0 },
      legendSettings: {
        enablePages: false,
        visible: true,
        position: "Bottom"
      },
      sideBySidePlacement: true,
      primaryXAxis: {
        valueType: "Category",
        labelIntersectAction: "Rotate45",
        visible: true
      },
      primaryYAxis: {
        minimum: 0,
        maximum: data.RevGraficoMaxY,
        labelFormat: "{value}",
        edgeLabelPlacement: "Shift"
      },
      chartArea: {
        border: { width: 0 }
      },
      series: [
        {
          type: "Line",
          dataSource: data.RevTargetPerMese,
          xName: "x",
          yName: "y",
          width: 2,
          name: "Target",
          marker: { visible: true, width: 5, height: 5, shape: "Rectangle" }
        },
        {
          dataSource: data.RevGraficoPerMese[0].dataSource,
          xName: "x",
          yName: "y",
          type: "StackingColumn",
          name: data.RevGraficoPerMese[0].name,
          legendShape: "Circle",
          columnSpacing: 0.2,
          columnWidth: 0.8
        },
        {
          dataSource: data.RevGraficoPerMese[1].dataSource,
          xName: "x",
          yName: "y",
          type: "StackingColumn",
          name: data.RevGraficoPerMese[1].name,
          legendShape: "Circle",
          columnSpacing: 0.2,
          columnWidth: 0.8
        }
      ],
      width: "95%",
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      }
    },
    "#graficoRevenues"
  );
}

function todayAllocated(data) {
  if (!abilitazioni.todayAllocated) {
    disabilitaPannello("panelTodayID");
    return;
  }

  var marker = {
    dataLabel: {
      visible: true,
      position: "Outer",
      font: { fontWeight: "600" }
    }
  };

  grafici.todayAllocated = new ej2_circulargauge_1.CircularGauge(
    {
      moveToCenter: false,
      allowMargin: false,
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args);
      },
      axes: [
        {
          radius: "100%",
          lineStyle: { width: 0, color: "transparent" },
          labelStyle: { font: { size: "0px", color: "trasparent" } },
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          minimum: 0,
          maximum: 100,
          startAngle: 270,
          endAngle: 90,
          ranges: [
            {
              start: 0,
              end: 100,
              startWidth: 20,
              endWidth: 20,
              color: coloriGauge.verde,
              linearGradient: {
                startValue: "0%",
                endValue: "100%",
                colorStop: [
                  { color: coloriGauge.rosso, offset: "0%", opacity: 1 },
                  { color: coloriGauge.giallo, offset: "50%", opacity: 1 },
                  { color: coloriGauge.verde, offset: "100%", opacity: 1 }
                ]
              },
              roundedCornerRadius: 0
            }
          ],
          pointers: [
            {
              animation: { enable: true },
              value: data.TodayAllocated,
              radius: "85%",
              color: "#262626",
              pointerWidth: 5,
              cap: {
                radius: 5,
                border: { color: "#262626", width: 1.5 },
                color: "trasparent"
              },
              needleTail: { length: "0%" },
              needleStartWidth: 1
            }
          ],
          annotations: [
            {
              content: "<h1>" + data.TodayAllocated + "%</h1>",
              angle: 82,
              radius: "210%",
              zIndex: "1" // di default è -1...
            }
          ]
        }
      ]
    },
    "#graficoTodayAllocated"
  );
  grafici.todayAllocated.refresh();

  grafici.chargedToCustomers = new ej2_lineargauge_1.LinearGauge(
    {
      orientation: "Horizontal",
      height: altezzaGauge,
      width: widthGauge,
      loaded: function(args) {
        fixGauge(args, true);
      },
      axes: [
        {
          line: { width: 0 },
          labelStyle: { format: "{value}%", offset: 30 },
          pointers: [
            {
              value: data.ChargedToCustomers,
              height: 10,
              width: 10,
              markerType: "Triangle",
              placement: "Near",
              offset: -45
            }
          ],
          majorTicks: { height: 0 },
          minorTicks: { height: 0 },
          ranges: [
            {
              start: 0,
              end: 100,
              startWidth: 30,
              endWidth: 30,
              color: coloriGauge.verde,
              linearGradient: {
                startValue: "0%",
                endValue: "100%",
                colorStop: [
                  { color: coloriGauge.rosso, offset: "0%", opacity: 1 },
                  { color: coloriGauge.giallo, offset: "50%", opacity: 1 },
                  { color: coloriGauge.verde, offset: "100%", opacity: 1 }
                ]
              }
            }
          ]
        }
      ],
      annotations: [
        {
          content: "<h1>" + data.ChargedToCustomers + "%</h1>",
          x: 190,
          y: 15,
          zIndex: "1" // di default è -1...
        }
      ]
    },
    "#graficoChargedToCust"
  );
  grafici.chargedToCustomers.refresh();

  grafici.todayResources = new ej2_charts_1.Chart(
    {
      enableSideBySidePlacement: false,
      legendSettings: {
        visible: true,
        alignment: "Near",
        position: "Bottom",
        padding: 2
      },
      primaryXAxis: {
        valueType: "Category",
        labelIntersectAction: "Rotate45",
        labelStyle: { size: "0px" },
        visible: false
      },
      primaryYAxis: {
        visible: true,
        majorTickLines: { width: 0 },
        minimum: 0,
        maximum: 120,
        labelStyle: { size: "0px" },
        labelFormat: "{value}",
        edgeLabelPlacement: "Shift"
      },
      chartArea: { border: { width: 0 } },
      series: [
        {
          dataSource: [data.GraficoTodayResources[0]],
          xName: "x",
          yName: "y",
          type: "Column",
          name: data.GraficoTodayResources[0].x,
          legendShape: "Circle",
          columnSpacing: 0.2,
          columnWidth: 0.8,
          marker: marker
        },
        {
          dataSource: [data.GraficoTodayResources[1]],
          xName: "x",
          yName: "y",
          type: "Column",
          name: data.GraficoTodayResources[1].x,
          legendShape: "Circle",
          columnSpacing: 0.2,
          columnWidth: 0.8,
          marker: marker
        },
        {
          dataSource: [data.GraficoTodayResources[2]],
          xName: "x",
          yName: "y",
          type: "Column",
          name: data.GraficoTodayResources[2].x,
          legendShape: "Circle",
          columnSpacing: 0.2,
          columnWidth: 0.8,
          marker: marker
        },
        {
          dataSource: [data.GraficoTodayResources[3]],
          xName: "x",
          yName: "y",
          type: "Column",
          name: data.GraficoTodayResources[3].x,
          legendShape: "Circle",
          columnSpacing: 0.2,
          columnWidth: 0.8,
          marker: marker
        }
      ],
      width: "95%",
      load: function(args) {
        args.chart.theme = "Bootstrap"; // Cambio i colori del grafico.
      }
    },
    "#graficoTodayResources"
  );
}
//#endregion

function onVideoWallResize() {
  var paneljsonbelow1500,
    paneljsonbelow1000,
    paneljsonbelow775,
    paneljsonbelow600;
  //if (window.matchMedia("(max-width: 1500px)").matches) {
  //    videoWallCountries.panels = paneljsonbelow1500;
  //    videoWallCountries.refresh();
  //}
  //if (window.matchMedia("(max-width: 1000px)").matches) {
  //    videoWallCountries.panels = paneljsonbelow1000;
  //    videoWallCountries.refresh();
  //}
  //if (window.matchMedia("(max-width: 775px)").matches) {
  //    videoWallCountries.panels = paneljsonbelow775;
  //    videoWallCountries.refresh();
  //}
  //if (window.matchMedia("(max-width: 600px)").matches) {
  //    videoWallCountries.panels = paneljsonbelow600;
  //    videoWallCountries.refresh();
  //}

  if (window.matchMedia("(max-width: 1919px)").matches) {
    videoWallCountries.panels = [
      {
        sizeX: 6,
        sizeY: 2,
        row: 0,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.todayAlloc + "</div>",
        content: "#panelToday",
        id: "panelTodayID"
      },
      {
        sizeX: 6,
        sizeY: 1,
        row: 1,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.utilizationRate + "</div>",
        content: "#panelUtilizationRate",
        id: "panelUtilizationRateID"
      },
      {
        sizeX: 6,
        sizeY: 3,
        row: 2,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.revenueTarget + "</div>",
        content: "#panelRevenuesTarget",
        id: "panelRevenuesTargetID"
      },
      {
        sizeX: 6,
        sizeY: 2,
        row: 3,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.marginDiscount + "</div>",
        content: "#panelMarginDiscount",
        id: "panelMarginDiscountID"
      },
      {
        sizeX: 6,
        sizeY: 2,
        row: 2,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.revenues + "</div>",
        content: "#panelRevenues",
        id: "panelRevenuesID"
      },
      {
        sizeX: 6,
        sizeY: 2,
        row: 4,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.marketing + "</div>",
        content: "#panelMarketing",
        id: "panelMarketingID"
      },
      {
        sizeX: 6,
        sizeY: 3,
        row: 5,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.kpi + "</div>",
        content: "#panelKPI",
        id: "panelKPIID"
      },
      {
        sizeX: 6,
        sizeY: 8,
        row: 6,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.survey + "</div>",
        content: "#panelSurvey",
        id: "panelSurveyID"
      },
      {
        sizeX: 6,
        sizeY: 1,
        row: 7,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.criticalCustomer + "</div>",
        content: "#panelCriticalCustomer",
        id: "panelCriticalCustomerID"
      }
    ];
    videoWallCountries.refresh();
  } else {
    videoWallCountries.panels = [
      {
        sizeX: 1,
        sizeY: 2,
        row: 0,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.todayAlloc + "</div>",
        content: "#panelToday",
        id: "panelTodayID"
      },
      {
        sizeX: 1,
        sizeY: 1,
        row: 2,
        col: 0,
        header: "<div>" + _traduzioniVWCountries.utilizationRate + "</div>",
        content: "#panelUtilizationRate",
        id: "panelUtilizationRateID"
      },
      {
        sizeX: 3,
        sizeY: 1,
        row: 0,
        col: 1,
        header: "<div>" + _traduzioniVWCountries.revenueTarget + "</div>",
        content: "#panelRevenuesTarget",
        id: "panelRevenuesTargetID"
      },
      {
        sizeX: 2,
        sizeY: 1,
        row: 1,
        col: 1,
        header: "<div>" + _traduzioniVWCountries.marginDiscount + "</div>",
        content: "#panelMarginDiscount",
        id: "panelMarginDiscountID"
      },
      {
        sizeX: 2,
        sizeY: 1,
        row: 2,
        col: 1,
        header: "<div>" + _traduzioniVWCountries.revenues + "</div>",
        content: "#panelRevenues",
        id: "panelRevenuesID"
      },
      {
        sizeX: 2,
        sizeY: 1,
        row: 0,
        col: 4,
        header: "<div>" + _traduzioniVWCountries.marketing + "</div>",
        content: "#panelMarketing",
        id: "panelMarketingID"
      },
      {
        sizeX: 3,
        sizeY: 1,
        row: 1,
        col: 3,
        header: "<div>" + _traduzioniVWCountries.kpi + "</div>",
        content: "#panelKPI",
        id: "panelKPIID"
      },
      {
        sizeX: 2,
        sizeY: 1,
        row: 2,
        col: 3,
        header: "<div>" + _traduzioniVWCountries.survey + "</div>",
        content: "#panelSurvey",
        id: "panelSurveyID"
      },
      {
        sizeX: 1,
        sizeY: 1,
        row: 2,
        col: 5,
        header: "<div>" + _traduzioniVWCountries.criticalCustomer + "</div>",
        content: "#panelCriticalCustomer",
        id: "panelCriticalCustomerID"
      }
    ];
    videoWallCountries.refresh();
  }

  setTimeout(function() {
    if (savedDataForResize != null) creaGrafici(savedDataForResize);
  }, 100);
}

});
