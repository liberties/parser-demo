const { SYMBOL, getSymbolStr } = require("../top_down_parser/SymbolDefine");

class Production {
  constructor(left, dotPos, right){
    if(dotPos > right.length){
      dotPos = right.length;
    }
    this.dotPos = dotPos;
    this.left = left;
    this.right = right;
  }

  dotForward(){
    return new Production(this.left, this.dotPos + 1, this.right);
  }

  getLeft(){
    return this.left;
  }

  getRight(){
    return this.right
  }

  getDotPosition(){
    return this.dotPos;
  }

  getDotSymbol(){
    if(this.dotPos >= this.right.length){
      return SYMBOL.UNKNOWN_SYMBOL;
    }
    return this.right[this.dotPos];
  }

  equals(prod){
    let bool = false;
    if(this.left === prod.getLeft() && this.right === prod.getRight && this.dotPos === prod.getDotPosition()){
      bool = true;
    }
    return bool;
  }

  print(){
    console.log(getSymbolStr(this.left) + " -> ");
    let str, printDot = false;
    for(let i = 0 ; i < this.right.length ; i++){
      str = "";
      if(i === this.dotPos){
        printDot = true;
        str += ".";
      }
      str += SYMBOL.getSymbolStr(this.right[i]) + ' '

    }
    if(!printDot){
      str += " . ";
    }
    console.log(str)
  }
}

module.exports = Production;