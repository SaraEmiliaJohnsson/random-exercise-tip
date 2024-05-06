import { ExerciseStatus } from "../features/randomExercise";
import { RootState } from "../main";
import { useSelector } from "react-redux";


function RandomExercise() {

    const randomExercise = useSelector((state: RootState) => state.RandomExercise);

    let content: string | null = null;

    switch (randomExercise.status) {
        case ExerciseStatus.NORMAL:
            content = 'Ready for a Exercise tip';
            break;
        case ExerciseStatus.FETCHING:
            content = 'Fetching Exercise tip';
            break;
        case ExerciseStatus.SUCCESS:
            content = randomExercise.fact;
            break;
        default:
            content = 'No Exercise available';
    }


    return (
        <section>
            {content}
        </section>
    )
}


export default RandomExercise;