import {
  flowRendererV2,
  flowStyles
} from "./chunk-Z5SOXUDA.js";
import "./chunk-QZHGZBSP.js";
import {
  flowDb,
  parser$1
} from "./chunk-4UNY5Q3P.js";
import "./chunk-XKMFUPME.js";
import "./chunk-RLD3HTE3.js";
import "./chunk-PK2QWBFH.js";
import "./chunk-ELFEIT5J.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-OES3ZQV5.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/.pnpm/mermaid@10.9.3/node_modules/mermaid/dist/flowDiagram-v2-96b9c2cf.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-96b9c2cf-XXVSMI7W.js.map
