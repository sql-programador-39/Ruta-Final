import LogoReact from "../assets/logo-react.jpg"
import Tag from "../components/Tag"

const Project = () => {
  return (
    <section >
      <div className="grid grid-cols-2 m-auto h-screen container">
        <div className="m-auto w-1/2">
          <img src={LogoReact} alt="" className="" />
        </div>

        <div className=" my-auto">
          <h1 className="text-4xl my-10"><span className="font-bold">Nombre: </span> Project name</h1>
          <p className="text-xl"><span className="font-bold text-3xl">Descripción:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure repellat pariatur soluta facere doloremque, voluptate iste saepe provident earum qui fuga dolorem nihil quam perspiciatis explicabo ea magni perferendis!</p>
          <Tag />
        </div>
      </div>
    </section>
  )
}

export default Project
