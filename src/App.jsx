import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import { treeData } from './treeData'
import { LEVEL_LAYOUT, NODE_TYPES, NODE_HEIGHTS, NODE_WIDTHS, NODE_LEVEL_LAYOUT } from './nodes/NodeTypes'
import '@xyflow/react/dist/style.css';

// Utility: flatten tree JSON into React Flow nodes and edges
const generateFlowElements = (tree) => {
  const spacingX = 60
  const spacingY = 60

  const nodes_queue = [{data: tree, x: 250, y: 50, level: 0, parentId: null}]
  const nodes = []
  const edges = []
  while (nodes_queue.length > 0){
    const node = nodes_queue.shift()
    if (node.data.children != undefined){
      if (node.data.children.length > 0){
          const currentHeight = NODE_HEIGHTS[node.data.type] ?? NODE_HEIGHTS.default
          const currentWidth = NODE_WIDTHS[node.data.type] ?? NODE_WIDTHS.default
          node.data.children.forEach((child, i) => {
            const childWidth = NODE_WIDTHS[child.type] ?? NODE_WIDTHS.default
            const childHeight = NODE_HEIGHTS[child.type] ?? NODE_HEIGHTS.default
            let verticalSpacing;
            let horizontalSpacing;
            if (NODE_LEVEL_LAYOUT[node.data.type] == LEVEL_LAYOUT.VERTICAL){
              verticalSpacing = currentHeight + spacingY + i * (childHeight + spacingY)
              horizontalSpacing = 20
            } else{
              verticalSpacing = currentHeight + spacingY
              horizontalSpacing = (currentWidth - childWidth)/2 - (node.data.children.length - 1) * (spacingX + childWidth) / 2 + i * (spacingX + childWidth)
            }
            nodes_queue.push({
              data: child,
              x: node.x + horizontalSpacing,
              y: node.y + verticalSpacing,
              level: node.level + 1,
              parentId: node.data.id
            })
          })
        }
    }
    
    nodes.push({ id: node.data.id, type: node.data.type, position: { x: node.x, y: node.y }, data: node.data.data })
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
        nodeTypes={NODE_TYPES}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />
    </div>
  );
}
