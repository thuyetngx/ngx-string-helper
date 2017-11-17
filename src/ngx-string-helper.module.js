import { NgModule } from '@angular/core';
import { NgxStrHelper } from './ngx-string-helper';
export function NgxStrHelperFactory() {
    return new NgxStrHelper();
}
;
var NgxStrHelperModule = (function () {
    function NgxStrHelperModule() {
    }
    return NgxStrHelperModule;
}());
export { NgxStrHelperModule };
NgxStrHelperModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    {
                        provide: NgxStrHelper,
                        useFactory: NgxStrHelperFactory
                    }
                ]
            },] },
];
/** @nocollapse */
NgxStrHelperModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ngx-string-helper.module.js.map