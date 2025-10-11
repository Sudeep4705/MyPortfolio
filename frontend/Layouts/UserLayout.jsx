import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      
      <div className="layout">
        
        <main className="main-content">
           <Outlet/>
        </main>
      </div>
    </>
  );
}


export default UserLayout