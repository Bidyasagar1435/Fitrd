import { SignUp } from "@clerk/clerk-react";

function Register(){
    return(
        <div className="flex items-center justify-center min-h-screen">
            <SignUp />
        </div>
    );
}

export default Register;