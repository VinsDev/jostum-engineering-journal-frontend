import React from 'react';
import { editorialTeamHeads, editorialTeamMembers } from '@/app/data/data';

const EditorialTeam = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Editorial Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {editorialTeamHeads.slice(0, 3).map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            affiliation={member.affiliation}
            position={member.position}
          />
        ))}
      </div>
      <div className='my-2 '>
        <EditorialTeamList />
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  affiliation: string;
  position: string;
}

const TeamMember = ({ name, affiliation, position }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-800 text-md font-semibold">{position}</p>
      <p className="text-gray-600 text-md">{affiliation}</p>
    </div>
  );
};

const EditorialTeamList: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-semibold my-6 text-blue-600">Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {editorialTeamMembers.map((member, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <div className="text-lg font-medium text-gray-900">{member.name}</div>
            <div className="text-md text-gray-600">{member.affiliation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorialTeam;
