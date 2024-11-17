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
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false); 
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const itemsPerPage = 10;

  const data = selectedCategory === 'india-states' ? indiaStatesData : imfData;

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          {showSignUp ? (
            <SignUp
              onSignUpSuccess={() => setShowSignUp(false)}
              onSwitchToSignIn={() => setShowSignUp(false)}
            />
          ) : (
            <SignIn
              onSignIn={() => setIsSignedIn(true)} 
              onSwitchToSignUp={() => setShowSignUp(true)} 
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-grow">
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
