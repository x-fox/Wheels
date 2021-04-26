type Callback = (val: unknown) => any;
type InitFunc = (resolve: Callback, reject: Callback) => any;

class MiniPromise {
  private value: unknown
  private state: string
  private failedCb: Callback[];
  private successCb: Callback[];
  
  constructor(fn: InitFunc) {
    this.value = null
    this.state = 'PENDING'
    this.successCb = []
    this.failedCb = []
    try {
      fn(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      console.error(error)
    }
  }

  resolve(val: unknown) {
    if(this.state === 'PENDING') {
      this.state = 'FULLFILLED'
      this.value = val
      this.successCb.forEach(cb => cb(this.value))
    }
    return this
  }

  reject(err: unknown) {
    if(this.state === 'PENDING') {
      this.state = 'REJECTED'
      this.value = err
    }
    return this
  }

  then(success: Callback, fail: Callback) {
    if(success) {
      if(this.state === 'PENDING') {
        this.successCb.push(success)
      }
    }
    if(fail) {
      if(this.state === 'PENDING') {
        this.failedCb.push(fail)
      }
    }
    return this
  }
}

export default MiniPromise