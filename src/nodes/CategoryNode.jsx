import { Handle, Position } from '@xyflow/react';

const handleStyle = { left: 10 };

export default function CategoryNode({ data }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-3 shadow-md min-w-[160px] text-center">
      <div className="flex items-center justify-center gap-2">
        {data.icon && <span className="text-lg">{data.icon}</span>}
        <span className="font-semibold text-blue-900">
          {data.label}
        </span>
      </div>

      {/* Incoming connection */}
      <Handle type="target" position={Position.Top} />

      {/* Outgoing connections */}
      <Handle type="source" position={Position.Bottom} style={handleStyle}/>
    </div>
  )
}