import styles from './Favoritos.module.css';
import Banner from 'componentes/Banner';
import Card from 'componentes/Card';
import Titulo from 'componentes/Titulo';
import { useFavoritoContext } from 'contexto/Favoritos';

function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => (
          <Card key={fav.id} id={fav.id} titulo={fav.titulo} capa={fav.capa} />
        ))}
      </section>
    </>
  );
}

export default Favoritos;