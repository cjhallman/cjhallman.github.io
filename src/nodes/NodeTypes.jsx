import ProfileNode from './ProfileNode'
import CategoryNode from './CategoryNode'
import OrgNode from './OrgNode';

export const NODE_TYPES = {
  profile: ProfileNode,
  category: CategoryNode,
  org: OrgNode
};

export const NODE_HEIGHTS = {
  profile: 227,
  category: 50,
  org: 50,
  default: 40
}

export const NODE_WIDTHS = {
  profile: 256,
  category: 160,
  org: 180,
  default: 150
}

export const LEVEL_LAYOUT = {
  VERTICAL: "VERTICAL",
  HORIZONTAL: "HORIZONTAL"
}
export const NODE_LEVEL_LAYOUT = {
  default: LEVEL_LAYOUT.VERTICAL,
  category: LEVEL_LAYOUT.VERTICAL,
  profile: LEVEL_LAYOUT.HORIZONTAL
}