"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MiniPromise = /** @class */ (function () {
    function MiniPromise(fn) {
        this.value = null;
        this.state = 'PENDING';
        this.successCb = [];
        this.failedCb = [];
        try {
            fn(this.resolve.bind(this), this.reject.bind(this));
        }
        catch (error) {
            console.error(error);
        }
    }
    MiniPromise.prototype.resolve = function (val) {
        var _this = this;
        if (this.state === 'PENDING') {
            this.state = 'FULLFILLED';
            this.value = val;
            this.successCb.forEach(function (cb) { return cb(_this.value); });
        }
        return this;
    };
    MiniPromise.prototype.reject = function (err) {
        if (this.state === 'PENDING') {
            this.state = 'REJECTED';
            this.value = err;
        }
        return this;
    };
    MiniPromise.prototype.then = function (success, fail) {
        if (success) {
            if (this.state === 'PENDING') {
                this.successCb.push(success);
            }
        }
        if (fail) {
            if (this.state === 'PENDING') {
                this.failedCb.push(fail);
            }
        }
        return this;
    };
    return MiniPromise;
}());
exports.default = MiniPromise;
