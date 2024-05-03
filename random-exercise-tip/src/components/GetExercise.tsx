import { useDispatch } from "react-redux";


function GetExercise() {

    const dispatch = useDispatch();

    async function fetchExercise() {

        // const URL = 'https://api.exercisedb.com/v1/exercises/random';


        // fetch(URL)
    }


    return (
        <section>
            <button>Get Exercise Tip</button>
        </section>
    )
}

export default GetExercise;