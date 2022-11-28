// 정말 정말 간단하고 좋지않은 우선순위 큐 - 일단 급하게 쓰기위해 만든 것
//  N Log N
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
    // {
    //   A : [{node:"B", weight : 30}]
    // }
  }

  // add
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // addEdge
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // 다익스트라
  dijkstar(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {}; // 거리를 기억하는 변수
    const previous = {}; // 이전 V 기억하는 변수
    const path = [];

    // 상태 초기화 하기
    // 가장 처음 distance를 만들기 = init
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        // Infinity는 비교하면 어케되나?
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null; // 이전 V는 null로 초기화
    }

    // 아직 방문할 것이 남아있는 경우
    // 우선순위 큐에 방문할 게 있는 경우
    let smallest;
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      // 찾던거 찾았냐?
      if (smallest === finish) {
        // WE ARE DONE
        // BUILD UP PATH RETURN
        // console.log(nodes);
        // console.log(distances);
        // console.log(previous);
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor of this.adjacencyList[smallest]) {
          // 거리 계산하기
          let candidate = distances[smallest] + neighbor.weight;
          if (candidate < distances[neighbor.node]) {
            // 가장 작은 거리로 변경
            distances[neighbor.node] = candidate;
            // 가장 작은 거리로 갈 때 이전 Vertex
            previous[neighbor.node] = smallest;
            // 새로운 우선순위 부여하기
            nodes.enqueue(neighbor.node, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstar("A", "E"));
