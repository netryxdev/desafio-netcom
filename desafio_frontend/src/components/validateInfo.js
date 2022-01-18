

export default function validateInfo(values) {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = "Espaço obrigatório!";
    }

    //Email
    if(!values.email) {
        errors.email = "Espaço obrigatório!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Digite um endereço de e-mail válido.';
    }
    
    if(!values.password) {
        errors.password = "Espaço obrigatório!";
    } else if (values.password.length < 8) {
        errors.password = "Senha deve ter no mínimo 8 caracteres";
    }

    return errors;
}