import { createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import PostAndCommPage from './pages/PostAndCommPage'
import MyPostPage from './pages/MyPostPage'
import CreatepostPage from './pages/CreatepostPage'
import EditPostPage from './pages/EditPostPage'

import RequireAuth from './checkAuth'

const MyRoute = createBrowserRouter([
  {
    path: '/*',
    element: <Page404 />,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <HomePage />
      </RequireAuth>
    ),
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'my_posts',
    element: (
      <RequireAuth>
        <MyPostPage />
      </RequireAuth>
    ),
  },
  {
    path: 'create_post',
    element: (
      <RequireAuth>
        <CreatepostPage />
      </RequireAuth>
    ),
  },
  {
    path: 'post/:postId',
    element: (
      <RequireAuth>
        <PostAndCommPage />
      </RequireAuth>
    ),
  },
  {
    path: 'my_posts/edit/:postId',
    element: (
      <RequireAuth>
        <EditPostPage />
      </RequireAuth>
    ),
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
