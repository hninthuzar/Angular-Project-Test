import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
let SettingComponent = class SettingComponent {
    constructor() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 15;
        this.vertical = false;
        this._tickInterval = 1;
    }
    ngOnInit() {
    }
    get tickInterval() {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    set tickInterval(value) {
        this._tickInterval = coerceNumberProperty(value);
    }
};
SettingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-setting',
        templateUrl: './setting.component.html',
        styleUrls: ['./setting.component.css'],
    })
], SettingComponent);
export { SettingComponent };
//# sourceMappingURL=setting.component.js.map