class Solution {
    dijkstra(V, edges, src) {
        const adj = Array.from({ length: V }, () => []);

        for (let [u, v, w] of edges) {
            adj[u].push([v, w]);
            adj[v].push([u, w]);
        }

        const dist = new Array(V).fill(Infinity);
        const visited = new Array(V).fill(false);
        dist[src] = 0;

        const heap = [];

        const push = (dist, node) => {
            heap.push([dist, node]);
            let i = heap.length - 1;
            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);
                if (heap[i][0] >= heap[parent][0]) break;
                [heap[i], heap[parent]] = [heap[parent], heap[i]];
                i = parent;
            }
        };

        const pop = () => {
            const top = heap[0];
            const end = heap.pop();
            if (heap.length > 0) {
                heap[0] = end;
                let i = 0;
                while (true) {
                    let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
                    if (left < heap.length && heap[left][0] < heap[smallest][0]) smallest = left;
                    if (right < heap.length && heap[right][0] < heap[smallest][0]) smallest = right;
                    if (smallest === i) break;
                    [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                    i = smallest;
                }
            }
            return top;
        };

        push(0, src);

        while (heap.length > 0) {
            const [curDist, u] = pop();
            if (visited[u]) continue;
            visited[u] = true;

            for (let [v, weight] of adj[u]) {
                if (!visited[v] && curDist + weight < dist[v]) {
                    dist[v] = curDist + weight;
                    push(dist[v], v);
                }
            }
        }

        return dist;
    }
}
