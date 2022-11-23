class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // 해시 함수
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // set
  set(key, value) {
    // key를 해시한다.
    const hashKey = this._hash(key);

    // 해시테이블에 값이 있는 지 확인한다.
    if (!this.keyMap[hashKey]) {
      // 없다면 value를 넣어서 빈 배열 생성
      this.keyMap[hashKey] = [];
    }
    // 키-밸류 넣어주기
    this.keyMap[hashKey].push([key, value]);
  }

  // get
  get(key) {
    const hashKey = this._hash(key);
    if (this.keyMap[hashKey]) {
      for (let i = 0; i < this.keyMap[hashKey].length; i++) {
        // 일치하는 값을 찾기 위해서..
        if (this.keyMap[hashKey][i][0] === key) {
          return this.keyMap[hashKey][i][1];
        }
      }
    }

    return undefined;
  }

  // keys 모든 키를 반환
  keys() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keyArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keyArr;
  }

  // values 모든 값들만 반환
  // 중복되는 값은 어떻게..처리하는지? -> 자유롭게하세요
  values() {
    // 시간복잡도 장난없어보이지않나요?
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // 넣기 전에 중복된 데이터가 있는지 확인하기
          if (valueArr.includes(this.keyMap[i][j][1])) continue;

          valueArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valueArr;
  }
}

const hashTable = new HashTable(3);
hashTable.set("red", "빨강");
hashTable.set("pink", "분홍");
hashTable.set("yellow", "노랑");
hashTable.set("daisy", "노랑");
hashTable.set("blue", "파랑");
