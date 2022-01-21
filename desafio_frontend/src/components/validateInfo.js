

// export default function validateInfo(values) {
//     let errors = {}

//     if (!values.username.trim()) {
//         errors.username = "Espaço obrigatório!";
//     } else{
//         console.log('Recebi seu username!')
//     }

//     //Email
//     if(!values.email) {
//         errors.email = "Espaço obrigatório!";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//         errors.email = 'Digite um endereço de e-mail válido.';
//     } else{
//         console.log('Recebi seu email!')
//     }

    
//     if(!values.password) {
//         errors.password = "Espaço obrigatório!";
//     } else if (values.password.length < 8) {
//         errors.password = "Senha deve ter no mínimo 8 caracteres";
//     } else{
//         console.log('Recebi sua senha!')
//     }

    

//     return errors;
// }