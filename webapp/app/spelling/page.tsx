"use client";
import React from 'react';
import LevelCard from '@/components/LevelCard';

const SpellingPage = () => {
  const cardData = [
    {
      title: "Level 1",
      letters: "A B C D E F G H",
      detailLinks: [
        { label: 'Star Learning!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-purple-600 hover:bg-purple-800 hover:scale-125 hover:font-bold' },
        { label: 'Let\'s Practice!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-purple-500 hover:bg-purple-800 hover:scale-125 hover:font-bold' },
        { label: 'Play Game!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-purple-400 hover:bg-purple-80 hover:scale-125 hover:font-bold0' }
      ],
      bgColor: 'bg-purple-100 hover:scale-125 hover:font-bold ',
    },
    {
      title: "Level 2",
      letters: "I J K L M N O P",
      detailLinks: [
        { label: 'Star Learning!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-red-600 hover:bg-red-800 hover:scale-125 hover:font-bold' },
        { label: 'Let\'s Practice!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-red-500 hover:bg-red-800 hover:scale-125 hover:font-bold' },
        { label: 'Play Game!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-red-400 hover:bg-red-800 hover:scale-125 hover:font-bold' }
      ],
      bgColor: 'bg-red-100 hover:scale-125 hover:font-bold',
    },
    {
      title: "Level 3",
      letters: "Q R S T U V W X Y Z",
      detailLinks: [
        { label: 'Star Learning!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-orange-600 hover:bg-orange-800 hover:scale-125 hover:font-bold' },
        { label: 'Let\'s Practice!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-orange-500 hover:bg-orange-800 hover:scale-125 hover:font-bold' },
        { label: 'Play Game!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-orange-400 hover:bg-orange-800 hover:scale-125 hover:font-bold' }
      ],
      bgColor: 'bg-orange-100 hover:scale-125 hover:font-bold',
    },
    {
      title: "Final Level",
      letters: "All Letters",
      detailLinks: [
        { label: 'Star Learning!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-blue-600 hover:bg-blue-800 hover:scale-125 hover:font-bold' },
        { label: 'Let\'s Practice!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-blue-500 hover:bg-blue-800 hover:scale-125 hover:font-bold' },
        { label: 'Play Game!', path: '/resources/support/teachingstrategies', buttonColor: 'bg-blue-400 hover:bg-blue-800 hover:scale-125 hover:font-bold' }
      ],
      bgColor: 'bg-blue-100 hover:scale-125 hover:font-bold',
    },

  ];

  return (
    <>
      <div className="bg-emerald-100 px-4 py-10">
        <div className="max-w-5xl mx-auto animate-in max-container padding-container" style={{ "--index": 1 } as React.CSSProperties}>
          <h1 className="text-5xl font-bold leading-tight">Spelling in Auslan</h1>
          <p className="text-2xl mt-2">Learn and practice spelling by choosing different levels</p>
        </div>
      </div>

      <div className="animate-in mt-12 px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {cardData.map((data, index) => (
          <LevelCard key={index} {...data} />
        ))}
      </div>

      <svg width="100%" height="20%" id="svg" className="fill-current bg-yellow-50 text-indigo-900 pt-8"
        viewBox="0 80 1440 70" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,400 L 0,150 C 84.29999999999998,140.8948717948718 168.59999999999997,131.78974358974358 248,125 C 327.40000000000003,118.2102564102564 401.9,113.73589743589744 475,123 C 548.1,132.26410256410256 619.8,155.26666666666668 714,146 C 808.2,136.73333333333332 924.9000000000001,95.19743589743588 1001,87 C 1077.1,78.80256410256412 1112.6,103.94358974358974 1179,120 C 1245.4,136.05641025641026 1342.7,143.02820512820512 1440,150 L 1440,400 L 0,400 Z"></path>
      </svg>
    </>
  );
}



export default SpellingPage;


