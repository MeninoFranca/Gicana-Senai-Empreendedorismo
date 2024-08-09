import { Button, ChakraBaseProvider, Textarea } from "@chakra-ui/react"
import '../csses/pc/ElogieAqui.css'
import { useEffect, useState } from "react"
import Post from './Post'
import axios from 'axios';

function ElogieAqui(Props){
    const [post,setPost] = useState("")
    const [posts,setPosts] = useState([])

    const conferirPostagens = async () =>{
        try{
            const response = await axios.get('http://localhost:3000/ideas');
            setPosts(response.data);
            console.log(posts)
        }catch(error){
            console.error(error);
        }
    }

    useEffect(()=>{
        const intervalId = setInterval(conferirPostagens, 2500)

    },[])

    const createPost = async (e) =>{
        e.preventDefault()

        try{
            axios.post('http://localhost:3000/ideas',{title:"Nulo",category:"Nulo",description:post},
                {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('elogieToken')}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            conferirPostagens()
        } catch (error){
            console.error(error)

        }
        
    }


    return(
        <div className="outterGlobal">
            <nav>
                <div>
                    <img src="https://logoipsum.com/logoipsum.png" className="logo"/>
                </div>
                <ul>
                    <li>
                        
                    </li>
                </ul>
                <div className="profileDiv">
                    <h5>{Props.noome}</h5>
                    <img className="profilePicture" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"/>
                </div>
            </nav>
            
            <div className="innerGlobal">
                <div className="createPost">
                    <form onSubmit={createPost} className="postForm">
                        <div className="post">
                            <Textarea type="input" value={post} onChange={(e) =>{setPost(e.target.value)}} resize="none" className="post-Text" colorScheme="blue" size="large"></Textarea>
                        </div>
                        <Button type="submit" size="lg" className="sendButton">{">"}</Button>
                    </form>
                </div>

                <div className="postPos">
                    <div className="posts">
                        {posts.map((poost, index) => (
                            <Post 
                                key={poost.id}
                                date={poost.created_at} 
                                username={poost.username} 
                                description={poost.description} 
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ElogieAqui