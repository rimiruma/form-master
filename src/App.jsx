
import './App.css'
// import HookForm from './compoonents/HookForm/HookForm'
import ReuseableForm from './compoonents/ReuseableForm/ReuseableForm'
// import RefForm from './compoonents/RefForm/RefForm'
// import SimpleForm from './compoonents/Simple/SimpleForm'
// import StatefulForm from './compoonents/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data', data);
    
}

const handleUpdateProfile = data => {
  console.log('update profile', data);
  
}


  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}> <div>
        <h2>Sign Up</h2>
        <p>Please sign up right now</p>
        </div></ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile update</p>
          </div>
      </ReuseableForm>
    </>
  )
}

export default App
