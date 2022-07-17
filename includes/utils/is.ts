export const is = {
  defined: (val: any) => {
    if (typeof val !== "undefined") return true
    return false
  },

  aString: (val: any) => {
    if(typeof val === 'string') return true
    return false
  },
  
  aNumber: (val: any) => {
    if(is.isArray(val) && typeof val[0] === 'number') return true
    if (typeof val === "number") return true
    return false
  },

  isArray: (val: any) => {
    if(val instanceof Array<any>) return true
    return false
  }
}
