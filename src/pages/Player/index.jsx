import styles from './Player.module.css';
import Banner from 'componentes/Banner';
import Titulo from 'componentes/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/villyrosa/cinetag-api/videos?id=${parametros.id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(...dados);
      });
  }, [parametros]);

  if (!video) return <NaoEncontrada />;

  return (
    <>
      <Banner imagem="player"></Banner>
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe 
          width="560" 
          height="315" 
          src={video.link} 
          title={video.titulo}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        >
        </iframe>
      </section>
    </>
  );
}

export default Player;