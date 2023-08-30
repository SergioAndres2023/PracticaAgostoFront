// import { useState, useContext, useEffect } from 'react';

// import './Home.css';

// function Home() {

//   //let image = "";
//   let [image, setImage ] = useState("");

//   function changeImage(e) {
//     setImage( e.target.value);
//   }

//   async function onClickHandler(e) {

//     try {
//       await fetch('http://localhost:3001/pictures', {
//         //route: `${env.HOST}${e.target.value}`,
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//           'Access-Control-Allow-Headers': '*',
//           'Access-Control-Allow-Credentials': true,
//         },
//         body: JSON.stringify({ 'title': 'hola', 'image': image }),
//       });
//     } catch
//     (error) {
//       return;
//     }

//     return;
//   }

//   return (
    // <>
    //   <div class="container m-3 p-5">
    //     <div class="mb-3">
    //       <label for="exampleFormControlInput1" class="form-label">Email address</label>
    //       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    //       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    //     </div>
    //     <div class="mb-3">
    //       <input class="form-control" type="file" onChange={(e) => changeImage(e)}></input>
    //     </div>
    //     <input class="btn btn-primary" type="submit" onClick={(e) => onClickHandler(e)} value="Submit"></input>
    //   </div>

    // {/* foreach(imagenes as img) {
    //   <Image image=image.image title = img.title></Image>
    // } */}
    // </>
//   );

// }

// export default Home;





// --------------------------------------

//  import fs from 'fs';
import fs from 'fs';

import React , { useState , useEffect } from 'react';
import './Home.css';
import ImageUploader from '../../components/ImageUploader/ImageUploader.jsx';
import Card from '../../components/Card/Card.jsx';
import SharedImage from '../../components/SharedImage/SharedImage.jsx';

function Home() {
  const [image, setImage] = useState(null);
  //const [listImage , setListImage ] = useState([])

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);



  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const imgData = event.target.result;
          const data = imgData.replace(/^data:image\/\w+;base64,/, "");
          const buf = Buffer.from(data, 'base64');

          // Guardar la imagen en la subcarpeta "images" dentro de "public"
          fs.writeFileSync(`public/images/${file.name}`, buf);

          setImage(`/images/${file.name}`); // Establecer la URL de la imagen

        } catch (error) {
          console.log(error);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const onClickHandler = async () => {
    try {
      let formData = { 'title': name, 'image': image, 'description': description };

      const response = await fetch('http://localhost:3001/pictures', {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
        },
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        // La imagen se subió con éxito
        // Realiza acciones adicionales si es necesario
      } else {
        console.error('Error al subir la imagen.');
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const sharedImages = [
    {
      imageUrl: 'url_de_la_imagen1',
      name: 'Nombre de la imagen 1',
      description: 'Descripción de la imagen 1',
    },
   
    // Agrega más imágenes compartidas según sea necesario
  ];

  return (
    <div className="container m-3 p-5">
      <div className="shared-images">
        {sharedImages.map((image, index) => (
          <SharedImage
            key={index}
            imageUrl={image.imageUrl}
            name={image.name}
            description={image.description}
          />
        ))}
      </div>

      <Card image={image} name={name} description={description} isExpanded={isExpanded} toggleExpand={toggleExpand} />

      <ImageUploader handleImageChange={handleImageChange} />

      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label">Descripción</label>
        <textarea
          className="form-control"
          id="descriptionInput"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={onClickHandler}>
        Enviar
      </button>
    </div>
  );
}

export default Home;









