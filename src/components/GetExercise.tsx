import { useDispatch } from "react-redux";
import { fetchActions } from "../features/randomExercise";


function GetExercise() {

    const dispatch = useDispatch();

    const muscle = ['biceps', 'triceps', 'neck', 'adductors', 'lower_back', 'abdominals'];

    async function fetchExercise() {

        dispatch(fetchActions.isfetching());

        const randomMuscle = muscle[Math.floor(Math.random() * muscle.length)];
        const URL = `https://api.api-ninjas.com/v1/exercises?muscle=${randomMuscle}`;
        const apiKey = import.meta.env.VITE_API_KEY;


        try {
            const response = await fetch(URL, {
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            console.log(json);

            if (json && json.length > 0) {
                const randomIndex = Math.floor(Math.random() * json.length);
                const randomExercise = json[randomIndex].name;
                console.log(randomExercise);
                dispatch(fetchActions.success(randomExercise));
            } else {
                throw new Error('No exercise data available.')
            }
        } catch (error) {
            const message = (error as Error).message;
            console.error('error', message);
            dispatch(fetchActions.failure());

        }
    }




    return (
        <section>
            <button onClick={() => fetchExercise()}>Get Exercise Tip</button>
        </section>
    )
}

export default GetExercise;