import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';

const ProjecForm = () => {
    return (
        <div>
            <form className={styles.Form_control} >
                <Input name="p_name" text="Nome do Projeto" placeholder="Insira o nome do projeto" type="text"/>
                <Input name="p_orcamento" text="Orçamento do Projeto" placeholder="Insira o orçamento do projeto" type="number"/>
                <Select name="p_orcamento" text="Selecione a Categoria"/>
                
                <div>
                    <input type="submit" value="Criar Projeto"/>
                </div>
            </form>
        </div>
    )
}

export default ProjecForm;