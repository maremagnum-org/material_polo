import { useNavigate } from "react-router-dom"

export const BackAndForward = () => {
    
    const navigate = useNavigate()
  
    return (
    <div className="row container-fluid pt-3">
        <div className="col d-flex justify-content-between">
            <button 
            className="btn btn-sm btn-primary rounded-3"
            onClick={() => navigate(-1)}
            >
                Back
            </button>

            <button 
            className="btn btn-sm btn-primary rounded-3"
            onClick={() => navigate(1)}
            >
                Next
            </button>
        </div>
    </div>
  )
}
