import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let VsCodeApiService = class VsCodeApiService {
    constructor() {
        this.vscode = acquireVsCodeApi();
    }
    getVsCodeApi() {
        return this.vscode;
    }
};
VsCodeApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], VsCodeApiService);
export { VsCodeApiService };
//# sourceMappingURL=vsCodeAPIService.js.map