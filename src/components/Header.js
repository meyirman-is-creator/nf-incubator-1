
const Header = ({ title }) => (
  <header className="max-w-[1040px] mx-[auto] px-[15px] bg-blue-600 p-4 flex gap-[20px] items-center">
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="40" height="40" fill="white"><path d="M16.4,13.17c-.74-.74-1.73-1.15-2.77-1.15h-1.63v1.63c0,1.04,.41,2.04,1.15,2.77l6.84,6.84c.85,.85,2.24,1.01,3.17,.25,1.07-.88,1.13-2.46,.18-3.41l-6.93-6.93ZM.1,6C.57,3.72,2.59,2,5,2h14c2.41,0,4.43,1.72,4.9,4H.1Zm23.9,2v9c0,.3-.03,.59-.08,.87l-6.11-6.11c-1.11-1.11-2.62-1.73-4.19-1.73h-2.62c-.55,0-1,.45-1,1v2.63c0,1.57,.62,3.08,1.73,4.19l4.16,4.16H5c-2.76,0-5-2.24-5-5V8H24Z"/></svg>

    <h1 className="text-white text-2xl">{title}</h1>
  </header>
);

export default Header;