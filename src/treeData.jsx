import profileImage from './assets/Connor.jpg';
import { BriefcaseBusiness, Pickaxe } from "lucide-react";

export const treeData = {
  id: 'root',
  type: 'profile',
  data:{
    label: 'Connor Hallman',
    name: 'Connor Hallman',
    title: 'Software Engineer',
    image: profileImage
  },
  children: [
    {
      id: 'career',
      type: 'category',
      data: {
        label: 'Career',
        icon: <BriefcaseBusiness />
      },
      children: [
        { id: 'amazon', type: 'org', data: { label: 'Amazon' }},
        { id: 'infinitive', type: 'org', data: { label: 'Infinitive' }},
        { id: 'fast', type: 'org', data: { label: 'FAST Enterprises' }},
      ],
    },
    {
      id: 'sideprojects',
      type: 'category',
      data: {
        label: 'Side Projects',
        icon: <Pickaxe />
      },
      children: [
        { id: 'backgammon', type: 'org', data: { label: 'Backgammon' }}
      ]
    }
  ],
}
