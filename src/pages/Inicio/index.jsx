import styles from './Inicio.module.css';
import Banner from 'componentes/Banner';
import Card from 'componentes/Card';
import Titulo from 'componentes/Titulo';
import { useEffect, useState } from 'react';

function Inicio() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/villyrosa/cinetag-api/videos')
      .then(resposta => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);
  
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>
    </>
  );
}

export default Inicio;