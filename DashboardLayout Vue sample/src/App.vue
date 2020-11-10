<template>
  <div id="app" style="width: 100%; height: 100%">
    <!--  DashboardLayout element declaration -->
    <div class="control-section">
      <ejs-button id="add" class="e-btn e-info" v-on:click.native="update">
        update Property
      </ejs-button>
      <ejs-dashboardlayout id="dashboard_layout" :columns="5">
        <e-panels>
          <e-panel
            v-for="(item, index) in widgetSet"
            :key="index"
            :id="item.id"
            :row="item.row"
            :col="item.col"
            :sizeX="item.sizeX"
            :sizeY="item.sizeY"
            :minSizeX="item.minSizeX"
            :minSizeY="item.minSizeY"
            :header="'<div>' + item.name + '</div>'"
          />
        </e-panels>
      </ejs-dashboardlayout>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ButtonPlugin);
Vue.use(DashboardLayoutPlugin);
export default {
  name: "App",

  data() {
    return {
      widgetSet: [
        {
          sizeX: 1,
          sizeY: 1,
          row: 0,
          col: 0,
          id: "567",
          name: "panel1",
        },
        {
          sizeX: 1,
          sizeY: 1,
          row: 0,
          col: 1,
          id: "5671",
          name: "panel2",
        },
      ],
    };
  },
  computed: {},
  methods: {
    update: function (args) {
      this.widgetSet = [
        {
          sizeX: 1,
          sizeY: 1,
          row: 0,
          col: 0,
          id: "567",
          name: "panel3",
        },
        {
          sizeX: 1,
          sizeY: 1,
          row: 0,
          col: 1,
          id: "5671",
          name: "panel4",
        },
      ];
    },
  },
};
</script>

<style>

@import "/node_modules/@syncfusion/ej2-base/styles/material.css";
@import "/node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
 .dashboard-default #defaultLayout.e-dashboardlayout.e-control .e-panel:hover span {
        display: block;
    }
    
    .dashboard-default #defaultLayout .e-panel .e-panel-container .text-align{
        vertical-align: middle;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
    }
    
    .dashboard-default .e-template-icon {
        padding: 10px;
        float: right;
        display: none;
    }
    
    .dashboard-default .e-clear-icon::before {
        content: '\e7a7';
        font-size: 12px;
        font-family: 'e-icons';
    }
    .bootstrap4 .dashboard-default .e-clear-icon::before {
        content: '\e745';
    }
    
    .dashboard-default .text-align {
        line-height: 160px;
    }
    
    .dashboard-default .e-clear-icon {
        position: absolute;
        right: 0;
        cursor: pointer;
    }
/* high contrast style */
    body.highcontrast .dashboard-default #defaultLayout.e-dashboardlayout.e-control .e-panel {
        background: #000;
    }
</style>
