const mapa = []
const rows = 100 //cambia
const columns = 100
const total_nodos = rows * columns
const  aulas = [19477,19466,18565,18554,11421,
    11410,10509,10498,1887,1049,
    138, 1061, 149, 1871, 1835] //checkear con tamaño actualizado
const orientaciones = ['I', 'D', 'I', 'D', 'I', 'D', 'I', 'D', 'R', 'A', 'R', 'A', 'R', 'R', 'R']



let counter = 0;

//build adj matrix
for (const node of mapa) {
    if (node === 0) {
        for (let i = 0; i < 4; i++) {
            adj[counter][i] = false;
        }
    } else if (node === 1) {
        // Neighbors check
        // Above neighbor
        if (counter >= rows && mapa[counter - rows] === 1) {
            adj[counter][0] = true;
        } else {
            adj[counter][0] = false;
        }

        // Right neighbor
        if ((counter + 1) % rows !== 0 && mapa[counter + 1] === 1) {
            adj[counter][1] = true;
        } else {
            adj[counter][1] = false;
        }

        // Below neighbor
        if (counter < (rows * (columns - 1)) && mapa[counter + rows] === 1) {
            adj[counter][2] = true;
        } else {
            adj[counter][2] = false;
        }

        // Left neighbor
        if (counter % rows !== 0 && mapa[counter - 1] === 1) {
            adj[counter][3] = true;
        } else {
            adj[counter][3] = false;
        }
    }
    counter++;
}





function bfs(start, end, totalNodes, rows, adj) {
    function solve(s) {
        // Use an array as a queue.
        const queue = [s];
        const visited = new Array(totalNodes).fill(false);
        const previousNode = new Array(totalNodes).fill(-1);

        visited[s] = true;

        while (queue.length > 0) {
            // Dequeue the first node
            const currentNode = queue.shift();

            // Optimization: if we've reached the end, no need to explore further
            if (currentNode === end) {
                return previousNode;
            }

            // Define the neighbor offsets for a 2D grid
            const neighbors = [
                currentNode - rows,     // Top
                currentNode + 1,        // Right
                currentNode + rows,     // Bottom
                currentNode - 1         // Left
            ];

            // Check each neighbor
            for (let i = 0; i < 4; i++) {
                // Check if an edge exists and the neighbor has not been visited
                if (adj[currentNode][i] && !visited[neighbors[i]]) {
                    const nextNode = neighbors[i];
                    previousNode[nextNode] = currentNode;
                    visited[nextNode] = true;
                    queue.push(nextNode);
                }
            }
        }
        return previousNode;
    }
    function recoPath(startNode, endNode, previous) {
        const path = [];
        let current = endNode;
        // Traverse backwards from the end node to the start node
        while (current !== -1) {
            path.push(current);
            current = previous[current];
        }

        // The path is found if the start node is the first element
        if (path[path.length - 1] === startNode) {
            return path.reverse(); // Reverse to get the path from start to end
        }

        return []; // Return an empty array if no path was found
    }

    const rawPath = solve(start);
    const finalPath = recoPath(start, end, previousNodes);
    
    return finalPath;
}




















//ADJACENCY MATRIX: array 2d, cada nodo tiene [0,1,0,1] para sus cuatro vecinos
//cacho complicado para completar el adj matric
let grid = []
//def bfs(s,e / start,end)
//  def solve

const salida = aulas[0]
const llegada = aulas[1]

// choclo = bfs(salida,llegada)
