import React from 'react';
import { editorialTeam } from '@/app/data/data';

const EditorialTeam = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Editorial Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {editorialTeam.slice(0, 3).map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            affiliation={member.affiliation}
            position={member.position}
          />
        ))}
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
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{position}</p>
      <p className="text-gray-600">{affiliation}</p>
    </div>
  );
};

export default EditorialTeam;
