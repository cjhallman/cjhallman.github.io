import { Handle, Position } from '@xyflow/react';

export default function OrgNode({ data, selected }) {
  return (
    <div
      className={`
        bg-white border rounded-xl shadow-sm
        px-4 py-3 w-45
        transition-all duration-200
        hover:shadow-md hover:-translate-y-0.5
        ${selected ? 'border-blue-500 shadow-md' : 'border-gray-200'}
      `}
    >
      {/* Incoming edge */}
      <Handle type="target" position={Position.Left} />

      <div className="flex items-start gap-3">
        {data.logo && (
          <img
            src={data.logo}
            alt={data.label}
            className="w-10 h-10 object-contain"
          />
        )}

        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900">
            {data.label}
          </h3>

          {data.role && (
            <p className="text-sm text-gray-600">
              {data.role}
            </p>
          )}

          {data.period && (
            <p className="text-xs text-gray-400">
              {data.period}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}