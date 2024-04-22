import Container from "componentes/Container";
import Rodape from "componentes/Rodape";
import Cabecalho from "componentes/cabecalho";
import FavoritosProvider from "contexto/Favoritos";
import { Outlet } from "react-router-dom";

function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}

export default PaginaBase;