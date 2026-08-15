import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn />
    </div>
  );
}

export default Login;