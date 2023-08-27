import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Button from '../../components/Button/Button.js';


import './Home.css';

function Home() {
  const { user, setUserProfile } = useContext(UserContext);
  const { env } = useContext(EnvContext);

  const { getData, data, error, loading } = useGetData();

  const [button, setButton] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUserProfile({ ...user, ...data });
    if (data) {
      navigate('/profile');
    }
  }, [data]);


  // async function onClickHandler(e) {
  //   try {
  //     await getData({
  //       // route: `https://apihairs-7342.onrender.com/${e.target.value}`,
  //       route: `${env.HOST}${e.target.value}`,
  //       method: 'POST',
  //       mode: 'cors',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Headers': '*',
  //         'Access-Control-Allow-Credentials': true,
  //       },
  //       body: JSON.stringify({ 'username': user.username, 'mail': user.mail, 'password': user.password }),
  //     });
  //   } catch
  //   (error) {
  //     return;
  //   }

    // setUserProfile({ ...user, data });

    

  return (
    <>
     HOLA
    </>
  );

}

export default Home;
