import useInputState from "../../Hooks/useInputState";


const HookForm = () => {

    // const nameState = useInputState('Rajoni Hookes')
    const emailState = useInputState('rojoni@sojoni.go')

    const handleSubmit = e => {
        console.log('from data', emailState.value);
        
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HookForm;