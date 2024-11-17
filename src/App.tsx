import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DataTable from './components/DataTable';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { indiaStatesData, imfData } from './data/dummyData';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('india-states');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false); // Start with SignIn
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const itemsPerPage = 10;

  const data = selectedCategory === 'india-states' ? indiaStatesData : imfData;

  // Conditional rendering for SignIn and SignUp pages
  if (!isSignedIn) {
    if (showSignUp) {
      return (
        <SignUp 
          onSignUpSuccess={() => setShowSignUp(false)} 
          onSwitchToSignIn={() => setShowSignUp(false)} 
        />
      );
    }
    return (
      <SignIn
        onSignIn={() => setIsSignedIn(true)} // Simulate successful login
        onSwitchToSignUp={() => setShowSignUp(true)} // Switch to SignUp
      />
    );
  }

  // Render main application after successful login
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <DataTable
          data={data}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default App;
