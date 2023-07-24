import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import PostAndCommPage from './pages/PostAndCommPage'
import MyPostPage from './pages/MyPostPage'
import CreatepostPage from './pages/CreatepostPage'

const MyRoute = createBrowserRouter([
  {
    path: '/*',
    element: <Page404 />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'my_posts',
    element: <MyPostPage />,
  },
  {
    path: 'create_post',
    element: <CreatepostPage />,
  },
  {
    path: 'post/:postId',
    element: <PostAndCommPage />,
  },
])

export default MyRoute

//? 404 Page Component
function Page404() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '2em', marginBottom: '0.5em' }}>
          404 Page Not Found
        </h1>
        <h3 style={{ fontSize: '1em' }}>This URL is not correct</h3>
      </div>
    </div>
  )
}
