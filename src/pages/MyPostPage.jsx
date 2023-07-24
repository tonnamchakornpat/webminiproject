import Navbar from '../components/Navbar';
import { Post } from '../components/Post';

const posts = [
    {
      postId: 1234,
      name: 'User1234',
      title: 'Title',
      content:
        'Eos excepturi ipsa aut. Quia tempora inventore sunt quo impedit. Nemo quia repellat nesciunt dolores ipsa consequatur eos.',
      time: '2 june 2022',
    },
    {
      postId: 1222,
      name: 'User1234',
      title: 'Title',
      content:
        'Eos excepturi ipsa aut. Quia tempora inventore sunt quo impedit. Nemo quia repellat nesciunt dolores ipsa consequatur eos.',
      time: '2 june 2022',
    },
  ]

function MyPostPage() {
    return (
        <>
            <Navbar />
       
           

        </>
    )

}

export default MyPostPage;