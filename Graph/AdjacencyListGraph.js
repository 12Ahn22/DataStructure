class AdjacencyListGraph {
  constructor() {
    this.adjacencyList = {};

    // 테스트용 그래프 데이터
    // this.adjacencyList = {
    //   A: ["B", "C"],
    //   B: ["A", "D"],
    //   C: ["A", "E"],
    //   D: ["B", "E", "F"],
    //   E: ["C", "D", "F"],
    //   F: ["D", "E"],
    // };
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

  // 순회
  DFSrecursive(start) {
    // 결과를 저장하는 배열
    const result = []; // 순서
    const visited = {}; // 방문 vertex 배열
    const adjacencyList = this.adjacencyList; // 즉시 실행 함수 내부에서 this는 전역 객체기 때문에 변수로 선언해서 전달함

    // 즉시 실행 함수
    (function dfs(vertex) {
      // Base Case
      if (!vertex) return null;

      // 방문 처리
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        // 방문하지 않았다면 재귀 시킨다.
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  // 반복문 사용
  DFSIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};

    visited[start] = true;
    let currentVertext;
    // stack에 값이 있다면 계속 확인하기
    while (stack.length) {
      currentVertext = stack.pop();
      result.push(currentVertext);

      this.adjacencyList[currentVertext].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  // BFS 너비 우선 탐색
  BFSIterative(start) {
    const result = [];
    const queue = [start];
    const visited = {};
    visited[start] = true;

    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new AdjacencyListGraph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");

// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.removeEdge("A", "B");
