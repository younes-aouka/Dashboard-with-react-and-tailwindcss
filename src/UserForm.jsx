import { useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { clsx } from 'clsx';

const UserForm = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isSubmitting } } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
        defaultValues: {
            name: 'my name',
            email: 'myEmail@gmail.com',
            phone: '039234234',
            address: '@tokyo'
        },
    });
    
    const abortControllerRef = useRef(new AbortController()); 
    // Function to send the POST request
    const onValid = async (data) => {
        const controller = new AbortController();
        abortControllerRef.current = controller; 
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                signal: controller.signal, 
            });
            const result = await response.json();
            if (response.ok) {
                console.log("Form submitted successfully:", result);
            } else {
                console.error("Error submitting form:", result);
            }
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log("Request was aborted while sending");
            } else {
                console.error("Error occurred during request:", error);
            }
        }
    };

    useEffect(() => {
        return () => {
            abortControllerRef.current.abort();
            console.log("Fetch request aborted on component unmount");
        };
    }, []);

    const handleAbort = () => {
        abortControllerRef.current.abort();  
        console.log("Form submission has been cancelled or aborted because clicking button concel.");
    };

    const onInvalid = (errors) => {
        console.log(errors);
    };

    return (
        <form onSubmit={handleSubmit(onValid, onInvalid)} className='bg-white w-fit main-br relative left-1/2 -translate-x-1/2 -mt-[50px]'>
            <table className='inline-block py-5 pr-6 pl-5'>
                <tbody>
                    {/*name input */}
                    <tr>
                        <td className='py-2'>
                            <label htmlFor="">NAME:</label>
                        </td>
                        <td className='py-2'>
                            <input type="text" {...register('name', {
                                required: {
                                    value: true,
                                    message: 'NAME is required!'
                                }
                            })} className='main-b rounded-[4px] p-1' />
                        </td>
                    </tr>
                    {/*name Error message */}
                    <tr>
                        <td></td>
                        <td className='text-red-500 text-sm'>{errors.name ? errors.name.message : null}</td>
                    </tr>
                    {/*phone input */}
                    <tr>
                        <td className='py-2'>
                            <label htmlFor="">PHONE:</label>
                        </td>
                        <td className='py-2'>
                            <input type="tel" {...register('phone', {
                                required: {
                                    value: true,
                                    message: 'PHONE is required!'
                                }
                            })} className='main-b rounded-[4px] p-1' />
                        </td>
                    </tr>
                    {/* phone Error message */}
                    <tr>
                        <td></td>
                        <td className='text-red-500 text-sm'>{errors.phone ? errors.phone.message : null}</td>
                    </tr>
                    {/*email input */}
                    <tr>
                        <td className='py-2'>
                            <label htmlFor="">EMAIL:</label>
                        </td>
                        <td className='py-2'>
                            <input type="email" {...register('email', {
                                required: {
                                    value: true,
                                    message: 'EMAIL is required!'
                                }
                            })} className='main-b rounded-[4px] p-1' />
                        </td>
                    </tr>
                    {/*email Error message */}
                    <tr>
                        <td></td>
                        <td className='text-red-500 text-sm'>{errors.email ? errors.email.message : null}</td>
                    </tr>
                    {/*address input */}
                    <tr>
                        <td className='py-2'>
                            <label htmlFor="">ADDRESS:</label>
                        </td>
                        <td className='py-2'>
                            <input type="text" {...register('address', {
                                required: {
                                    value: true,
                                    message: 'ADDRESS is required!'
                                }
                            })} className='main-b rounded-[4px] p-1' />
                        </td>
                    </tr>
                    {/* address Error message */}
                    <tr>
                        <td></td>
                        <td className='text-red-500 text-sm'>{errors.address ? errors.address.message : null}</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex justify-around'>
                <button type="submit"
                    className={clsx('px-3 py-1 text-white rounded-[4px] mb-4 font-semibold',
                        (isDirty ? 'bg-main-color' : 'bg-special-txt-color/70'))}
                    disabled={isDirty === false || isSubmitting === true}>{isSubmitting ? "Saving..." : "Save"}</button>
                <button type="button"
                    onClick={handleAbort}
                    className="px-3 py-1 text-white rounded-[4px] mb-4 font-semibold bg-red-500">Cancel</button>
            </div>
        </form>
    );
};

export default UserForm;
