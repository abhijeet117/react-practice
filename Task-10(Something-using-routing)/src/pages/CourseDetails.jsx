import { useParams } from "react-router"


const CourseDetails = () => {

    let params = useParams();
    console.log(params.id)
    
  return (
    
    <div className="p-4 flex h-full w-full items-center justify-center">
      <h1 className="text-3xl font-bold underline">{params.id} CourseDetails</h1>
    </div>
  )
}

export default CourseDetails