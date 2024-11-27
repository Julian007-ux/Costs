import styles from './Home.module.css'

import savings from '../img/savings.svg'

import Bottun from '../layout/Bottun';

const Home = () =>{
    return(
        <section className={styles.Conteiner} >
            <h1>Seja bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora!</p>
            <Bottun name="Criar Projeto" url="/newproject"/>
            <img src={savings} alt="savings-img" />
        </section>
    )
}

export default Home;