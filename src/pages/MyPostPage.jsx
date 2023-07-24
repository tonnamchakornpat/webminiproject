import Navbar from '../components/Navbar';
import { PostContent } from '../components/Post';
import '../styles/scss/main.scss'


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
      name: 'Usertest',
      title: 'topic',
      content:
        'Eos excepturi ipsa aut. Quia tempora inventore sunt quo impedit. Nemo quia repellat nesciunt dolores ipsa consequatur eos.',
      time: '3 june 2022',
    },
  ]

function MyPostPage() {
    return (
        <>
          <Navbar />
          <main
          >
            <section className="mypostsContainer">
              
              {posts?.map((post) => (
                
                <div className='mypostContainer' key={post.postId}>
                    <PostContent
                  postId={post.postId}
                  title={post.title}
                  content={post.content}
                  name={post.name}
                  dateTime={post.time}

                />
                <div className='buttonContainer'>
                <input type="button" value="Edit" />
                <input type="button" value="Delete" />
                </div>
               
                </div>
              ))}
              
            </section>
          </main>
        </>
        
      )

}

export default MyPostPage;