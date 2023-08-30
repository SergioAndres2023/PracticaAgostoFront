import React , { useState , useEffect } from 'react';
import './Home.css';
import ImageUploader from '../../components/ImageUploader/ImageUploader.jsx';
import Card from '../../components/Card/Card.jsx';
import SharedImage from '../../components/SharedImage/SharedImage.jsx';

function Home() {
  const [image, setImage] = useState(null);
  //const [listImage , setListImage ] = useState([])


 const changeImage = e =>{

  console.log(e.target.files[0])
  setImage(e.target.files[0])
 }

 const onClickHandler = () => {
  if(!image){
    alert('debes cargar una imagen')
    return
  }

  const formdata = new FormData()
  formdata.append('image',image)
  
  fetch('http://localhost:3001/pictures/', {
    method: 'POST',
    body: formdata,
  }).then(res => res.text())
  .then(res => console.log(res))
  .catch(err => {
    console.log(err)
  })

  document.getElementById('imageInput').value = null
  setImage(null)

 }

  return (
    <>
      <div class="container m-3 p-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <input class="form-control" type="file" onChange={(e) => changeImage(e)}></input>
        </div>
        <input class="btn btn-primary" type="submit" onClick={(e) => onClickHandler(e)} value="Submit"></input>
      </div>

    
    </>
  );
}

export default Home;









