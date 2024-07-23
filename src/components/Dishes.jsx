import { DISHES } from "../constants";
import DishCard from "./DishCard";

const Dishes = () => {
    return (
        <section className="mx-auto pt-10 pb-16" id="dishes">
            <h2 className="mb-8 text-center text-3xl tracking-tighter">Our Dishes</h2>
            <div className="flex flex-wrap justify-center items-center md:gap-4 px-4 mx-auto">
                {DISHES.map((project, index) => (
                    <DishCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Dishes;