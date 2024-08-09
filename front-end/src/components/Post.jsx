import { Avatar } from '@chakra-ui/react';
import '../csses/pc/Post.css'

function Post(Props){

    const handleLike = (e) =>{
        if(e.target.className === "like"){
            let deslike = document.getElementsByClassName('deslike')[0];
            deslike.src = "https://media.discordapp.net/attachments/1063644612436185189/1271405201680764948/image.png?ex=66b737dd&is=66b5e65d&hm=e59afd8f819f33388e128a9183b290ac356576c6f2c5b57d7ab6cfc7f402234e&=&format=webp&quality=lossless&width=517&height=473"
            e.target.src = "https://media.discordapp.net/attachments/1063644612436185189/1271404919802564659/image.png?ex=66b7379a&is=66b5e61a&hm=96999055f31a168359b6dd85a53c111e72f277824d958fcfdf41ad1412825f55&=&format=webp&quality=lossless&width=518&height=473"
        } else{
            let like = document.getElementsByClassName('like')[0];
            like.src = "https://media.discordapp.net/attachments/1063644612436185189/1271403337803104327/image.png?ex=66b73621&is=66b5e4a1&hm=62bedada172984795099c870a3f4f075ee11f775cebe20b5eba96b0a0b006694&=&format=webp&quality=lossless&width=518&height=473"
            e.target.src = "https://media.discordapp.net/attachments/1063644612436185189/1271405038543310848/image.png?ex=66b737b6&is=66b5e636&hm=0935a50f418e58249629edaaacf6d83cb8c37a4b719eeefd8014b95f9b853b45&=&format=webp&quality=lossless&width=521&height=473"
        }
    }

    return(
        <div className='postDiv'>
            <div className='postOwner'>
                <div className='user'>
                    <img className="profilePicture" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"/>
                    <div>
                        <h5>Anonymous</h5>
                        <h4>{Props.date}</h4>
                    </div>
                </div>
                <div className='rating'>
                    <h5>0</h5>
                    <img onClick={handleLike} className='like' src="https://media.discordapp.net/attachments/1063644612436185189/1271403337803104327/image.png?ex=66b73621&is=66b5e4a1&hm=62bedada172984795099c870a3f4f075ee11f775cebe20b5eba96b0a0b006694&=&format=webp&quality=lossless&width=518&height=473"/>
                </div>
                
            </div>
            <div className='postContent'>
                <p>{Props.description}</p>
            </div>
            

        </div>

    );
}

export default Post;