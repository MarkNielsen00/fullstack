
const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  );
}
const Part = ({part}) => {
  return(
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

const Content = ({parts}) => {
  return (
    <>
    <Part part = {parts[0]}></Part>
    <Part part = {parts[1]}></Part>
    <Part part = {parts[2]}></Part>
    </>
    /*
  <div>
  {part.map((a) => (
    <p>{a.name} {a.exercises}</p>
  ))}
  </div>*/  
  )
}
function totalExercises(arr) {
  let sum = 0;
  arr.forEach(element => { sum += element.exercises; });

  return sum;
}
const Total = ({parts}) => {
  return (
    <p>Number of exercises {totalExercises(parts)}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course = {course.name}/>
      
      <Content parts={course.parts}/>
      
      <Total parts = {course.parts}/>
    </div>
  );
}

export default App;
