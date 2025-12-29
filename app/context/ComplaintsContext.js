import React, { createContext, useContext, useState } from 'react';

const ComplaintsContext = createContext();

export function useComplaints() {
  const context = useContext(ComplaintsContext);
  if (!context) {
    throw new Error('useComplaints must be used within a ComplaintsProvider');
  }
  return context;
}

export function ComplaintsProvider({ children }) {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      text: 'Internet connection is very slow since morning. Unable to attend online classes.',
      category: 'Internet Service',
      date: 'Dec 25, 2025',
      status: 'Pending'
    },
    {
      id: 2,
      text: 'Power cut in room no. 205. Please fix it as soon as possible.',
      category: 'Electricity',
      date: 'Dec 20, 2025',
      status: 'Resolved'
    },
    {
      id: 3,
      text: 'Washroom needs urgent cleaning. Not cleaned for 2 days.',
      category: 'Cleaning',
      date: 'Dec 18, 2025',
      status: 'In Progress'
    }
  ]);

  const addComplaint = (complaintText, category) => {
    const newComplaint = {
      id: complaints.length + 1,
      text: complaintText,
      category: category,
      date: new Date().toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      }),
      status: 'Pending'
    };
    setComplaints([newComplaint, ...complaints]);
  };

  return (
    <ComplaintsContext.Provider value={{ complaints, addComplaint }}>
      {children}
    </ComplaintsContext.Provider>
  );
}