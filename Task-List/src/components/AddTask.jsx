import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTask = ({handleSubmit, editid, task, setTask}) => {
    return (
        <section className='addTask'>
          <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task} autoComplete="off" placeholder="add task" maxLength="25" onChange={(e) => setTask(e.target.value)}/>
            <TextField
              required
              id="task"
              label="Task"
              variant="outlined"
              defaultValue="Add Task"
            />
            <Button variant="contained" type="submit">{ editid ? "Update" : "Add"}</Button>
          </form>
        </section>
    );
}

export default AddTask;