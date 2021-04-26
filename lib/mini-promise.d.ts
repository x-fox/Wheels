declare type Callback = (val: unknown) => any;
declare type InitFunc = (resolve: Callback, reject: Callback) => any;
declare class MiniPromise {
    private value;
    private state;
    private failedCb;
    private successCb;
    constructor(fn: InitFunc);
    resolve(val: unknown): this;
    reject(err: unknown): this;
    then(success: Callback, fail: Callback): this;
}
export default MiniPromise;
