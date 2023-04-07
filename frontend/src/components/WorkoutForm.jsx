import axios from 'axios';
import { useState } from 'react';

const WorkoutForm = ({ setWorkouts }) => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    await axios
      .post('/api/workouts', workout)
      .then((resp) => {
        setWorkouts((prevState) => [resp.data, ...prevState]);
        setError(null);
        setTitle('');
        setLoad('');
        setReps('');
      })
      .catch((error) => {
        // console.log(error.response);
        setError(error?.response?.data?.error);
      });
  };

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />

      <label>Load (in kg):</label>
      <input type='number' onChange={(e) => setLoad(e.target.value)} value={load} />

      <label>Number of Reps:</label>
      <input type='number' onChange={(e) => setReps(e.target.value)} value={reps} />

      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default WorkoutForm;
