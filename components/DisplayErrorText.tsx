import ErrorText from "./ErrorText"

export default function DisplayErrorText({_error}) {
    
    if (_error) {
        return <ErrorText errorMessage={_error.message} />
    } else {
        return <></>
    }

   
}