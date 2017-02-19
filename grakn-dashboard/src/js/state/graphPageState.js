/*
 * Grakn - A Distributed Semantic Database
 * Copyright (C) 2016  Grakn Labs Limited
 *
 * Grakn is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Grakn is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Grakn. If not, see <http://www.gnu.org/licenses/gpl.txt>.
 */

import Vue from 'vue';

const eventHub = new Vue();

const stringsMap = {
  computePath: [function initialString(node) {
    return 'compute path from ';
  },
    function firstClick(node) {
      return `"${node}" to `;
    },
    function secondClick(node) {
      return `"${node}";`;
    },
  ],
  relationsBetweenNodes: [function initialString(node) {
    return 'match $x id ';
  },
    function firstClick(node) {
      return `"${node}"; $y id `;
    },
    function secondClick(node) {
      return `"${node}"; $r ($x, $y);`;
    },
  ],
};

const store = {
  debug: true,
  stateName: 'graphState',
  queryBuilderMode: false,
  numOfClickedNodesInBuilding: 0,
  nameBuildingFunction: undefined,
  nextBuildingStep(node) {
    const stepString = stringsMap[this.nameBuildingFunction][this.numOfClickedNodesInBuilding](node);
    // Disable query builder mode if we reach the max number of clickable nodes for current query builder function
    if (this.numOfClickedNodesInBuilding === (stringsMap[this.nameBuildingFunction].length - 1)) {
      this.stopBuilderMode();
    }
    return stepString;
  },
  stopBuilderMode() {
    this.queryBuilderMode = false;
    this.numOfClickedNodesInBuilding = 0;
  },
  eventHub,
};

export default store;