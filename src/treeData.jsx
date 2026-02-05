import profileImage from './assets/Connor.jpg';

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
      data: {
        label: 'Career',
      },
      children: [
        { id: 'amazon', data: { label: 'Amazon' }, children: [
          { id: 'fis', data: { label: 'AWS Fault Injection Service (FIS)' }},
          { id: 'csba', data: { label: 'Customer Service by Amazon (CSBA)' }},
        ]},
        { id: 'infinitive', data: { label: 'Infinitive' }},
        { id: 'fast', data: { label: 'FAST Enterprises' }},
      ],
    },
  ],
}
