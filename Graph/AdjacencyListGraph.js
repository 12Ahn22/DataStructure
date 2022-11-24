class AdjacencyListGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // add vertext
  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }

  // addEdge - 무방향 그래프
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // removeEdge
  removeEdge(vertex1, vertex2) {
    // 배열이니까 잘라줘야할까?
    // 와..필터써서 하는구나.. 진짜 내 코드 무슨일임 진짜!!!
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
    // const v1Idx = this.adjacencyList[vertex1].indexOf(vertex2);
    // this.adjacencyList[vertex1].splice(v1Idx, 1);

    // const v2Idx = this.adjacencyList[vertex2].indexOf(vertex1);
    // this.adjacencyList[vertex2].splice(v2Idx, 1);
  }

  // 모든 곳에서 vertex를 지워야한다.
  removeVertex(vertex) {
    // const vertexList = this.adjacencyList[removeVertex];

    // vertexList.forEach((vertex) => {
    //   this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(
    //     (v) => v !== removeVertex
    //   );
    // });

    // delete this.adjacencyList[removeVertex];

    // while문을 쓰고 removeEdge를 사용하기! 헐..
    // 있는걸 쓰자 ㅜㅜ
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this, this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const g = new AdjacencyListGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B");
g.addEdge("A", "C");
// g.removeEdge("A", "B");
