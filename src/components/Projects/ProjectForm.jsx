import { useState, useEffect } from 'react';
import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import Bottun from '../layout/Bottun';

const ProjectForm = ( {btnText, handleSubmit, projectData} ) => {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});
    useEffect(() =>{
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'contente-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data);
        })
        .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(project);
        handleSubmit(project)
    }

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value});
    }
    const handleCategory = (e) => {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }});
    }
    return (
        <div>
            <form onSubmit={submit}  className={styles.Input_control} >
                <Input name="name"  value={project.name ? project.name : ''} handleChange={handleChange}  text="Nome do Projeto" placeholder="Insira o nome do projeto" type="text"/>
                <Input name="orcamento" value={project.orcamento ? project.orcamento : ''}  handleChange={handleChange}  text="Orçamento do Projeto" placeholder="Insira o orçamento do projeto" type="number"/>
                <Select name="orcamento" value={project.category ? project.category.id : ''}  handleCategory={handleCategory} text="Selecione a Categoria" options={categories} />
                <Bottun  type="submit" name = {btnText} />
            </form>
        </div>
    )
}

export default ProjectForm;