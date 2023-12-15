import { useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../../api/auth";

export const useLoginLogic = () => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
        const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        try {
            await login(values)
        } catch (err) {
            // fazer algo
            console.log(err)
        } finally {
            setLoading(false);
            reset()
        }
    })

    const passwordControl = { showPassword, setShowPassword }
    const formControls = { register, onSubmit, errors, isSubmitting }

    return { loading, passwordControl, formControls }
}