"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor() {
        this.color = (id) => {
            let colors = {
                0: { blocked: "#666666" },
                1: { active: "#AA00FF", blocked: "rgba(170,0,255,.6)" },
                2: { active: "#FFA500", blocked: "rgba(255,165,0,.6)" },
                3: { active: "#0000FF", blocked: "rgba(0,0,255,.6)" },
                4: { active: "#FFFF00", blocked: "rgba(255,255,0,.6)" },
                5: { active: "#00FF00", blocked: "rgba(0,255,0,.6)" },
                6: { active: "#FF0000", blocked: "rgba(255,0,0,.6)" },
                7: { active: "#00FFFF", blocked: "rgba(0,255,255,.6)" },
            };
            return colors[id];
        };
    }
}
exports.default = View;
