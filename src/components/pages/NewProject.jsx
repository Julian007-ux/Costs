import ProjectForm from '../Projects/ProjectForm';
import styles from './NewProject.module.css';

const NewProject = () =>{

    //PESQUISAR SOBRER O USE HISTORY

    function createPost(project) {
        //Inicialize
        project.cost = 0;
        project.services = [];


        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err));
    }


    return(
        <div className={styles.Conteiner} >
            <h1>Criar Projetos</h1>
            <p>Crie os seus projetos e depois adicionar os serviços</p>
            <ProjectForm  handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject;