import React, { useCallback, useEffect, useState , useContext} from "react";
import { Button, Container, Form , Col , Row} from "react-bootstrap";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./styles.css";
import draftToHtml from "draftjs-to-html"
import { API_URL } from "../../globaldata/globaldata";
import { UserSetting } from "../../context/UserSettingProvider";

const NewBlogPost = props => {
  const {userSetting}=useContext(UserSetting)
  const [text, setText] = useState("");
  const handleChange = useCallback(value => {
    setText(draftToHtml(value));
  });
const [category,setCategory]=useState()
const [title,setTitle]=useState()
const [cover,setCover]=useState()
const [readTime,setReadTime]=useState()

//calcolo del tempo di lettura
const calcTime=(art)=>{
  const nWord=[...art].filter(x=>x===' ').length
  const totalTime=nWord/265;
  setReadTime({
    value: (totalTime<1)?1:parseInt(totalTime),
    unit:'min',
  })
}
//calcolo del tempo di lettura tramite funzione aspetto
useEffect(()=>calcTime(text),[text])
//invio del post al database
async function sendPost(e){
  e.preventDefault();
 
  //autore sempre tramite token Back End
  //form da inviare
  let newPostText={
    category: category,
    title: title,
    cover: cover,
    readTime: readTime,
    content: text,
  }
  let tokenAuth='Bearer '+userSetting.token;
  console.log(newPostText);
  console.log('Bearer '+userSetting.token)
  let newPost= new FormData()
  newPost.append('data',JSON.stringify(newPostText))
  newPost.append('cover',cover);
    try {
      const response = await fetch(API_URL+'/blogPosts/new',{
        method:"POST",
        body: JSON.stringify(newPostText),
        headers:{"Authorization": tokenAuth}
      })
      let result= await response.json();
      console.log(result);
      if(response.ok){
          //messaggio di evvenuto inserimento
          
      }else{
          const error = new Error(`HTTP Error! Status: ${response.status}`)
          error.response=response;
          throw error;
      } 
    }catch (error) {
            console.error(error)
    }
    }
  return (
    <Container className="new-blog-container">
      <Form className="mt-5" onSubmit={(e)=>sendPost(e)}>
        <Form.Group controlId="blog-title" className="mt-3">
          <Form.Label>Titolo</Form.Label>
          <Form.Control placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </Form.Group>
        <Row>
        <Form.Group as={Col} controlId="blog-category" className="mt-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control as="select" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option>Sport</option>
            <option>Food</option>
            <option>Music</option>
            <option>Tech</option>
            <option>New</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="blog-cover" className="mt-3">
          <Form.Label>Upload Cover Image</Form.Label>
          <Form.Control type='file' onChange={(e)=>setCover(e.target.files[0])} />
        </Form.Group>
        </Row>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Contenuto Blog</Form.Label>

          <Editor value={text} onChange={handleChange} className="new-blog-content" />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
          >
            Invia
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
