import { Handle, Position } from '@xyflow/react';
import { MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function ProfileNode({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 w-64 text-center border border-gray-200">
      {/* Avatar */}
      <img
        src={data.image}
        alt={data.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
      />
      {/* Name + Title */}
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p className="text-sm text-gray-600">{data.title}</p>
     
      {/* Divider */}
      <div className="mt-2 items-center justify-center gap-4 text-gray-500">
        <hr class="solid" />
      </div>

      {/* Meta row */}
      <div className="mt-2 flex items-center justify-center gap-4 text-gray-500">
        {/* Location */}
        <div className="flex items-center gap-1 text-sm">
          <MapPin size={14} />
          <span>San Diego, CA</span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/cjhallman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/hallmanconnor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <SiLinkedin size={18} />
          </a>
        </div>
      </div>

      {/* Outgoing connections */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}