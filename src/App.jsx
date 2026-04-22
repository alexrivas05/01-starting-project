import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import{ useState } from 'react';
// function UserData(){
//   const user = {first:"George",last:"Salayka", age:"40" };

//   return (
//     <div>
//       <h2>Name: {user.last}, {user.first}</h2>
//       <h3>Age: {user.age}</h3>
//     </div>
//   )
// }

function App() {

  //const [selectedTopic, setSelectedTopic] = useState('Please click a button');
  //console.log("App is rendered");
  //let tabContent = "Please click a button";

  //function handleSelect(selectedButton){
    //setSelectedTopic(selectedButton);
    //console.log(selectedTopic);

    //console.log(selectedButton);

  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please Select a topic</p>;
  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>

      </div>
    )
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              {
              ...CORE_CONCEPTS[0]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[1]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[2]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[3]
              }
            />
            {
              // CORE_CONCEPTS.map((concept)=><CoreConcept {...concept}/>)
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={()=>handleSelect("Componets")}>Componets</TabButton>
            <TabButton onSelect={()=>handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={()=>handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={()=>handleSelect("State")}>State</TabButton>
          </menu>
          {selectedTopic}


        </section>
      </main>
    </div>
  );
}

export default App;
