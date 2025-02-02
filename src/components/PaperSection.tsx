import React from 'react';
import { FileText, BookOpen, Users } from 'lucide-react';

const papers = [
  {
    title: 'General Studies Paper I',
    description: 'Indian Heritage & Culture, History & Geography of the World and Society',
    chapters: [
      {
        title: 'Indian Heritage and Culture',
        questions: [
          "Discuss the contribution of Buddhism to Indian Culture and Art. (2023)",
          "Evaluate the role of Bhakti movement in the growth of regional languages. (2022)",
          "Discuss the major architectural features of Vijayanagara Empire. (2021)",
          "Examine the development of temple architecture in South India. (2020)",
          "Evaluate the contribution of Sufism to Indian Culture. (2019)",
          "Discuss the main features of Indus Valley Civilization. (2018)"
        ]
      },
      {
        title: 'Modern Indian History',
        questions: [
          "Analyze the role of Mahatma Gandhi in Indian National Movement. (2023)",
          "Discuss the significance of Civil Disobedience Movement. (2022)",
          "Examine the causes and impact of the Revolt of 1857. (2021)",
          "Evaluate the contribution of revolutionary movements to Indian freedom struggle. (2020)",
          "Discuss the role of Subhas Chandra Bose in Indian Independence. (2019)",
          "Analyze the impact of British economic policies on Indian economy. (2018)"
        ]
      },
      {
        title: 'Indian Geography',
        questions: [
          "Discuss the impact of climate change on Indian agriculture. (2023)",
          "Analyze the distribution of mineral resources in India. (2022)",
          "Examine the causes and effects of river pollution in India. (2021)",
          "Discuss the importance of monsoon in Indian economy. (2020)",
          "Analyze the problems of urbanization in India. (2019)",
          "Discuss the major physiographic divisions of India. (2018)"
        ]
      }
    ]
  },
  {
    title: 'General Studies Paper II',
    description: 'Governance, Constitution, Polity, Social Justice and International Relations',
    chapters: [
      {
        title: 'Indian Constitution',
        questions: [
          "Examine the federal features of Indian Constitution. (2023)",
          "Discuss the significance of Fundamental Rights. (2022)",
          "Analyze the role of Governor in state administration. (2021)",
          "Evaluate the importance of Directive Principles of State Policy. (2020)",
          "Discuss the emergency provisions in Indian Constitution. (2019)",
          "Examine the concept of cooperative federalism in India. (2018)"
        ]
      },
      {
        title: 'Governance',
        questions: [
          "Analyze the role of civil society in good governance. (2023)",
          "Discuss the importance of e-governance initiatives. (2022)",
          "Examine the challenges in public service delivery. (2021)",
          "Evaluate the role of social audit in governance. (2020)",
          "Discuss the importance of transparency in administration. (2019)",
          "Analyze the role of NGOs in development. (2018)"
        ]
      }
    ]
  },
  {
    title: 'General Studies Paper III',
    description: 'Technology, Economic Development, Biodiversity, Security and Disaster Management',
    chapters: [
      {
        title: 'Indian Economy',
        questions: [
          "Analyze the impact of GST on Indian economy. (2023)",
          "Discuss the challenges of agricultural marketing in India. (2022)",
          "Examine the role of MSMEs in Indian economy. (2021)",
          "Evaluate the performance of Make in India initiative. (2020)",
          "Discuss the problems of industrial development in India. (2019)",
          "Analyze the causes of agrarian crisis in India. (2018)"
        ]
      },
      {
        title: 'Science & Technology',
        questions: [
          "Discuss the applications of artificial intelligence in governance. (2023)",
          "Examine the importance of space technology in development. (2022)",
          "Analyze the role of biotechnology in agriculture. (2021)",
          "Evaluate the impact of digital revolution in India. (2020)",
          "Discuss the importance of renewable energy sources. (2019)",
          "Examine the challenges of cyber security in India. (2018)"
        ]
      }
    ]
  },
  {
    title: 'General Studies Paper IV',
    description: 'Ethics, Integrity and Aptitude',
    chapters: [
      {
        title: 'Ethics & Human Interface',
        questions: [
          "Discuss the role of ethics in public administration. (2023)",
          "Examine the importance of emotional intelligence in governance. (2022)",
          "Analyze the relationship between ethics and law. (2021)",
          "Evaluate the significance of professional ethics. (2020)",
          "Discuss the importance of moral values in administration. (2019)",
          "Examine the role of family in value education. (2018)"
        ]
      },
      {
        title: 'Case Studies',
        questions: [
          "You are a District Magistrate. A communal riot has broken out in your district. What measures would you take to restore peace? (2023)",
          "As a civil servant, you find your colleague is involved in corruption. What would be your response? (2022)",
          "You witness a road accident. The victim needs immediate medical attention. What would you do? (2021)",
          "Your subordinate has submitted a false travel claim. How would you handle this situation? (2020)",
          "You find a conflict between organizational rules and your personal values. How would you resolve it? (2019)",
          "Your senior asks you to ignore a case of environmental violation. What would be your response? (2018)"
        ]
      }
    ]
  }
];

const PaperSection = () => {
  const [expandedChapter, setExpandedChapter] = React.useState<string | null>(null);

  return (
    <div id="papers" className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Previous Year Questions</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Chapter-wise Questions (2018-2023)
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Master UPPSC Mains through systematic analysis of previous year questions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12">
          {papers.map((paper, paperIndex) => (
            <div key={paperIndex} className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-teal-600 px-6 py-8">
                  <h3 className="text-2xl font-bold text-white">{paper.title}</h3>
                  <p className="mt-2 text-teal-100">{paper.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-6 p-6">
                  {paper.chapters.map((chapter, chapterIndex) => (
                    <div key={chapterIndex} className="relative">
                      <div 
                        className="relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-500 rounded-xl border border-gray-200 hover:border-teal-500 transition-all duration-300 cursor-pointer"
                        onClick={() => setExpandedChapter(expandedChapter === `${paperIndex}-${chapterIndex}` ? null : `${paperIndex}-${chapterIndex}`)}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="rounded-lg inline-flex p-3 bg-teal-50 text-teal-700 ring-4 ring-white">
                              <FileText className="h-6 w-6" />
                            </span>
                            <h4 className="ml-4 text-lg font-semibold text-gray-900">{chapter.title}</h4>
                          </div>
                          <svg 
                            className={`h-6 w-6 text-teal-600 transform transition-transform ${expandedChapter === `${paperIndex}-${chapterIndex}` ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        
                        {expandedChapter === `${paperIndex}-${chapterIndex}` && (
                          <div className="mt-6 space-y-4">
                            {chapter.questions.map((question, qIndex) => (
                              <div key={qIndex} className="p-4 bg-teal-50 rounded-lg">
                                <p className="text-gray-800">{question}</p>
                                <button className="mt-2 text-sm text-teal-600 hover:text-teal-800 font-medium">
                                  View Solution →
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaperSection;