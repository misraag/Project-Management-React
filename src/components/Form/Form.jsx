import { forwardRef } from "react";

const FormRef = forwardRef( function Form ({labelName, isTextArea, ...props}, ref) {
    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    return <>
        <label className="text-sm font-bold uppercase text-stone-500">{labelName}</label>
        {isTextArea ?  <textarea {...props} className={classes} ref={ref}></textarea> :
        <input {...props} className={classes} required ref={ref}></input> }
    </>
}
)

export default FormRef