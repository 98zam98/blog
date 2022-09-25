import {useState,useEffect} from 'react';
import {PostRoute,Header ,Footer,Home,NewPost,PostPage,About,Missing} from "./component";
import { Context } from "./utils/Context";
import { useRoutes } from "react-router-dom";

function App() {
  //const [List, setList] = useState([])
  const [Post, setPost] = useState([
    {id:1,body:"1sadas"},
    {id:2,body:"1asdas"},
    {id:3,body:"asdfasf1"},
    {id:4,body:"asdfasdf1"},
    {id:5,body:"sdgdsv1"},
    {id:6,body:"1sdfasf"},
    {id:7,body:"asfasdf1"},
    {id:8,body:"1sdgdscxv"},
    {id:9,body:"asfgdsgsd1"},
    {id:10,body:"1sdfdgssd"},
    {id:11,body:"1sdgsdgzdx"},
    {id:12,body:"1sdfgsdfbv"},
    {id:13,body:"1sdsdvzfsd"},
    {id:14,body:"sdgsd1"},
    {id:15,body:"sdbvdbdfb1"},
    {id:16,body:"sdgvsdfv1"},
    {id:17,body:"1sdgvsdv"},
    {id:18,body:"1sdgvsdv"},
    {id:19,body:"1sdgvsdv"},
    {id:20,body:"1sdgvsdv"},
    {id:21,body:"1sdgvsdv"},
    {id:22,body:"1sdgvsdv"},
    {id:23,body:"1sdgvsdv"},
    {id:24,body:"1sdgvsdv"},
    {id:25,body:"1sdgvsdv"},
    {id:26,body:"1sdgvsdv"},
    {id:27,body:"1sdgvsdv"},
    {id:28,body:"1sdgvsdv"},
    {id:29,body:"1sdgvsdv"},
    {id:30,body:"1sdgvsdv"},
    {id:31,body:"1sdgvsdv"},
    {id:32,body:"1sdgvsdv"},
    {id:33,body:"1sdgvsdv"},
    {id:34,body:"1sdgvsdv"},
    {id:35,body:"1sdgvsdv"},
    {id:36,body:"1sdgvsdv"},
    {id:37,body:"1sdgvsdv"},
    {id:38,body:"1sdgvsdv"},
    {id:39,body:"1sdgvsdv"},
    {id:40,body:"1sdgvsdv"},
  ]);
  const [Search, setSearch] = useState('');
  const [SearchResult, setSearchResult] = useState([]);
  let zRoutes = useRoutes([
    {
      path:'/' ,
      element:<Context.Provider value={{Post, setPost}} ><Home /></Context.Provider>
    },
    {
      path:'/About' ,
      element:<About />
    },
    {
      path:'/Post/*' ,
      element:<Context.Provider value={{Post, setPost}} ><PostRoute /></Context.Provider>
    },
    {
      path:'*' ,
      element:<Missing />
    }
  ]);
  return (
    <div className='app' >
      
    <Header />
    {
      zRoutes
   }
   <Footer />
    </div>
  );
}

export default App;