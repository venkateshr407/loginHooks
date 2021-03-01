import { useState, useEffect} from 'react';

const useForm = (validate, callback) => {
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })
    const [error, setError] = useState({})
    const [isSubmit, setSubmit] = useState(false)

    const handleChange = e => {
        const { name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setError(validate(values))
        setSubmit(true)
    }

    useEffect(()=>{
        if(Object.keys(error).length === 0 && 
        isSubmit) {
            callback();
        }
    }, [error])
    return {handleChange, values, handleSubmit, error }
}
export default useForm;