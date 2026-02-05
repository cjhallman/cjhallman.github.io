import { Handle, Position } from '@xyflow/react';

export default function ProfileNode({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-64 text-center border border-gray-200">
      <img
        src={data.image}
        alt={data.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
      />
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p className="text-sm text-gray-600">{data.title}</p>

      {/* Outgoing connections */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}