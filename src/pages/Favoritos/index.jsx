import styles from './Favoritos.module.css';
import Banner from 'componentes/Banner';
import Card from 'componentes/Card';
import Titulo from 'componentes/Titulo';

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id='1' titulo='Gato bonifácio' capa='https://cdn2.thecatapi.com/images/w4XH_7_B0F.png' />
      </section>
    </>
  );
}

export default Favoritos;