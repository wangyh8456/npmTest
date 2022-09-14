/**
 *工具类
 *
 * @class Tool
 */
export class Tool {
    constructor() {
        this.__items = []
    }

    /**
     *生成某个范围内的随机数
     *
     * @returns 生成的随机数
     * @memberof Tool
     * @param {number} min
     * @param {number} max
     */
    random(min,max){
        if(arguments.length===2){
            return Math.floor(min+Math.random()*((max+1)-min));
        }else{
            return null;
        }
    }
}