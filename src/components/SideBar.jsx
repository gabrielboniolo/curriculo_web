import Avatar from '../images/perfil.jpg';
import '../styles/components/sidebar.sass';

const SideBar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Gabriel Boniolo" />
    <p className="title">Desenvolvedor</p>
    <p>redes sociais</p>
    <p>Informações de contato</p>
    <a href="" className="btn">
      Download currículo
    </a>
</aside>
}

export default SideBar