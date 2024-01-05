module.exports = {
    prompt: ({inquirer}) => {
        const questions = [
            {
                type: 'input',
                name: 'component_name',
                message: 'Name of component'
            },
            {
                type: 'input',
                name: 'dir',
                message: 'Parent component?(Optional)'
            }
        ]


        return inquirer.prompt(questions).then(answers => {
            const {component_name, dir} = answers;
            const path = `${dir ? `${dir}/` : ''}${component_name}`;
            const absPath = `src/components/${path}`;
            return {...answers, path, absPath};
        });
    }
}