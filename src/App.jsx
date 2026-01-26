import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import { treeData } from './treeData'
import '@xyflow/react/dist/style.css';

// Utility: flatten tree JSON into React Flow nodes and edges
const generateFlowElements = (tree) => {
  const nodeWidth = 200
  const nodeHeight = 80
  const spacingX = 300
  const spacingY = 150

  const nodes_queue = [{data: tree, x: 250, y: 50, level: 0, parentId: null}]
  const nodes = []
  const edges = []
  while (nodes_queue.length > 0){
    const node = nodes_queue.shift()
    if (node.data.children != undefined){
      if (node.data.children.length > 0){
          node.data.children.forEach((child, i) => {
            nodes_queue.push({
              data: child,
              x: node.x - (node.data.children.length - 1) * spacingX / 2 + i * spacingX,
                y: node.y + spacingY,
                level: node.level + 1,
                  parentId: node.data.id
                })
          })
        }
    }
    
    nodes.push({ id: node.data.id, position: { x: node.x, y: node.y }, data: { label: node.data.label } })
    if (node.parentId != null){
      edges.push({ id: `${node.parentId}-${node.data.id}`, source: node.parentId, target: node.data.id, })
    }
  }
  return { nodes, edges }
}

const { nodes: initialNodes, edges: initialEdges } = generateFlowElements(treeData);

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}
