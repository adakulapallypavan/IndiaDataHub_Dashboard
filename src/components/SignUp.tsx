// SignUp.tsx
import React from 'react';

interface SignUpProps {
  onSignUpSuccess: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUpSuccess }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96 mx-auto mt-20">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form onSubmit={(e) => { e.preventDefault(); onSignUpSuccess(); }}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
          <input type="password" id="password" className="w-full border border-gray-300 p-2 rounded" required />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
