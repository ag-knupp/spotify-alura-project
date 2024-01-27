import React from 'react';
import Main from '../Main';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Home = () =>{
    return(
        <div class="bg-black overflow-y-auto custom-scrollbar">
        <div class="flex flex-wrap">
          <Sidebar/>  
          <Main/>
        </div>
    
        <Footer/> 
    </div>
    )
}
export default Home;