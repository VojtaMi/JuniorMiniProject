export default function FormInput({ label, id, errorMsg, ...props }: { label: string; id: string; errorMsg?: string; [key: string]: any }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                className="form-control"
                {...props}
            />
            <div className="control-error">{errorMsg && <p>{errorMsg}</p>}</div>
        </div>
    )
}