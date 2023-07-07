import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import PostCard from './components/PostCard';
import AddPost from './components/AddPost';
import Stories from './components/Stories';
import SideNav from './components/SideNav';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <div className="App">
      <SideNav/>
      <Stories/>
      <AddPost/>
      <PostCard profilePicture={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"} username={"johndoe123"} time={"3h"} postImage={"https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3"}/>
      <PostCard profilePicture={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"} username={"johndoe123"} time={"3h"} postImage={"https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3"}/>
      <Suggestions profilePicture={"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"} username={"johndoe123"} time={"3h"} postImage={"https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3"}/>
    </div>
  );
}

export default App;
