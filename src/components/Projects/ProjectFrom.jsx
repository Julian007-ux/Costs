const ProjecForm = () => {
    return (
        <div>
            <form>
                <div>
                    <input type="text" placeholder="Nome do projeto" />
                </div>
                <div>
                    <input type="number" placeholder="Informe o orçamento total do projeto" />
                </div>
                <div>
                    <select name="ProjetoType" id="ProjectType">
                        <option disabled>Selecione o tipo</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Criar Projeto"/>
                </div>
            </form>
        </div>
    )
}

export default ProjecForm;