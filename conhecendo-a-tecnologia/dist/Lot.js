"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lot = /** @class */ (function () {
    function Lot() {
        this.products = [];
        this.date = new Date();
    }
    Lot.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    return Lot;
}());
exports.default = Lot;
