import { Injectable } from "@angular/core";

interface VsCodeApi {
    postMessage(message: any): void,
    setState(state: any): void;
    getState(): any;
}

declare function acquireVsCodeApi(): VsCodeApi;

@Injectable({
    providedIn: 'root'
})
export class VsCodeApiService {
    private vscode: VsCodeApi;  
    constructor() {
        this.vscode = acquireVsCodeApi();
    }
    
    getVsCodeApi(): VsCodeApi {
        return this.vscode;
    }
}