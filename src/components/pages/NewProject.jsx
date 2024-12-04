import ProjectForm from '../Projects/ProjectForm';
import styles from './NewProject.module.css';

const NewProject = () =>{
    return(
        <div className={styles.Conteiner} >
            <h1>Criar Projetos</h1>
            <p>Crie os seus projetos para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject;